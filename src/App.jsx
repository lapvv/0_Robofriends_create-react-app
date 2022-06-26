import React, { Component, useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import Counter from './components/Counter';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import InputControl from "./components/InputControl";
import MyButton from "./components/UI/button/MyButton";

function App () {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Post 1'},
    {id:2, title: 'JavaScript', body: 'Post 2'},
    {id:3, title: 'JavaScript', body: 'Post 3'},
  ])

    return (
        <div className="App">
          <Counter />
          <hr />
          <InputControl />
          <hr />
          <form action="">
            <input type="text" placeholder='название поста' />
            <input type="text" placeholder='содержимое поста' />
            <MyButton >Создать</MyButton>
            <MyButton >Очистить</MyButton>
          </form>
          <PostList posts={posts} title='Список постов про JS' />
          <hr />
        </div>
    )
}












/*
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filteredRobots);
    return (
      <div className="tc">
        <h1 className="f1">KITTYFRIENDS</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}*/

export default App;
