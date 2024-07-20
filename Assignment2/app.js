const app = Vue.createApp({
  data() {
    return {
      alertMsg: "Happy new year!",
      output1: "",
      output2: "",
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMsg);
    },
    handleOutput(e, output) {
      this[output] = e.target.value;
    },
  },
});

app.mount("#app");
