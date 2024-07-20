const MAX = 100;
const THRESHOLD = 5;
let NUM = getRandom(MAX);
let resetter = null;
const OUTPUT = [
  "Not there yet",
  "Almost there",
  "Too much",
  `You found the number ${NUM}`,
];

const app = Vue.createApp({
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    result() {
      if (this.n > NUM) return OUTPUT[2];
      if (this.n === NUM) return OUTPUT[3];
      if (this.n > NUM - THRESHOLD) return OUTPUT[1];
      return OUTPUT[0];
    },
  },
  methods: {
    add(plus) {
      this.n += plus;
    },
  },
  watch: {
    n() {
      if (this.n >= NUM && !resetter) {
        resetter = setTimeout(
          () => {
            this.n = 0;
            NUM = getRandom(MAX);
            resetter = null;
          },
          this.n === NUM ? 5000 : 2000
        );
      }
    },
  },
});

app.mount("#app");

function getRandom(n) {
  return Math.ceil(Math.random() * n) - 1;
}
