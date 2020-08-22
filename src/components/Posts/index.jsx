import React, {useState,useEffect} from 'react';
import Axios from 'axios';

//Styles
import './posts.css';

//Profile avatar
import img_user from "../../assets/user.svg";

function PostFetcher(props) {
    const [userEmail, setUserEmail] = useState('');
    const [userComment, setUserComment] = useState('');

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res =>{
            setUserEmail(res.data[props.postId].email);
            setUserComment(res.data[props.postId].body);
        })
    });

    return (
        <div className = "post">
            <div className = "post__body">
                <div className = "post__owner"> 
                    <img className = "post__avatar" src = {img_user} alt = "Post Profile Icon"/>
                    <pre className = "post__nickname--bold">{userEmail}</pre>
                </div>
                <div className = "post__comment">
                    <p className = "post__text--light">{userComment}</p>  
                </div>
            </div>
        </div>
    );
}

export default PostFetcher;