<template>
  <div class="card grid-y" :style="myStyle">
    <div class="cell medium-2 large-2 small-2 card_top">
      <!--      <img :src="`./src/assets/images/${image}`">-->
<!--      <img src="http://timetrackerassets.s3.amazonaws.com/timetrackerassets/icon-play.svg"/>-->
      <img :src="`https://timetrackerassets.s3.us-east-2.amazonaws.com/${image}`"/>
    </div>
    <div class="cell medium-2 large-2 small-2 card_bottom">
      <div class="card_bottom_type">
        <p class="card_bottom_type_title">{{ type }}</p>
        <div class="card_bottom_type_images">
          <img/><img/><img/>
        </div>
      </div>
      <div class="card_bottom_hours">
        <slot name="hours"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ['background_color', 'type', 'image'],
  data() {
    return {
      myStyle: {
        backgroundColor: this.background_color,
      },
    }
  }
}
</script>

<style scoped>

</style>