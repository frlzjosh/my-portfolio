<template>
  <v-app class="app">
    <v-app-bar app>
      <div class="d-flex align-center">
        <router-link class="app__links pl-4 pr-5" to="/">Resume</router-link>
        <router-link class="app__links pr-5" to="/information"
          >Information</router-link
        >
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({
    resumeActive: true,
    informationActive: false
  }),
  methods: {
    activeHyperlink() {
      let activeClass = "app__links app__links--off pr-5 pl-5 ";
      if (this.resumeActive) {
        activeClass += "app__links--on";
      } else {
        activeClass.replace("app__links--on", "");
      }
      if (this.informationActive) {
        activeClass += "app__links--off";
      } else {
        activeClass.replace("app__links--on", "");
      }
      console.log("activeClsas: ", activeClass);
      return activeClass;
    }
  }
});
</script>

<style lang="scss">
v-app {
  background-color: red !important;
}
.v-toolbar__content,
.v-toolbar__extension {
  background-color: #263238 !important;
}
.app {
  margin-bottom: 20px;
  background-color: #fafafa !important;
  &__links {
    font-size: 20px;
    font-weight: 450;
    color: white !important;
    text-decoration: none;
  }

  &__links--off {
    color: white !important;
  }
}
</style>
