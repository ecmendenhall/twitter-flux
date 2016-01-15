import express from 'express';
import { Twitter } from './twitter';

export let TwitterFluxAPI = express();

const twitter = new Twitter();

TwitterFluxAPI.get('/timeline', (req, res) => {
  twitter.getTimeline((error, data, response) => {
    res.send(data);
  });
});

