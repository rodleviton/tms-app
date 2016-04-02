import React from 'react';
import { connect } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import ProjectHeader from '../components/ProjectHeader/ProjectHeader';
import ProjectPosts from '../components/ProjectPosts/ProjectPosts';

type Props = {
  layout: mixed,
  browser: mixed,
  project: mixed
};

export class Project extends React.Component {
  props: Props;

  getStyles() {
    const header = this.props.layout.header;

    if (header) {
      return { height: (this.props.browser.height - (header.height)) + 'px' };
    }
  }

  render() {
    return (
      <Scrollbars style={this.getStyles()}>
        <ProjectHeader project={this.props.project} />
        <ProjectPosts posts={this.props.project.posts} />
      </Scrollbars>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    browser: state.browser,
    layout: state.layout
  };
};

export default connect(
  mapStateToProps
)(Project);
