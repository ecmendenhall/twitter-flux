import { Request } from './request';

export class TweetStore {
  constructor() {
    this.apiHost = 'http://localhost:3000';
    this.routes = {
      timeline: '/timeline'
    }
    this.client = Request;
    this.tweets = [];
  }

  getTimeline(callback) {
    this.client.get(
      `${this.apiHost}${this.routes.timeline}`
    ).then((res) => {
      this.tweets = JSON.parse(res.getBody());
      console.log(this.tweets);
      callback(this.tweets)
    });
  }

};
