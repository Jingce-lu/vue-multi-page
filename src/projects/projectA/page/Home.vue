<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/global/js/utils/test.js";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
  metaInfo: {
    title: '我是头部',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width' },
      { vmid: 'description', name: 'description', content: '我是描述！！！' }
    ]
  },
  mounted() {
    console.log('Test', Test.name);
  }
};

</script>
