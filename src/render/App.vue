<template>
  <p>
      <button id="btnChange" class="active">Change Model</button>
  </p>
  
  <div>
      <canvas id="glcanvas" width="680" height="940" 
          style="border:dashed 1px #CCC">
      </canvas>
  </div>
  
  <div id="myconsole" style="color:#000">---- Log ----</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { sampleApp1 } from "./SampleApp1"

export var lapp = null;

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    lapp = new sampleApp1();
  }
}
</script>

<style>
.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
