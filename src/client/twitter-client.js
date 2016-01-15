import Twit from 'twit';

export class TwitterClient {
  constructor() {
    this.twitter = new Twit({
      consumer_key: '7vCdAEI4P2cUPNB2O7YrwskIZ',
      consumer_secret: '58eRn7e6f5oOVPlG7i6sS5d7O01v81Rm1KUWM5r7JZRwmJensj',
      access_token: '6335812-eP5NQSasAERSvewkSGECmC5D0kUn82PVFARYQh9xbG',
      access_token_secret: 'iQVzRtNDA5QBfvQBzOtejFNRFZT40A16qs5hoKnwTM35ed'
    });
  }

  getSomeTweets() {
    this.twitter.get('statuses/user_timeline', {screen_name: 'ecmendenhall'}, (error, tweets, response) => {
      console.log(response);
      if(!error) {
        console.log(tweets);
      } 
    });
  }
}
