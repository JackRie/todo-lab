import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
import { formatCurrency } from '@angular/common';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Take out garbage',
      completed: false,
    },
    {
      task: 'Fold laundry',
      completed: false,
    },
    {
      task: 'Wash dishes',
      completed: true,
    },
    {
      task: 'Walk the dog',
      completed: true,
    },
  ];

  filterTerm: string;

  constructor() {}

  addTask(form: NgForm) {
    let newTodo: Todo = {
      task: form.value.add,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    let todo: Todo = this.todos[index];
    todo.completed = true;
  }

  setFilterTerm(form: NgForm) {
    // console.log(form);
    this.filterTerm = form.value.filterTerm.trim().toLowerCase();
  }

  filter() {
    if (!this.filterTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTodo = todo.task.toLowerCase().trim();
        return currentTodo.includes(this.filterTerm);
      });
    }
  }

  ngOnInit(): void {}
}
