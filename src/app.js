import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        { name: "Finish Star Web App", isDone: false},
        { name: "Look into Vue Radio Buttons", isDone: true},
        { name: "Buy cat food", isDone: false},
      ],
      newTodo: "",

      // priority: [
      //   { Low: 0 },
      //   { High: 1 }
      // ],

    },
    methods: {
      saveNewTodo: function () {
        this.todos.push({
          name: this.newTodo,
          isDone: false
        });
        this.newTodo = ""
      },
      doTodo: function(index) {
        this.todos[index].isDone = true;
      }
    }
  });
});
