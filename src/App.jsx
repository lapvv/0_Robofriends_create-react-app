import React, { useEffect, useState } from "react";
import Counter from './components/Counter';
import PostList from "./components/PostList";
import InputControl from "./components/InputControl";
import PostForm from "./components/PostForm";
import Robofriends from "./Robofriends";
import PostFilter from "./components/PostFilter";
import MyModal from './components/UI/modal/MyModal';
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts.js";
import postService from "./API/postService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching.js";
import { getPagesArray, getPagesCount } from "./utils/pages.js";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AboutMe from "./pages/AboutMe";

function App () {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  let pagesArray = getPagesArray(totalPages);

  // const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
    const response = await postService.getAll(limit, page);
    setPosts(response);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(()=>{
    fetchPosts()}, []
  );

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false);
  }

  const deletePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

    return (
        <div className="App">
              <Tabs id="uncontrolled-tab" className="mb-3">
                <TabList> 
                  <Tab title="About me">About me</Tab>
                  <Tab title="Projects">Projects</Tab>
                </TabList>  
                <TabPanel>
                  <AboutMe />
                </TabPanel>
                <TabPanel>
                  <Counter />
                  <hr />
                  <InputControl />
                  <hr />
                  <MyButton onClick = {()=>setModal(true)}>Создать пост</MyButton>
                  <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                  </MyModal>
                  <hr />
                  <PostFilter filter={filter} setFilter={setFilter} />
                  {postError &&
                    <h1>Ошибка ${postError}</h1>
                  }
                  {isPostsLoading
                    ? <div style={{display: 'flex', justifyContent:'center'}}><Loader /></div>
                    : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title='Список постов про JS' />
                  }
                  {pagesArray.map(p=>
                    <MyButton>{p}</MyButton>
                  )}
                  <hr />
                  <Robofriends />
                </TabPanel>
              </Tabs>
        </div>
    )
}

export default App;