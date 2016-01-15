import { expect } from 'chai';
import sinon from 'sinon';

import { TweetParser } from '../src/client/tweet-parser';

describe('TweetParser', () => {

  it('has an entities object', () => {
    let entities = {}
    let parser = new TweetParser(entities)
    expect(parser.tweetEntities).to.eql(entities);
  });

  it('parses URLs', () => {
    let entities = {
      "text": "Today, Twitter is updating embedded Tweets to enable a richer photo experience: https:\/\/t.co\/XdXRudPXH5",
      "entities": {
        "hashtags": [],
        "symbols": [],
        "urls": [{
          "url": "https:\/\/t.co\/XdXRudPXH5",
          "expanded_url": "https:\/\/blog.twitter.com\/2013\/rich-photo-experience-now-in-embedded-tweets-3",
          "display_url": "blog.twitter.com\/2013\/rich-phot\u2026",
          "indices": [80, 103]
        }],
        "user_mentions": []
      }
    }
    let parser = new TweetParser(entities);
    let parsedBody = "Today, Twitter is updating embedded Tweets to enable a richer photo experience: <a>https:\/\/t.co\/XdXRudPXH5</a>"
    expect(parser.parse()).to.eq(parsedBody);
  });

});
