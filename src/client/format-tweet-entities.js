import twitterText from 'twitter-text';

export class FormatTweetEntities {

  static call(tweetText) {
    return twitterText.autoLink(tweetText); 
  }

}
