import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

public newTodo;
public trackIndex;

  title = 'todo App';
  names = ["akash", "mumbai", 1]
  // text={
  //   name:"akash",
  //   city:"mumbai",

  // }
  todos = [
    {
      label: 'Call Akash',
      done: true,

    },
    {
      label: 'Pay Bill',
      done: false,

    },
    {
      label: 'Go to Gym',
      done: true,

    }
  ];

  addTodo(todo) {
      var newTodo = {
        label: todo,
        done: true
      };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

editTodo(todo,idx){
  console.log(idx);
  console.log(this.todos[idx]);
  console.log (this.todos[idx].label);
  this.newTodo = this.todos[idx].label;
  
  this.trackIndex=idx;
console.log(this.trackIndex);


  



  //  let result = prompt("update your todo app", label);
  //   if (result !== null && result !== ""){
  //     this.todos[todo].label = result;
 
   
  
    }
updateTodo(newValue){
  console.log(this.trackIndex);
 this.todos[this.trackIndex].label=newValue;
 
}

  }



 





