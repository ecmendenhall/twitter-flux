import { expect } from 'chai';
import sinon from 'sinon';

import { FormatTweetEntities } from '../src/client/format-tweet-entities';

describe('FormatTweetEntities', () => {

  it('formats tweet URLs', () => {
    let text = "Today, Twitter is updating embedded Tweets to enable a richer photo experience: https:\/\/t.co\/XdXRudPXH5"
    let transformedText = 'Today, Twitter is updating embedded Tweets to enable a richer photo experience: <a href="https://t.co/XdXRudPXH5" rel="nofollow">https:\/\/t.co\/XdXRudPXH5</a>'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });
  
  it('formats mentions', () => {
    let text = "We\u2019re excited to work closely with the external technical community and continue @twittereng\u2019s work with open source. cc @TwitterOSS"
    let transformedText = 'We’re excited to work closely with the external technical community and continue @<a class="tweet-url username" href="https://twitter.com/twittereng" data-screen-name="twittereng" rel="nofollow">twittereng</a>’s work with open source. cc @<a class="tweet-url username" href="https://twitter.com/TwitterOSS" data-screen-name="TwitterOSS" rel="nofollow">TwitterOSS</a>' 
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

});
