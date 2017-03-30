import React, { Component }  from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  render() {
    const { fields: {title, categories, content }, handleSubmit } =  this.props;
    // console.log('title',title);

    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create a new post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''} `} >
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''} `}>
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''} `}>
          <label htmlFor="">Content</label>
          <textarea className="form-control" id="" cols="30" rows="3" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger pull-right">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = "Enter a title";
  }
  if(!values.categories){
    errors.categories = "Enter a categories";
  }
  if(!values.content){
    errors.content = "Enter a content";
  }
  return errors;
}


export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content'],
  validate
}
,null,{ createPost })(PostsNew);
