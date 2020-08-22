import React, {useState,useEffect} from 'react';
import Axios from 'axios';

//Styles
import './posts.css';

//Profile avatar
import img_user from "../../assets/user.svg";

function PostFetcher(props) {
    let [posts,setPosts] = useState([props.postMaxRange]);

    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res =>{
            let postsList = [];
            for(let i = props.postMinRange; i <= props.postMaxRange; i++){
                postsList[i] = {
                    userEmail: res.data[i].email,
                    userComment: res.data[i].body
                }
            }
            setPosts(postsList);
        });
    });

    return (
        <ul>
            {posts.map((data, i) => {
                return (
                    <li 
                        className="post" 
                        key={i}
                    >
                        <div className = "post__body">
                            <div className = "post__owner"> 
                                <img className = "post__avatar" src = {img_user} alt = "Post Profile Icon"/>
                                <pre className = "post__nickname--bold">{data.userEmail}</pre>
                            </div>
                            <div className = "post__comment">
                                <p className = "post__text--light">{data.userComment}</p>  
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default PostFetcher;