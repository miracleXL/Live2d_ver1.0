<template>
  <button id="btnChange" class="active">Change Model</button>
  <canvas id="glcanvas"></canvas>
  <div id="myconsole" style="color:#000">---- Log ----</div>
</template>

<script>
import { LApp } from "./LApp"
// import { sampleApp1 } from "./SampleApp1"

export var lapp = null;

export default {
  name: 'App',
  components: {
    // Control
  },
  mounted(){
    lapp = new LApp();
    // window.onresize = ()=>{
    //   lapp.onResize();
    // }
  }
}
</script>

<style>
canvas{
  position: absolute;
  left: -2px;
  top: -2px;
  z-index: -1;
  /* width: 100%;
  height: 100%; */
  background-size: 150%;
  background-position: 50% 50%;
  /* background-image: url(assets/background/back_class_normal.png); */
  border: dashed 1px #CCC;
}
</style>
