import React from 'react';

import { Tweet } from './tweet';

export class Timeline extends React.Component {
  render() {
    return(
        <ul className='timeline'>
        { this.props.tweets.map((tweet) => {
          return <Tweet {...tweet} key={ tweet.id }
                                   ref={ `tweet${tweet.id}` } />
          })}
        </ul>
    )
  }
}