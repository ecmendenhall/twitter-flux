import Twit from 'twit';
import { config } from '../../config/config';

export class Twitter {
  constructor() {
    this.client = new Twit({
      consumer_key: config.consumer_key,
      consumer_secret: config.consumer_secret,
      access_token: config.access_token,
      access_token_secret: config.access_token_secret
    });
  }
}
