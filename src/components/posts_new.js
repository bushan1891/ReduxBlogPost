import React, {PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import { createPost } from '../actions/index';
import {Link} from 'react-router';

// redux form can be used as connect

export default class PostsNew extends React.Component {

  static contextTypes ={
    router:PropTypes.object
  }
// props here is from the form
onSubmit(props){
  // when the promise is resolved
  this.props.createPost(props).then(
    ()=> {
      // blog post has been created , navigate the user to the index
      // we navigate by calling this.context.router.push with the new path to naivgate to .
      this.context.router.push('/');
    }
  );


}

  render() {
    const { fields :{ title , categories , content }, handleSubmit } = this.props;
    //same as const handleSubmit = this.props.handleSubmit;
    // same as const fields.title = this.props.fields.title;
    // title.touched comes out of the box
    //{...title}  is called as destructuring it brings it out of the object
    console.log(title);
    return (<div>
                <h3>Create a new Post</h3>
                  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className={`form-group  ${title.touched && title.invalid ? 'has-danger' : ''} ` }>
                      <lable>Title</lable>
                      <input type="text" className="form-control"  {...title}/>
                      <div className="text-help has-danger">
                      {title.touched ? title.error:''}
                      </div>
                    </div>

                    <div className={`form-group  ${categories.touched && categories.invalid ? 'has-danger' : ''} ` }>
                      <lable>Categories</lable>
                      <input type="text" className="form-control" {...categories}/>
                      <div className="text-help has-danger">
                      {categories.touched ? categories.error:''}
                      </div>
                    </div>

                    <div className={`form-group  ${content.touched && content.invalid ? 'has-danger' : ''} ` }>
                      <lable>Content</lable>
                      <textarea type="text" className="form-control" {...content}/>
                      <div className="text-help has-danger">
                      {content.touched ? content.error:''}
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary" > Submit </button>
                      <Link to="/" className="btn btn-danger" > Cancel </Link>

                  </form>
            </div>);
  }
}

// stored in application state
// this provides the helper function as this.props
export default reduxForm({
  form:'PostNewForm',
  fields:['title','categories','content'],
  validate
},null,{createPost})(PostsNew)

// connect : 1 argument is mapStateToProps 2 is mapDispatchToProps

// reduxForm : 1st is form config 2nd is mapStatetoProps 3rd is mapDispatchToProps
function validate(values){
const errors ={};

if(!values.title){
  errors.title='Enter the Title';
}

if(!values.categories){
  errors.categories ='Enter a Category';
}

if(!values.content){
  errors.content ='Enter a content';
}

// how validation works?
// if the errors object contains a field value with truthy value associated to it then validation error is triggred
return errors;
}
