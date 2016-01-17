import React from 'react';

import { FormatTweetEntities } from './format-tweet-entities';
import { Link } from './link';
import { Mention } from './mention';
import { Hashtag } from './hashtag';
import { Cashtag } from './cashtag';
import { List } from './list';

export class TweetBody extends React.Component {

  innerJSX() {
    if (this.props.text !== undefined) {
      return FormatTweetEntities.call(this.props.text);
    } else {
      return '';
    }
  }
  
  render() {
    return <p>{ this.props.text }</p>;
  }
}