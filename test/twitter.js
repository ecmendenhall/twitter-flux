import { Twitter } from '../src/server/twitter';
import Twit from 'twit';
import { expect } from 'chai';

describe('Twitter', () => {
  it('exists', () => {
    let twitter = new Twitter();
  });

  it('has a client', () => {
    let twitter = new Twitter();
    expect(twitter.client).to.be.an.instanceof(Twit);
  });

});
