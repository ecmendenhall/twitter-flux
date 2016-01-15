import React from 'react';

import { UserAvatar } from './user-avatar';
import { UserName } from './user-name';
import { TweetBody } from './tweet-body';
import { RTsAndFavs } from './rts-and-favs';

export class Tweet extends React.Component {
  render() {
    return(
        <li className='tweet'>
          <UserAvatar ref="userAvatar" { ...this.props.user } />
          <div className='tweet-contents'>
            <UserName ref="userName" { ...this.props.user } />
            <TweetBody ref="tweetBody" { ...this.props } />
            <RTsAndFavs ref="rtsAndFavs" { ...this.props } />
          </div>
        </li>
    )
  }
}