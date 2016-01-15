import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Tweet } from '../src/client/tweet';
import { UserAvatar } from '../src/client/user-avatar';
import { UserName } from '../src/client/user-name';
import { TweetBody } from '../src/client/tweet-body';
import { RTsAndFavs } from '../src/client/rts-and-favs';

const TestUtils = React.addons.TestUtils;

describe('Tweet', () => {

  it('has a user avatar', () => {
    let tweet = TestUtils.renderIntoDocument(
        <Tweet />
    );
    expect(tweet.refs.userAvatar).to.be.a.instanceof(UserAvatar);
  });

  it('has a username', () => {
    let tweet = TestUtils.renderIntoDocument(
        <Tweet />
    );
    expect(tweet.refs.userName).to.be.a.instanceof(UserName);
  });

  it('has a tweet body', () => {
    let tweet = TestUtils.renderIntoDocument(
        <Tweet />
    );
    expect(tweet.refs.tweetBody).to.be.a.instanceof(TweetBody);
  });

  it('has an RTs and Favs', () => {
    let tweet = TestUtils.renderIntoDocument(
        <Tweet />
    );
    expect(tweet.refs.rtsAndFavs).to.be.a.instanceof(RTsAndFavs);
  });
});
