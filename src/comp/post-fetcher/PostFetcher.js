import React from 'react';
import Axios from 'axios'

//CSS
import './css/post-fetcher.css';

//Profile avatar
import img_user from "../../img/user.png";

class PostFetcher extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            postUserEmail: '',
            postUserComment: ''
        };
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(res =>{
            this.setState({postUserEmail: res.data[this.props.postId].email,postUserComment: res.data[this.props.postId].body})
        })
    }
    render() {
        const {postUserEmail,postUserComment} = this.state;
        return (
            <div className = "post">
                <div className = "post__body">
                    <div className = "post__owner"> 
                        <img className = "post__avatar" src = {img_user} alt = "Post Profile Icon"/>
                        <pre className = "post__nickname--bold">{postUserEmail}</pre>
                    </div>
                    <div className = "post__comment">
                        <p className = "post__text--light">{postUserComment}</p>  
                    </div>
                </div>
            </div>
        );
    }
}

export default PostFetcher;