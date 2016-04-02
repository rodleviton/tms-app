import React from 'react';
import { connect } from 'react-redux';
import ScrollArea from 'react-scrollbar';
import Comments from '../../containers/Comments';
import { fetchProject } from '../../redux/modules/project';
import styles from './ProjectView.scss';

type Props = {
  fetchProject: Function,
  project: Function,
  params: {
    id: string,
    slug: string
  }
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class Project extends React.Component < void, Props, void > {

  props: Props;

  renderPost(post) {
    return (
      <div key={post._id} className={styles.post}>
        <div className={styles.meta}>
          <div className={styles.label}>18 February 2014</div>

          <div className={styles.feedback}>
            <div className={styles.item}>
              <a href='#' className={styles.circle}></a>
              <div className={styles.talkbubble}>12</div>
            </div>
            <div className={styles.item}>
              <a href='#' className={styles.circle}></a>
              <div className={styles.talkbubble}>6</div>
            </div>
          </div>
        </div>
        <div className={styles['container-inner']}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchProject(this.props.params.id, this.props.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      nextProps.fetchProject(nextProps.params.id, nextProps.params.slug);
    }
  }

  getStyles() {
    const header = this.props.layout.header;
    if (header) {
      return { height: (this.props.browser.height - (header.height)) + 'px' };
    }
  }

  render() {
    const { project } = this.props;

    if (!project.title) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Project id={this.props.params.id}></Project>
         <Comments id={this.props.params.id}></Comments>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.project.data,
    browser: state.browser,
    layout: state.layout
  };
}

export default connect(mapStateToProps, { fetchProject })(Project);
