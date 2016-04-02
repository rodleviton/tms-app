import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../redux/modules/comments';
import styles from '../views/ProjectView/ProjectView.scss';
import CommentsHeader from '../components/CommentsHeader/CommentsHeader';
import CommentsList from '../components/CommentsList/CommentsList';

type Props = {
  params: {
    id: string
  }
};

export class Comments extends React.Component < void, Props, void > {
  props: Props;

  componentWillMount() {
    this.props.fetchComments(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.props.fetchComments(this.props.id);
    }
  }

  render() {
    const { comments } = this.props;

    if (!comments[0]) {
      return <div>Loading...</div>;
    }

    return (
      <div className={styles['comments-container']}>
        <CommentsHeader></CommentsHeader>
        <CommentsList comments={this.props.comments}></CommentsList>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    browser: state.browser,
    layout: state.layout,
    comments: state.comments.data
  };
};


export default connect(
  mapStateToProps, { fetchComments }
)(Comments);
