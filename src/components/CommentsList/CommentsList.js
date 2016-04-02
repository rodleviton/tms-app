import React from 'react';
import { connect } from 'react-redux';
import ScrollArea from 'react-scrollbar';
import { updateLayout } from '../../redux/modules/layout';
import { FormattedRelative } from 'react-intl';
import styles from '../../views/ProjectView/ProjectView.scss';

type Props = {

};

export class CommentsList extends React.Component {
  props: Props;

  componentDidMount (nextProps) {
    this.forceUpdate();
  }

  getCommentsStyles () {
    const commentsHeader = this.props.layout.commentsHeader;

    if (commentsHeader) {
      return { marginTop: this.props.layout.commentsHeader.height + 'px' };
    }
  }

  getCommentsScrollAreaStyles () {
    const header = this.props.layout.header;
    const commentsHeader = this.props.layout.commentsHeader;

    if (header && commentsHeader) {
      const offset = (this.props.layout.header.height + this.props.layout.commentsHeader.height);
      return { height: (this.props.browser.height - (offset)) + 'px' };
    }
  }

  renderComment (comment) {
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

        <div className={ comment.replies.length ? 'comments' : '' }>
          { replies }
        </div>
      </div>
    );
  }

  render () {
    const { comments } = this.props;

    return (
      <div style={this.getCommentsStyles()}>
        <ScrollArea speed={0.8} className='area' smoothScrolling={true} style={this.getCommentsScrollAreaStyles()} contentClassName='content' horizontal={false}>
          <div className='comments'>
            {comments.map(this.renderComment)}
          </div>
        </ScrollArea>
      </div>
    )
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

