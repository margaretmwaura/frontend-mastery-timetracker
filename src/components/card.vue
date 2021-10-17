<template>
    <div class="card" :style="myStyle">
    </div>
</template>

<script>
export default {
  name: "card",
  props : ['background_color'],
  data(){
    return{
      myStyle:{
        backgroundColor: this.background_color
      }
    }
  }
}
</script>

<style scoped>

</style>