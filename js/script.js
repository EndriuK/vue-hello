const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      foto: {
        img: "./img/Vue.js_Logo_2.svg.png",
      },
    };
  },
}).mount("#app");
