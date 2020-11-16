<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center">
      <p class="display-1">Skills</p>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" clss>
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="(item, index) in items" :key="index">
        <v-card color="basil" flat>
          <v-card-text v-html="text[index]">text[index]</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Tabs extends Vue {
  tab = null;
  items = ["Front-End", "Back-End", "Dev-Ops", "All"];
  text = [
    "<p><strong>Languages:</strong> TypeScript JavaScript Dart HTML5 CSS3 Axios <p>" +
      "<p><strong>Frameworks:</strong> Vue.js Vue-x Flutter.io Angular React.js RxJS Jest.js SASS</p> ",
    "<p><strong>Languages:</strong> Java Python Dart Go SQL Swift C/C++ PHP" +
      "<p><strong>Frameworks & APIs:</strong> Spring-Boot GoFiber Gorm Node.js Express Flask Pytest CxOracle Pandas Laravel Twilio SMS API JNI" +
      "<p><strong>Databases & Data Stores:</strong> PostgresQL MySQL MongoDB Firebase Realtime Database LDAP</p>" +
      "<p><strong>Cluster Platforms:</strong>Apache Kafka Apache Spark</p>",
    "<p><strong>Container Orchestration & Virtualization:</strong> Docker Kubernetes Vagrant</p>" +
      "<p><strong>Cloud Computing:</strong> Google Cloud Platform Google Buckets Google App Engine Google Compute Engine Cloud SQL AWS EC2 Route 53</p>" +
      "<p><strong>Operating Systems:</strong> CentOS RHEL8.1 Ubuntu Linux2</p>",
    "TypeScript JavaScript HTML5 CSS3 Flutter.io Angular Vue.js Vue-x React.js RxJS Jest.js Axios SASS " +
      "Java Python Dart Go SQL Swift C/C++ PHP Apache Kafka Apache Spark Spring Boot Node.js Express Flask " +
      "Pytest Pandas Laravel MySQL MongoDB Twilio SMS API Firebase Realtime Database JNI",
    "Docker Kubernetes Google Cloud Platform AWS LDAP Vagrant"
  ];
}
</script>

<style lang="scss" scoped>
.theme--light.v-card {
  background-color: #263238;
  color: aliceblue;
}
.v-card__text {
  color: aliceblue !important;
}
</style>
