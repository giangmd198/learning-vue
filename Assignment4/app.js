const app = Vue.createApp({
  data() {
    return {
      inputClasses: "",
      colorCode: "",
      hidden: false,
    };
  },
  computed: {
    classes() {
      return this.inputClasses.split(" ").concat({ hidden: this.hidden });
    },
  },
  methods: {
    toggleParagraph() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#app");
