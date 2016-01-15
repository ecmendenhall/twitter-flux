import { Twitter } from '../src/server/twitter';
import Twit from 'twit';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Twitter', () => {

  it('has a client', () => {
    let twitter = new Twitter();
    expect(twitter.client).to.be.an.instanceof(Twit);
  });

  it('gets tweets from a timeline', () => {
    let twitter = new Twitter();
    let twitSpy = sinon.spy(twitter.client, 'get');
    let callback = () => {}
    twitter.getTimeline(callback);
    expect(
      twitSpy.calledWith(
        'statuses/home_timeline',
        {},
        callback
      )
          ).to.eq(true);
    twitSpy.restore();
  });

});
