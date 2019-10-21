import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        { name: "Finish Star Web App", isDone: false, priority: "High"},
        { name: "Look into Vue Radio Buttons", isDone: true,  priority:"Low"},
        { name: "Buy cat food", isDone: false, priority:"High"},
      ],
      newTodo: "",
      newPriority: ""
    },
    methods: {
      saveNewTodo: function () {
        this.todos.push({
          name: this.newTodo,
          isDone: false,
          priority: this.newPriority
        });
        this.newTodo = ""
        this.newPriority = ""
      },
      doTodo: function(index) {
        this.todos[index].isDone = true;
      }
    }
  });
});
