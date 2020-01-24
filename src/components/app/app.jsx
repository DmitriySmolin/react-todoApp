import React, { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 4;

  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have  a lunch", important: false, id: 3 }
    ]
  };
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1)
      ];
      return {
        todoData: newTodoData
      };
    });
  };
  addItem = text => {
    //generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    //add element in array
    this.setState(({ todoData }) => {
      // const newTodoData = [...todoData, newItem]
      const newTodoData = [newItem, ...todoData];
      return {
        todoData: newTodoData
      };
    });
  };
  render() {
    const { todoData } = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={todoData} onDeleted={this.deleteItem} />
        <ItemAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}
