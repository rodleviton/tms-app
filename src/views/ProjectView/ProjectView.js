import React from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../../redux/modules/project';
import Comments from '../../containers/Comments';
import Project from '../../containers/Project';
import styles from './ProjectView.scss';

type Props = {
  fetchProject: Function,
  project: mixed,
  params: {
    id: string,
    slug: string
  }
};

// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class ProjectView extends React.Component < void, Props, void > {

  props: Props;

  componentWillMount() {
    this.props.fetchProject(this.props.params.id, this.props.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      nextProps.fetchProject(nextProps.params.id, nextProps.params.slug);
    }
  }

  render() {
    const { project } = this.props;

    // Make sure we have a project before rendering anything
    if (!project._id) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles.project}>
        <Project project={this.props.project} />
        <Comments id={this.props.params.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.project.data
  };
}

export default connect(mapStateToProps, { fetchProject })(ProjectView);

