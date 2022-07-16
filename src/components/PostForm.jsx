import React, { useRef, useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const bodyInputRef = useRef();
    const [post, setPost] = useState({title: '', body: ''});

      // const addNewPost =(event)=>{
  //   event.preventDefault()
  //   const newPost ={
  //     id: Date.now(),
  //     title, 
  //     body
  //   }
  //   setPosts([...posts, newPost]);
  //   setTitle('')
  // };

  // ПЕРЕДАЧА МНОЖЕСТВА ПАРАМЕТРОВ
  const addNewPost =(event)=>{
    event.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }
    create(newPost);
    setPost({title: '', body: ''});
  };

    return (
        <form action="">
        {/* УПРАВЛЯЕМЫЙ ИНПУТ */}
        {/* <MyInput type='text' placeholder='название поста' value={title} onChange={event=>setTitle(event.target.value)}/> */}
        {/* НЕУПРАВЛЯЕМЫЙ ИНПУТ */}
        {/* <MyInput type='text' placeholder='содержимое поста' value={body} onChange={event=>setBody(event.target.value)}/> */}
        {/* Передача по хуку ref */}
        {/* <MyInput placeholder='содержимое поста' ref={bodyInputRef} /> */}
        {/* Передача в инпут множества полей/параметров */}
        <MyInput type='text' placeholder='Заголовок поста' value={post.title} onChange={event=>setPost({...post, title:event.target.value})}/>
        <MyInput type='text' placeholder='Содержание поста' value={post.body} onChange={event=>setPost({...post, body:event.target.value})}/>
        <MyButton onClick={addNewPost}>Создать</MyButton>
        <MyButton>Очистить</MyButton>
      </form>
    );
};

export default PostForm;