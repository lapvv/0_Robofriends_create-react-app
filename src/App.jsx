import React, { useMemo, useRef, useState } from "react";
import Counter from './components/Counter';
import PostList from "./components/PostList";
import InputControl from "./components/InputControl";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import Robofriends from "./Robofriends";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App () {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript', body: 'JS post1'},
    {id:2, title: 'Java', body: 'Java post1'},
    {id:3, title: 'Python', body: 'Another post 3'},
  ]);
  const [filter, setFilter] = useState({sort:'', query:''});

  const sortedPosts = useMemo(()=>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))}
    return posts;  
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query))
  },[filter.query, sortedPosts])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const deletePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

    return (
        <div className="App">
          <Counter />
          <hr />
          <InputControl />
          <hr />
          <PostForm create={createPost}/>
          <hr />
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList remove={deletePost} posts={sortedAndSearchedPosts} title='Список постов про JS' />
          <hr />
          <Robofriends />
        </div>
    )
}

export default App;