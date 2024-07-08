const app = Vue.createApp({
  data() {
    return {
      name: "WALL-E",
      age: 1,
      image: [
        "https://i.pinimg.com/originals/d6/0d/76/d60d764d1b16a5f85bcb8a7bd13b08a7.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Eh5hbja4AlyNC_5nAr1VW1BuGNbLOeBE2g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDq3kyJvoipTgopL2MSej94nN6keLH3I4M5LzY6Fvmo9aAh968nFMzCrhVLexfpy_IOg&usqp=CAU",
      ],
    };
  },
  methods: {
    getNextAge() {
      return this.age + 5;
    },
    random() {
      return Math.ceil(Math.random() * 11) - 1;
    },
    getImage() {
      return this.image[Math.ceil(Math.random() * 3) - 1];
    },
  },
});

app.mount("#app");
