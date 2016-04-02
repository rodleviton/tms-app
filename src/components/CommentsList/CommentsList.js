import React from 'react';
import { connect } from 'react-redux';
import Scrollbars from 'react-custom-scrollbars';
import { FormattedRelative } from 'react-intl';

type Props = {
  layout: mixed,
  browser: mixed,
  comments: mixed
};

export class CommentsList extends React.Component {
  props: Props;

  componentDidMount(nextProps) {
    this.forceUpdate();
  }

  getStyles() {
    const header = this.props.layout.header;
    const commentsHeader = this.props.layout.commentsHeader;

    if (header && commentsHeader) {
      const offset = (this.props.layout.header.height + this.props.layout.commentsHeader.height);
      return { height: (this.props.browser.height - (offset)) + 'px' };
    }
  }

  renderComment(comment) {
    let replies = '';

    if (comment.replies) {
      replies = comment.replies.map(function (reply) {
        return (
          <div key={reply._id} className='comment'>
            <a className='avatar'>
              <img src={reply.user.avatar} />
            </a>
            <div className='content'>
              <a className='author'>{reply.user.firstName} {reply.user.lastName}</a>
              <div className='metadata'>
                <span className='date'><FormattedRelative value={reply.posted} /></span>
              </div>
              <div className='text'>
                <p>{reply.text}</p>
              </div>
            </div>
          </div>
        );
      });
    }

    return (
      <div key={comment._id} className='comment'>
        <a className='avatar'>
          <img src={comment.user.avatar} />
        </a>
        <div className='content'>
          <a className='author'>{comment.user.firstName} {comment.user.lastName}</a>
          <div className='metadata'>
            <span className='date'><FormattedRelative value={comment.posted} /></span>
          </div>
          <div className='text'>
            <p>{comment.text}</p>
          </div>
          <div className='actions'>
            <a className='reply'>Reply</a>
          </div>
        </div>

        <div className={comment.replies.length ? 'comments' : ''}>
          {replies}
        </div>
      </div>
    );
  }

  render() {
    const { comments } = this.props;

    return (
      <Scrollbars style={this.getStyles()} className='comments'>
        {comments.map(this.renderComment)}
      </Scrollbars>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    browser: state.browser,
    layout: state.layout
  };
};

export default connect(
  mapStateToProps
)(CommentsList);
