import React from 'react';
import { connect } from 'react-redux';
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
export class Project extends React.Component<void, Props, void> {

  props: Props;

  renderPost (post) {
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

  componentWillMount () {
    this.props.fetchProject(this.props.params.id, this.props.params.slug);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.params.id !== nextProps.params.id) {
      nextProps.fetchProject(nextProps.params.id, nextProps.params.slug);
    }
  }

  render () {
    const { project } = this.props;

    if (!project.title) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className={styles.project}>

          <div className={styles['project-header']}>
            <div className={styles.meta}>
              <div className={styles.label}>Blog</div>
              <div className={styles.feedback}>
              <div className={styles.item}>
                <a href='#' className={styles.circle}></a>
                <div className={styles.talkbubble}>108</div>
              </div>
              <div className={styles.item}>
                <a href='#' className={styles.circle}></a>
                <div className={styles.talkbubble}>34</div>
              </div>
            </div>
            </div>
            <div className={styles['container-inner']}>
              <div className={styles.masthead}>
                <img src='https://s3-ap-southeast-2.amazonaws.com/tinkermakersmith/projects/56efe19baea98df90a528653/masthead.jpg' />
                <div className={styles.avatar}>
                  <img src='https://s3-ap-southeast-2.amazonaws.com/tinkermakersmith/projects/56efe19baea98df90a528653/avatar.png' />
                </div>
              </div>
              <div className={styles.categories}>HOBBIES / RADIO CONTROL / CARS</div>
              <h1>{project.title}</h1>
              <p className={styles.description}>{project.description}</p>

              <p className={styles['made-by']}>Made by</p>
              <p className={styles.author}>Rodney Leviton</p>
            </div>
          </div>

          {project.posts.map(this.renderPost)}
        </div>
        <div className={styles.comments}>
          <div className={styles.header}>
            <h3>Comments</h3>
          </div>
          <div className={styles.title}>
            <h4>Land Rover Defender Camel Trophy Build Diary</h4>
            <h5>Priming the body</h5>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { project: state.project.data };
}

export default connect(mapStateToProps, { fetchProject })(Project);
