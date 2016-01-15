export class TweetParser {

  constructor(tweetEntities) {
    this.tweetEntities = tweetEntities;
  }

  parse() {
    return this.tweetEntities.text; 
  }
}
