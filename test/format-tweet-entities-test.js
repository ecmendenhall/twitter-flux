import { expect } from 'chai';
import sinon from 'sinon';

import { FormatTweetEntities } from '../src/client/format-tweet-entities';

describe('FormatTweetEntities', () => {

  it('formats tweet URLs', () => {
    let text = "Major 🔑 EMBRACE YOUR BLESSINGS http://instagram.com/p/BAcvr4bLu2U/"
    let transformedText = 'Major 🔑 EMBRACE YOUR BLESSINGS <Link href="http://instagram.com/p/BAcvr4bLu2U/"></Link>'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

  it('formats mentions', () => {
    let text = "@eminem @jumpman23🔥🔥🔥🔥🔑🔑🔑🔑"
    let transformedText = '@<Mention screen_name="eminem"></Mention> @<Mention screen_name="jumpman23"></Mention>🔥🔥🔥🔥🔑🔑🔑🔑'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

  it('formats hashtags', () => {
    let text = "Mogul talk 🔑 #wethebest #rocnation DJ KHALED X JAY Z"
    let transformedText = 'Mogul talk 🔑 <Hashtag tag="#wethebest"></Hashtag> <Hashtag tag="#rocnation"></Hashtag> DJ KHALED X JAY Z'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

  
  it('formats cashtags', () => {
    let text = "DJ Khaled doesn't use cashtags often $GM $TWTR"
    let transformedText = 'DJ Khaled doesn\'t use cashtags often <Cashtag tag="$GM"></Cashtag> <Cashtag tag="$TWTR"></Cashtag>'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });

  it('formats lists', () => {
    let text = "This is a list: @djkhaled/bless-up"
    let transformedText = 'This is a list: @<List list="djkhaled/bless-up"></List>'
    expect(FormatTweetEntities.call(text)).to.eq(transformedText);
  });


});
