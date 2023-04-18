import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../models';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  form!:FormGroup
  taskArray!:FormArray

  @Output()
  onNewTodo = new Subject<Todo>

  constructor(public fb:FormBuilder) {}

  ngOnInit():void {
    this.form = this.createForm()
  }

  private createForm():FormGroup {
    this.taskArray = this.fb.array([])
    return this.fb.group({
      name: this.fb.control<string>('',[Validators.required]),
      dueDate: this.fb.control<string>('',Validators.required),
      tasks: this.taskArray
    })
  }

  processForm() {
    const todo = this.form.value as Todo
    //console.info(">>> todo: ",todo)
    this.form.reset()
  }

  private createTask():FormGroup {
    return this.fb.group({
      taskName: this.fb.control<string>('',Validators.required),
      priority: this.fb.control<string>('Low',Validators.required)
    })
  }

  addTask() {
    const task = this.createTask()
    this.taskArray.push(task)
  }

  deleteTask(idx:number) {
    this.taskArray.removeAt(idx)
  }

  isFormInvalid():boolean {
    return (this.form.invalid || this.taskArray.length<1)
  }

}