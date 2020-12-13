<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center">
      <p class="display-1">Skills</p>
    </v-card-title>

    <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
      <v-tab v-for="item in items" :key="item" clss>{{ item }}</v-tab>
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
    "<p><strong>Languages:</strong> TypeScript (1 year), JavaScript (3.5 years), Dart (1 year), HTML5 (4 years), CSS3 (3.5 years)<p>" +
      "<p><strong>Frameworks:</strong> Vue.js (2.5 years), Vue-x (1.5 years), Flutter.io (1 year), Angular (1 year), React.js (1 year), RxJS (1 year), Jest.js (1 year),  Axios (3.5 years), SASS</p> ",
    "<p><strong>Languages:</strong> Java (3.5 years), Python (1.5 years), Dart (1 year), Go (1.5 years), SQL (2.5 years), Swift (0.5 year), C/C++ (1.5 year), PHP (2 years)" +
      "<p><strong>Frameworks & APIs:</strong> Spring-Boot GoFiber Gorm Node.js Express Flask Pytest CxOracle Pandas Laravel Twilio SMS API JNI" +
      "<p><strong>Databases & Data Stores:</strong> PostgresQL MySQL MongoDB Firebase Realtime Database LDAP</p>" +
      "<p><strong>Cluster Platforms:</strong> Apache Kafka Apache Spark</p>",
    "<p><strong>Container Orchestration & Virtualization:</strong> Docker Kubernetes Vagrant</p>" +
      "<p><strong>Cloud Computing:</strong> Google Cloud Platform Google Buckets Google App Engine Google Compute Engine Cloud SQL AWS EC2 Route 53</p>" +
      "<p><strong>Operating Systems:</strong> CentOS RHEL8.1 Ubuntu Linux2</p>",
    "<p>• TypeScript, JavaScript, HTML5, CSS3, Flutter.io, Angular, Vue.js, Vue-x, React.js</p>" +
      "<p>• RxJS, Jest.js, Axios, SASS, Java, Python, Dart, Go, SQL, Swift, C/C++, PHP, Apache Kafka</p>" +
      "<p>• Apache Spark, Spring-Boot, Node.js, Express, Flask, Pytest, Pandas, Laravel<p>" +
      "<p>• MySQL, MongoDB, Twilio, SMS, API, Firebase Realtime Database, JNI</p>" +
      "<p>• Docker, Kubernetes, Google Cloud Platform, AWS, LDAP, Vagrant</p>"
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
.tabs__card {
  color: white;
}
.v-tab {
  color: white !important;
}
</style>
