import React from 'react';
import styles from './ProjectHeader.scss';

type Props = {
  project: mixed
};

export class ProjectHeader extends React.Component {
  props: Props;

  render() {
    const { project } = this.props;

    return (
      <div>
        <div className={styles.meta}>
          <div className={styles.label}>Blog</div>
          <div className={styles.feedback}>
            <div className={styles.item}>
              <a href='#' className={styles.circle}><i className='ion-chatbox'></i></a>
              <div className={styles.talkbubble}>108</div>
            </div>
            <div className={styles.item}>
              <a href='#' className={styles.circle}><i className='ion-heart'></i></a>
              <div className={styles.talkbubble}>34</div>
            </div>
          </div>
        </div>

        <div className={styles['project-header']}>
          <div className={styles['project-header-inner']}>
            <div className={styles.masthead}>
              <img src={project.masthead} />
              <div className={styles.avatar}>
                <img src={project.user.avatar} />
              </div>
            </div>
            <div className={styles.categories}>HOBBIES / RADIO CONTROL / CARS</div>
            <h1>{project.title}</h1>
            <p className={styles.description}>{project.description}</p>

            <p className={styles['made-by']}>Made by</p>
            <p className={styles.author}>{project.user.firstName} {project.user.lastName}</p>
          </div>
        </div>
      </div>
    );
  };
};

export default ProjectHeader;
