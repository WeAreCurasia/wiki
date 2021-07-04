import { Component } from 'react';

// editor/display used for building the tab
export default class TestMain extends Component {
  render() {
    return (
      <>
        {/* <img alt="banner image" src="https://picsum.photos/1400/200"/> */}
        <img src={this.props.blogData.banner} />
        <h2>{this.props.blogData.title}</h2>
        <hr />
        <p>{this.props.blogData.body} </p>
      </>
    );
  }
}
