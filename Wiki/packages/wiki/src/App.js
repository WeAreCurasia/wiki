import './App.css';
import { Component } from 'react';
import TestMain from './components/TestMain';
import NavBlogList from './components/NavBlogList';
import blog from './homepage';
import { withRouter } from 'react-router-dom';
import Breadcrumb from './components/Breadcrumbs';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blog: blog.blogData,
      id: '0',
    };
    this.setMainBlog = this.setMainBlog.bind(this);
  }
  setMainBlog(blog) {
    this.setState({
      blog: blog.blogData,
      id: blog.id,
    });
  }
  render() {
    return (
      <div className="app">
        <div className="navbar">
          <NavBlogList setMainBlog={this.setMainBlog} />
        </div>
        <div className="main">
          <Breadcrumb id={this.state.id} setMainBlog={this.setMainBlog} />
          <TestMain blogData={this.state.blog} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
