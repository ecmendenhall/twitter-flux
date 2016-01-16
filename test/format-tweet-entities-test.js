import { expect } from 'chai';
import sinon from 'sinon';

import { FormatTweetEntities } from '../src/client/format-tweet-entities';

describe('FormatTweetEntities', () => {

  it('formats tweet URLs', () => {
    let text = "Today, Twitter is updating embedded Tweets to enable a richer photo experience: https:\/\/t.co\/XdXRudPXH5"
    let transformedText = 'Today, Twitter is updating embedded Tweets to enable a richer photo experience: <a href="https://t.co/XdXRudPXH5" rel="nofollow">https:\/\/t.co\/XdXRudPXH5</a>'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

});
