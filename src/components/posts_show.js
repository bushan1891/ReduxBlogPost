import React , {Component ,PropTypes} from 'react';
import { connect } from 'react-redux';
import { fetchPost , deletePost } from '../actions/index';
import {Link} from 'react-router';

 class PostsShow extends React.Component {

// now the context is available
static contextTypes={
  router :PropTypes.object
}
componentWillMount() {
  this.props.fetchPost(this.props.params.id);
}

onDeleteClick(){
  console.log('deleting',this.props.params.id);
  this.props.deletePost(this.props.params.id).then(()=>{
    // routing back to the home page
    this.context.router.push('/');
  });
}
  render() {
    const {post} = this.props;
    if(!this.props.post){
    return  <div>Loading...< /div>;
    }
    console.log(post);
    return (<div>
      <Link to="/">Back To Home</Link>
      <button
      className="btn btn-danger
       pull-xs-right"
       onClick={this.onDeleteClick.bind(this)}>
       Delete</button>
        <h3>{post.title}</h3>
        <h6>Catogories :{post.categories}</h6>
        <p>{post.content}</p>


      </div>);
  }
}

function mapStateToProps(state){
  return {post:state.posts.post}
}
export default connect(mapStateToProps,{fetchPost:fetchPost , deletePost : deletePost})(PostsShow);
