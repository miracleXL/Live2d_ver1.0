# gf_live2d

原计划是写一个能直接载入少女前线中未解密的live2d模型的小软件，写到一半准备写解密的时候发现少前不知何时已经换了新模型和加密算法（不过似乎没再加密了？）……这个使用老SDK的项目自然不可能兼容了，只得放弃，将项目存档
等研究透新模型的提取流程再尝试
目前该项目直接加载live2d version Sample 1.0.0的模型，人物模型放在src\render\assets\live2d，背景模型放在src\render\assets\background，无需修改任何代码。
存在某些过于简单（如只有一张图且没有任何动作的背景模型）无法正常显示的情况，未找到原因

## 项目模板来自electron-vue-vite

保留了以下模板内容

### cmd

- npm run dev
- npm run build

### 踩坑记

- import { write } from 'fs' 的这种形式会被 vite 编译成 /@modules/fs?import
- const { write } = require('fs') 这种形式就能用了 😉
- const { ipcRenderer } = require('electron') 同理
