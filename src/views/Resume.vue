<template>
  <v-container>
    <h1>Resume</h1>
    <Card :title="schoolTitle" :bodyContent="schoolBodyContent" />
    <Card :title="experienceTitle" :bodyContent="experienceBodyContent" />
    <Card :title="projectsTitle" :bodyContent="projectsBodyContent" />
    <Tabs />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import Tabs from "@/components/Tabs.vue";

@Component({
  components: {
    Card,
    Tabs
  }
})
export default class Resume extends Vue {
  schoolTitle = "School";
  schoolBodyContent = [
    "<p>• Studied Computer Science at California State University - Northridge</p>",
    "<p>• Class of 2020</p>",
    "<p>• Deans list all 2019 & Spring 2020</p>"
  ];
  experienceTitle = "Work Experience";
  experienceBodyContent = [
    "<p class='job__header'>&nbsp;&nbsp;<strong>Toyota Connected Services (Software Engineer) | November 2020 - Present</strong></p>",
    "<p>• Communicationg with the back-end by creating asynchronous http GET & POST requests and mutating respones to a Vue-x store.</p1>",
    "<p>• Creating domain driven modules in Vue-x to manage data accross all components and views.</p1>",
    "<p class='job__header'>&nbsp;&nbsp;<strong>Medtronic (Software Engineering Intern) | June 2019 - October 2020</strong></p>",
    "<p>• Working with the Medtronic Carelink team on services relating to the care and treatment of diabetes.</p1>",
    "<p>• Developing full-fledged tools, features, and services primarily in <strong>Java, Python, and Angular</strong> for the Carelink R&D team.</p>",
    "<p>• Utilizing <strong>panda’s DataFrame</strong> structure to format configuration’s from production <strong>Oracle SQL</strong> databases into readable CSV reports and JSON.</p>",
    "<p>• Created an <strong>event-driven system</strong> that utilizes an <strong>actor model</strong> to concurrently execute services in <strong>Go</strong>.</p>",
    "<p>• Triggered notifications to the client-side by creating a stateless <strong>Node.js</strong> microservice.</p>",
    "<p>• Developed Angular services to handle and subscribe to large datasets provided by our backend services using <strong>RxJS</strong>.</p>",
    "<p>• Sent streams of aggregated data through a Websocket written in <strong>Go.</strong></p>",
    "<p>• Subscribed to data being fed from a <strong>Websocket</strong> using <strong>RxJS</strong> and visualized the data in realtime using chart.js in Angular.</p>",
    "<p>• Developed a stateless microservice in <strong>Spring-Boot</strong> designed to implement machine learning to assist diabetic patients through JNI.</p>",
    "<p>• Utilized <strong>Apache Spark</strong> to serialize large historical nested JSON data and then convert into readable CSV’s.</p>",
    "<p>• Created a feature that will continuously read new iOS glucose data using HealthKit in <strong>Swift</strong>.</p>",
    "<p class='job__header'>&nbsp;&nbsp;<strong>META+LAB (Software Developer) | June 2017 - May 2019</strong></p>",
    "<p>• Mentored incoming front-end developers as the front-end lead by pair programming, teaching design patterns, and code reviews.",
    "<p>• Developed mobile web apps in <strong>Vue.js</strong> and <strong>SCSS</strong> to adhere to modern web development standards and practices.</p>",
    "<p>• Refactored codebase to manage data using <strong>Vue-x</strong> state management, rather than passing data through event emitter and props.</p>",
    "<p>• Created web services and <strong>RESTful API’s</strong> in <strong>Laravel</strong> and wrote unit tests for every service.</p>"
  ];
  projectsTitle = "Projects";
  projectsBodyContent = [
    "<a class='project__link' href='https://github.com/frlzjosh/solo-fans-server'>&nbsp;&nbsp;<strong>SoloFans (Software Engineer/Software Architect ) | 2020 November - 2020 December</a>",
    "<p>• Developed a home automated service that uses IOT to turn on your smart fan when your room get's too hot.</p>",
    "<p>• Utilized Tuya Cloud to toggle my smart fan from my Node.js/Express microservice that observes Arduino temperature.</p>",
    "<p>• Streaming sensor data through socket.io to continuously be read through the vue-socket-io client library and to aggregated into my Vue-x store.</p>",
    "<p>• Feeding historical data from a MongoDB databse to my front-end graph when the user first accesses the app, and then visualizing incoming sensor data.</p>",
    "<p>• Sending realtime temperature sensor data from a TMP36 sensor from an Arduino Nano 33 IOT to Firebase's Realtime Database.</p>",
    "<a class='project__link' href='https://github.com/Studs-App'>&nbsp;&nbsp;<strong>Studs (Scrum Master/Full Stack Engineer/Software Architect ) | 2020 November</a>",
    "<p>• Wrote all of Stud's CRUD back-end API's in Golang's Fiber framework.</p>",
    "<p>• Persisted relational data to our PostgresQL database using Gorm as our Object Relation Mapping API.</p>",
    "<p>• Integrated the state of our Vue application by handling API calls into our Vue-x store and into our components.</p>",
    "<a class='project__link' href='https://www.youtube.com/watch?v=aIdvYbYuoE4&ab_channel=JoshuaM'>&nbsp;&nbsp;<strong>OFF-TOP (Founder/Scrum Master/Full Stack Engineer/Software Architect ) | 2019 November - Present</a>",
    "<p>• Leading a team of developers as the Scrum Master and Founder by providing lectures on new technologies being utilized, holding sprint meetings, and implementing the Agile methodology when creating software.</p>",
    "<p>• Orchestrating pipelines through message queues such as Apache Kafka to manage data across OFF-TOP’s microservices.</p>",
    "<p>• Migrating OFF-TOP’s service oriented architecture into microservices and implementing the database-per-service pattern.</p>",
    "<p>• Handled real-time incoming data from my backend services by establishing a Websocket channel connection in Flutter.</p>",
    "<p>• Styled and developed modular components that utilize asynchronous requests in Flutter.</p>",
    "<a class='project__link' href='https://www.youtube.com/watch?v=1iCwulnJjKo&ab_channel=JoshuaM'>&nbsp;&nbsp;<strong>BeeSafe (Scrum Master/ Software Architect/Full Stack Engineer) | 2020 March - April 2020</strong></a>",
    "<p>• Designed and built a distributed architecture that utilizes GCP to host web services, and to stream data through Arduino sensors.</p>",
    "<p>• Continuously listened for incoming data from Firebase’s Realtime Database API in Flutter and fed it to a graph and list view.</p>"
  ];
}
</script>
<style lang="scss" scoped>
  
</style>
