const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: new Set(),
      isShow: true,
    };
  },
  methods: {
    addTask() {
      const newTask = this.inputTask.trim();
      if (newTask) {
        this.tasks.add(newTask);
      }
      this.inputTask = "";
    },
    removeTask(task) {
      this.tasks.delete(task);
    },
    toggleList() {
      this.isShow = !this.isShow;
    },
  },
});

app.mount("#app");
