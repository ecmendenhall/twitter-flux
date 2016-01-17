import twitterText from 'twitter-text';

export class FormatTweetEntities {

  static call(tweetText) {
    return twitterText.autoLink(tweetText).replace('<a', '<Link').replace('</a', '</Link'); 
  }

}
