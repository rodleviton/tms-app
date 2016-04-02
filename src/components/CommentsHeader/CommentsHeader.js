import React from 'react';
import { connect } from 'react-redux';
import { updateLayout } from '../../redux/modules/layout';
import styles from '../../views/ProjectView/ProjectView.scss';

type Props = {
  updateLayout: Function
};

export class CommentsHeader extends React.Component {
  props: Props;

  componentDidMount() {
    const el = document.getElementById('commentsHeader');
    const elHeight = el ? el.offsetHeight : 0;
    this.props.updateLayout('commentsHeader', { height: elHeight });
  }

  componentWillUpdate() {
    // TODO
    // Optimize call to only update if height is different to previous value
    const el = document.getElementById('commentsHeader');
    const elHeight = el ? el.offsetHeight : 0;
    this.props.updateLayout('commentsHeader', { height: elHeight });
  }

  render() {
    return (
      <div id='commentsHeader' className={styles['comments-header']}>
        <div className={styles.header}>
          <i className='ion-chatbox'></i><h3>Comments</h3>
        </div>
        <div className={styles.title}>
          <h4>Land Rover Defender Camel Trophy Build Diary</h4>
          <h5>Priming the body</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.project.data
  };
};

export default connect(
  mapStateToProps, { updateLayout }
)(CommentsHeader);
