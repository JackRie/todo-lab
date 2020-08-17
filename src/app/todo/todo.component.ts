import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

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

  constructor() {}

  ngOnInit(): void {}
}
