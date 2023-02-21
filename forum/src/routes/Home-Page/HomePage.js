import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router';
import { useSelector } from 'react-redux';
import Post from '../../components/Post/Post'
import auth from '../../features/auth';

const HomePage = () => {
  const userData = useSelector((state) => state.auth.username);
  const posts = useLoaderData();
  //console.log(posts);
  console.log(userData);
  return (
    <div className='home-page-container'>
      {posts && posts.map((post) => {
        return (<Post key={post.PostId} title={post.Title} content={post.Content} date={post.CreationDate} author={post.Author}/>) 
      })}
    </div>
  )
}
export default HomePage;

export const postsLoader = async () => {
  const response = await fetch("http://localhost:8080/api/home", {
        headers: {
          Accept: "application/json",
          Credentials: "include",
        },
        method: "GET",
        credentials: "include",
      });
  console.log("Loader homepage");    
  if (!response.ok) {
    throw Error('Could not fetch the list of careers')
  }
  return response.json();
}