import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index'
import { Link } from 'react-router';

class PostIndex extends React.Component {
  // will be called when the comonent is called for the first time
  componentWillMount() {
    console.log('time to fetch posts');
// obtained access by mapDispatchToprops
    this.props.fetchPosts();
  }
  constructor(props) {
    super(props);
  }

renderPost(){
  return this.props.posts.map( (post)=>{
    return (<li className="list-group-item" key={post.id}>
      <Link to={`posts/${post.id}`}>
        <span className="pull-xs-right">{post.categories}</span>
        <strong>{post.title}</strong>
        </Link>
       </li>)
  })
}

  render() {
    return (<div>
      <div className="text-xs-right">
      <Link  to="posts/new" className="btn btn-primary" >Add New Post</Link>
      </div>
          <h3>
          Posts
          </h3>
          <ul className="list-group">
          {this.renderPost()}
          </ul>
      </div>);
  }
}

// insted of this send the object fetchPosts :fetchPosts
/*function mapDispatchToprops(dispatch){
  return bindActionCreators({fetchPosts},dispatch)
}*/
function mapStateToProps(state){
  return {posts : state.posts.all};
}

export default connect(mapStateToProps,{fetchPosts :fetchPosts})(PostIndex);
