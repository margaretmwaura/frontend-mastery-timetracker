<template>
  <div class="profile">
    <div class="grid-y">
      <div class="cell small-12 medium-8 large-8  profile_details">
<!--        For images check the object url image at the s3 bucket so as to get the right one -->
<!--        We are not using the images in the images folder due to the deployment in heroku-->
        <img :src="`https://timetrackerassets.s3.us-east-2.amazonaws.com/${name}`"/>
        <p>Report for
          <br>
          <span>
          Jeremy
          <br>
          Robson
        </span>
        </p>
      </div>
      <div class="cell small-12 medium-4 large-4 profile_schedule">
        <p class="profile_schedule_first">Daily</p>
        <p class="profile_schedule_second">Weekly</p>
        <p class="profile_schedule_third">Monthly</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data() {
    return {
      name : 'image-jeremy.png',
    }
  },
  methods: {
    loadImg: function (path) {
      require(path)
    },
  }
}
</script>

<style scoped>

</style>