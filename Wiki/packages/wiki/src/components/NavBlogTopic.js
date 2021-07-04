import { Component } from 'react';

export default class NavBlogTopic extends Component {
  constructor() {
    super();
    this.setMain = this.setMain.bind(this);
  }
  setMain(blogData) {
    this.props.setMainBlog(blogData);
  }
  render() {
    return (
      <div>
        {this.props.blogs.map((blog, i) => {
          return (
            <div
              key={i}
              className="nav-blog"
              onClick={() => this.setMain(blog)}>
              {blog.blogData.title}
            </div>
          );
        })}
      </div>
    );
  }
}
