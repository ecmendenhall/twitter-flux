import { TweetStore } from "../src/client/tweet-store";
import { expect } from "chai";
import sinon from 'sinon';

describe('TweetStore', () => {
  it('has an API host URL', () => {
    let tweetStore = new TweetStore();
    expect(tweetStore.apiHost).to.eq('http://localhost:3000')
  })

  it('has a timeline route', () => {
    let tweetStore = new TweetStore();
    expect(tweetStore.routes.timeline).to.eq('/timeline')
  })

  it('gets tweets from the timeline route', () => {
    //let tweetStore = new TweetStore();
    //let requestSpy = sinon.spy(tweetStore.client, 'get');

    //tweetStore.getTimeline();

    //expect(requestSpy.calledWith('http://localhost:3000/timeline')).to.eq(true)
    //tweetStore.client.get.restore();
  })
  
})
