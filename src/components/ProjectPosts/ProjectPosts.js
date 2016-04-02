import React from 'react';
import styles from './ProjectPosts.scss';

type Props = {
  posts: mixed
};

export class ProjectPosts extends React.Component {
  props: Props;

  renderPost(post) {
    return (
      <div key={post._id} className={styles.post}>
        <div style={{zIndex: 10}}>
          <div className={styles.meta}>
            <div className={styles.label}>18 February 2014</div>

            <div className={styles.feedback}>
              <div className={styles.item}>
                <a href='#' className={styles.circle}><i className='ion-chatbox'></i></a>
                <div className={styles.talkbubble}>12</div>
              </div>
              <div className={styles.item}>
                <a href='#' className={styles.circle}><i className='ion-heart'></i></a>
                <div className={styles.talkbubble}>6</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['post-inner']}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.posts.map(this.renderPost)}
      </div>
    );
  };
}

export default ProjectPosts;
