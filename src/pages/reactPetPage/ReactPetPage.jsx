import React, { useEffect, useState } from "react";
import postService from "../../API/postService";
import Counter from "../../components/Counter";
import InputControl from "../../components/InputControl";
import PostFilter from "../../components/PostFilter";
import PostForm from "../../components/PostForm";
import PostList from "../../components/PostList";
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/modal/MyModal";
import Loader from "../../components/UI/Loader/Loader";
import Kittyfriends from "../kittyFriends/Kittyfriends";
import Pagination from "../../components/UI/pagination/Pagination";
import { useFetching } from "../../hooks/useFetching";
import { usePosts } from "../../hooks/usePosts";
import { getPagesCount } from "../../utils/pages";


function ReactPetPage() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setlimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
    const response = await postService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  useEffect(()=>{
    fetchPosts()}, [page]
  );

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false);
  }

  const deletePost = (post)=>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page);
  }

  return (
    <div className="App">
      {/* <div className="navbar">
        <div className="navbar_links">
          <Link to="/" className="navbar_links">About me</a>
        </div>
        <div className="navbar_links">
          <Link to="/reactpet" className="navbar_links">React Pet proj</a>
        </div>
      </div> */}
      {/* <Tabs id="uncontrolled-tab" className="mb-3"> */}
        {/* <TabList>  */}
          {/* <Tab title="About me">About me (REACT)</Tab> */}
          {/* <Tab title="Mogo">Mogo (w/o JS)</Tab> */}
          {/* <Tab title="smoothie">Smoothie (w/o JS)</Tab> */}
          {/* <Tab title="JS_react_pet">Pet projects (JS+REACT)</Tab> */}
        {/* </TabList>   */}
        {/* <TabPanel>
          <AboutMe />
        </TabPanel>
        <TabPanel>
          <Mogo />
        </TabPanel>
        <TabPanel>
          <Smoothie />
        </TabPanel> */}
        {/* <TabPanel> */}
          <div className="myPetContainer">
            <Kittyfriends />
            <hr />
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
            {Boolean(postError) &&
              <h1>Ошибка ${postError}</h1>
            }
            {isPostsLoading
              ? <div style={{display: 'flex', justifyContent:'center'}}><Loader /></div>
              : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title='JS posts list' />
            }
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
          </div>
        {/* // </TabPanel> */}
      {/* // </Tabs> */}
    </div>
  )
}

export default ReactPetPage;