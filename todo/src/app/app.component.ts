import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'todo App';
  names=["akash","mumbai",1]
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
   done:true
};
this.todos.push(newTodo);
 }

 deleteTodo(todo){  
   let index=this.todos.indexOf(todo); 
this.todos.splice(index,1);
}
}
