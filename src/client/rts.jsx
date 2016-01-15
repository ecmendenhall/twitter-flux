import React from 'react';

export class RTs extends React.Component {

  retweetCount() {
    if (this.props.retweet_count > 0) {
      return this.props.retweet_count.toString();
    } else {
      return '';
    }
  }

  render() {
    return(
        <span className='retweets'>
          <i className='fa fa-retweet'></i>{ this.retweetCount() }
        </span>
    )
  }
}