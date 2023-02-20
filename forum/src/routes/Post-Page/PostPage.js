import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import Post from '../../components/Post/Post';
function PostPage() {
  const {location, search} = useLocation();
  const searchParams = new URLSearchParams(search);
  const id = searchParams.get('id')
  const [post, setPost] = useState({});
  console.log(search);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/getpost/?id=${id}`, {
        headers: {
          Accept: "application/json",
          Credentials: "include",
        },
        method: "GET",
        credentials: "include",
      }).then((r)=>{
        if (r.ok){
          return r.json()
        } 
        return null
      }).then((data)=>{
        console.log("DATA:"+data);
        if (data!==null){
            setPost(data)
            console.log(data);
          }
      })
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(()=>{
      fetchData();
  },[])
  // fetch post data using the ID
console.log(post);
  return (
    <>
    <Layout>
      <Post key={post.PostId} id={post.PostId} title={post.Title} content={post.Content} date={post.CreationDate} author={post.Author} shouldFetch={true}/>
        
    </Layout>
    </>
  );
}

export default PostPage;