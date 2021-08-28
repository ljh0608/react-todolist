import React, {Component} from 'react';
import './App.css';
import TodolistTemplate from "./components/TodoListTemplate";
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
class App extends Component{
 render(){

  return (
    <div>
     <TodolistTemplate form= {<Form/>}>
       <TodoItemList/>
     </TodolistTemplate>
      </div>
  );
  }
}
export default App;
