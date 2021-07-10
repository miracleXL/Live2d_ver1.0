import { l2dLog, l2dError } from "./LApp"
import { lapp } from "./App.vue"
// const Path = require("path");
const fs = require("fs");

export const LAppDefine = {

    DEBUG_LOG : false,
    DEBUG_MOUSE_LOG : false, 
    // DEBUG_DRAW_HIT_AREA : false, 
    // DEBUG_DRAW_ALPHA_MODEL : false, 

    VIEW_WIDTH: window.innerWidth,
    VIEW_HEIGHT: window.innerHeight,

    VIEW_SCALE : 1.0,
    VIEW_MAX_SCALE : 2.0,
    VIEW_MIN_SCALE : 0.1,

    VIEW_LOGICAL_LEFT : -1,
    VIEW_LOGICAL_RIGHT : 1,

    VIEW_LOGICAL_MAX_LEFT : -2,
    VIEW_LOGICAL_MAX_RIGHT : 2,
    VIEW_LOGICAL_MAX_BOTTOM : -2,
    VIEW_LOGICAL_MAX_TOP : 2,
    
    
    PRIORITY_NONE : 0,
    PRIORITY_IDLE : 1,
    PRIORITY_NORMAL : 2,
    PRIORITY_FORCE : 3,


    MOTION_GROUP_IDLE : "idle", 
    MOTION_GROUP_TAP_BODY : "tap_body", 
    MOTION_GROUP_FLICK_HEAD : "flick_head", 
    MOTION_GROUP_PINCH_IN : "pinch_in", 
    MOTION_GROUP_PINCH_OUT : "pinch_out", 
    MOTION_GROUP_SHAKE : "shake", 

    
    HIT_AREA_HEAD : "head",
    HIT_AREA_BODY : "body"
    
};

let loading = 2;

export const fsRootPath = "src/render/"
let modelPath = "assets/live2d";

function searchModelJson(type/* true为model, false为background */, path, name){
    fs.readdir(fsRootPath + path, (err, files)=>{
        if(err){
            l2dError(err);
        }
        else{
            files.forEach((dirName)=>{
                let dir = path + "/" + dirName;
                let stats = fs.statSync(fsRootPath + dir);
                if(stats.isDirectory()){
                    addLive2dModels(type, dir, name + "_" + dirName /* l2dModels中的标识符 */);
                }
            })
        }
        loading--;
        if(loading === 0){
            lapp.initModels();
            console.log(l2dModels);
            console.log(backgroundModels);
        }
    })
}

function addLive2dModels(type/* true为model, false为background */, path, name){
    loading++;
    let jsonFile = path + "/model.json";
    if(fs.existsSync(fsRootPath + jsonFile)){
        if(type){
            l2dModels[name] = jsonFile;
            lapp.live2DMgr.modelNames.push(name);
        }
        else{
            backgroundModels[name] = jsonFile;
            lapp.live2DMgr.backgroundNames.push(name);
        }
        // l2dLog(loading);
    }
    else{
        searchModelJson(type, path, name);
    }
    loading--;
}

export const l2dModels = {
    // CG1: "assets/background/cg6/model.json",
    // M4A1 : "assets/live2d/m4a1_4505/normal/model.json",
    // MODEL_HARU_A : "assets/live2d/haru/haru_01.model.json",
    // MODEL_HARU_B : "assets/live2d/haru/haru_02.model.json",
    // MODEL_SHIZUKU : "assets/live2d/shizuku/shizuku.model.json",
    // MODEL_WANKO : "assets/live2d/wanko/wanko.model.json",
}

searchModelJson(true, modelPath, "");

let backgroundPath = "assets/background";
export const backgroundModels = {}

searchModelJson(false, backgroundPath, "");