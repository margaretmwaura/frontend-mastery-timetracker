<template>
  <div class="main">
    <div class="main_back grid-y">
      <div class="main_back_top cell small-12 medium-2 large-2">
      </div>
      <div class="cell small-12 medium-8 large-8">
        <div class="grid-x">
          <div class="cell small-12 medium-1 large-1">
          </div>
          <div class="cell small-12 medium-10 large-10">
            <div class="grid-x grid-margin-x">
              <div class="cell small-12 medium-3 large-3">
                <profile></profile>
              </div>
              <div class="cell small-12 medium-3 large-3">
                <div class="grid-y grid-margin-y">
                  <div class="cell medium-6 small-12 large-6">
                    <card :background_color="red" :type="'Work'">
                      <template v-slot:hours>
                        <p>32hrs</p>
                      </template>
                    </card>
                  </div>
                  <div class="cell medium-6 small-12 large-6">
                    <card :background_color="green" :type="'Exercise'">
                      <template v-slot:hours>
                        <p>4hrs</p>
                      </template>
                    </card>
                  </div>
                </div>
              </div>
              <div class="cell small-12 medium-3 large-3">
              </div>
              <div class="cell small-12 medium-3 large-3">
              </div>
            </div>
          </div>
          <div class="cell small-12 medium-1 large-1">
          </div>
        </div>
      </div>
      <div class="cell small-12 medium-2 large-2">
      </div>
    </div>
  </div>
</template>

<script>

import styles from './assets/sass/_export.module.scss';
import Profile from "./components/Profile";
import Card from "./components/card";

export default {
  name: 'App',
  components: {
    Card,
    Profile
  },
  data(){
    return{
      red : styles.red,
      green : styles.green
    }
  },
  computed: {
    variable() {
      console.log(styles); // Object {}
      return styles || "not found";
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
