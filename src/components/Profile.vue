<template>
  <div class="profile">
    <div class="grid-y">
      <div class="cell medium-8 large-8 small-8 profile_details">
<!--        <img src="./img/image-jeremy.png" alt="...">-->
        <img />
        <p>Report for
          <br>
        <span>
          Jeremy
          <br>
          Robson
        </span>
        </p>
      </div>
      <div class="cell medium-4 large-4 small-4">

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {
      // logo: require('../../public/images/image-jeremy.png'),
      // name : 'image-jeremy.png'
    }
  },
  methods:{
    loadImg: function (path) {
      require(path)
    }
  }
}
</script>

<style scoped>

</style>