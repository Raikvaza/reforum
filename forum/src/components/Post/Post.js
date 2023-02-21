import React, { useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Post.css'
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Post(props) {
    const location = useLocation();
    const { pathname, search } = location;
    const [comment, setComment] = useState('');

    // const handleNewComment = () => { //Toggling Add comment button
    //   setIsActive(current => !current)
    //   console.log(isActive);
    // }
    const sendComment = (commentText) =>{
      console.log(commentText);
    }

    return (
      <div className='post-container'>
        
        {/* Header */}
        <div className='post-header'>
          <div className='post-header-date'>
            <p>Creation-Date: {props.date}</p>
          </div>
          <div className='post-header-title'>
            <h3>{props.title}</h3>
          </div>
          <div className='post-header-author'>
            <p>Author: {props.author}</p>
          </div>
        </div>
        
        {/* Body */}
        <div className='post-body'>
            <p>{props.content}</p>
        </div>
        
        {/* Footer */}
        <div className='post-footer'>
          {pathname==='/'? (
            <div className='post-footer-comments'>
            <Link
              to={{
                pathname: `/post/`,
                search: `?id=${props.postid}`,
              }}
              className='link-style'
            >
              <CommentIcon/> Comments
              </Link>
            </div>
            ) : 
            <div className='post-footer-comments'>
              Some data for the future
            </div> 
          }
          
          
          {pathname!=='/' && 
            <div className='post-footer-add-comment'>
                <AddCircleOutlineIcon
                  fontSize='large'
                  // onClick={handleNewComment}
                  className='add-comment-button'
                />
            </div>
          }  
          
          <div className='post-footer-likes'>
            <div className='post-footer-likes-icons'>
            <ThumbUpIcon/><p>Like</p>
            <ThumbDownIcon/><p>Dislike</p>
            </div>
          </div>
        </div>
        
        {/* Input Form for a new comment */}
              
      </div>
    );
  }
export default Post;