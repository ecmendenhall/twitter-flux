import React from 'react';

export class TweetBody extends React.Component {

  render() {
    return(
        <p className='tweet-body'>{ this.props.text }</p>
    )
  }
}