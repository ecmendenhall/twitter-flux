import React from 'react';
import ReactDom from 'react-dom';

import { TweetStore } from './tweet-store';
import { App } from './app';

require('../../static/sass/app.scss');

let tweetStore = new TweetStore();

ReactDom.render(
  <App tweetStore={ tweetStore } />,
  document.getElementById('react-root')
);
