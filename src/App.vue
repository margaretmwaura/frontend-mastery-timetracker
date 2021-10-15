<template>
  <div id="app" class="main">
    <div class="main_back grid-y">
      <div class="main_back_top cell medium-2 large-2 small-0">
      </div>
      <div class="cell medium-8 large-8 small-12">
        <div class="grid-x">
          <div class="cell medium-1 large-1 small-1">
          </div>
          <div class="cell medium-10 large-10 small-10">
            <div class="grid-x grid-margin-x">
              <div class="cell medium-3 large-3 small-12">
                <profile></profile>
              </div>
              <div class="cell medium-3 large-3 small-12">
              </div>
              <div class="cell medium-3 large-3 small-12">
              </div>
              <div class="cell medium-3 large-3 small-12">
              </div>
            </div>
          </div>
          <div class="cell medium-1 large-1 small-1">
          </div>
        </div>
      </div>
      <div class="cell medium-2 large-2 small-0">
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "./components/Profile";

export default {
  name: 'App',
  components: {
    Profile
  }
}
</script>

<style lang="scss">


</style>
