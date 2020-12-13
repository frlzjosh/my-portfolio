<template>
  <v-expansion-panels
    v-model="panel"
    :disabled="disabled"
    class="py-5"
    multiple
  >
    <v-expansion-panel class="card">
      <v-expansion-panel-header disable-icon-rotate>
        <h2 class="card-header">{{ title }}</h2>
        <template v-slot:actions>
          <v-icon color="grey">$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <hr v-if="panel.length == 2" />
      <v-expansion-panel-content
        class="card-content"
        v-for="(body, index) in bodyContent"
        :key="index"
        v-html="body"
        >{{ body }}</v-expansion-panel-content
      >
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Card extends Vue {
  /* props */
  @Prop() title!: string;
  @Prop() bodyContent!: string[];

  /* data */
  panel: number[] = [0, 1];
  disabled = false;
  readonly = false;
}
</script>

<style lang="scss" >
hr {
  background-color: white;
  color: white;
  margin-bottom: 20px;
}
.card {
  background-color: #263238 !important;
  padding-bottom: 20px;
}
.card-header {
  color: white;
}
.card-content {
  margin-left: 20px;
  margin-bottom: -7.5px;
  color: white;
}

.v-expansion-panel::before {
  box-shadow: 2px 0.25px 2px 2px;
}

.v-expansion-panels:not(.v-expansion-panels--accordion):not(.v-expansion-panels--tile)
  > .v-expansion-panel--active {
  border-radius: 30px;
}
.project__link{
  font-size: 1.25em;
  padding-bottom: 10px;
  color: aliceblue !important;
}
.job__header{
  font-size: 1.25em;
}
</style>
