import React, { useRef, useState } from "react";
import Counter from './components/Counter';
import PostList from "./components/PostList";
import InputControl from "./components/InputControl";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import Robofriends from "./Robofriends";

function App () {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'Post 1'},
    {id:2, title: 'JavaScript', body: 'Post 2'},
    {id:3, title: 'JavaScript', body: 'Post 3'},
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const bodyInputRef = useRef();
  const addNewPost =(event)=>{
    event.preventDefault()
    const newPost ={
      id: Date.now(),
      title, 
      body
    }
    setPosts([...posts, newPost]);
    setTitle('')
    setBody('')
  };

    return (
        <div className="App">
          <Counter />
          <hr />
          <InputControl />
          <hr />
          <form action="">
            {/* УПРАВЛЯЕМЫЙ ИНПУТ */}
            <MyInput type='text' placeholder='название поста' value={title} onChange={event=>setTitle(event.target.value)}/>
            {/* НЕУПРАВЛЯЕМЫЙ ИНПУТ */}
            {/* <MyInput placeholder='содержимое поста' ref={bodyInputRef} /> */}
            <MyInput type='text' placeholder='содержимое поста' value={body} onChange={event=>setBody(event.target.value)}/>
            <MyButton onClick={addNewPost}>Создать</MyButton>
            <MyButton >Очистить</MyButton>
          </form>
          <hr />
          <PostList posts={posts} title='Список постов про JS' />
          <hr />
          <Robofriends />
        </div>
    )
}

export default App;