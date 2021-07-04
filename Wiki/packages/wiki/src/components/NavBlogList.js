import { Component } from 'react';
import data from '../data';
import NavBlogTopic from './NavBlogTopic';
import blog from '../homepage';
import { Button, SHAPE } from 'baseui/button';
import { withRouter } from 'react-router-dom';
import ProfileSettings from './ProfileSettings';
import SearchModal from './SearchModal';

class NavBlogList extends Component {
  constructor() {
    super();

    let topics = [];
    let topicMap = {};
    data
      .filter(item => item.type === 'topic')
      .forEach(item => {
        let topic = {
          id: item.id,
          blogData: item.blogData,
          parentTitle: '',
          children: [],
          active: false,
        };
        topicMap[item.id] = topics.length;
        topics.push(topic);
      });
    data
      .filter(item => item.type === 'blog')
      .forEach(item => {
        let blog = {
          id: item.id,
          parentTitle: item.parentTitle,
          parentId: item.parentId,
          blogData: item.blogData,
        };
        topics[topicMap[item.parentId]].children.push(blog);
      });

    this.state = {
      topics: topics,
      shownav: true,
    };

    this.setMain = this.setMain.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }
  setMain(blogData) {
    this.props.setMainBlog(blogData);
  }
  toggleActive(index) {
    this.state.topics[index].active ^= true;
    this.forceUpdate();
  }
  toggleNav() {
    this.setState({ shownav: !this.state.shownav });
  }
  render() {
    return (
      <div className="navbar-main">
        {this.state.shownav ? (
          <>
            <div className="tooltip">
              <button
                className="nav-expand large-text float-right"
                onClick={this.toggleNav}>
                {' < '} &nbsp;
              </button>
              <span className="tooltiptext">Hide Navbar</span>
            </div>
            <ProfileSettings />
            <SearchModal setMainBlog={this.props.setMainBlog} />
            <h2 onClick={() => this.props.setMainBlog(blog)}>
              Engineering Wiki
            </h2>
            {this.state.topics.map((topic, i) => {
              return (
                <div key={i}>
                  <div className="nav-item">
                    <button
                      className="nav-expand"
                      shape={SHAPE.pill}
                      onClick={e => this.toggleActive(i)}>
                      {topic.active ? ' - ' : ' + '}
                    </button>
                    <div
                      className="nav-topic"
                      onClick={() => {
                        this.props.setMainBlog(topic);
                      }}>
                      {topic.blogData.title}
                    </div>
                  </div>
                  <div className={topic.active ? 'show' : 'hidden'}>
                    <NavBlogTopic
                      blogs={topic.children}
                      setMainBlog={this.props.setMainBlog}
                    />
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <button className="nav-expand vh-max" onClick={this.toggleNav}>
              +
            </button>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(NavBlogList);
