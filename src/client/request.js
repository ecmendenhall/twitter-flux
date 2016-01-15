import request from 'then-request';

export const Request = {};

Request.client = request;

Request.get = (url) => {
  return Request.client('GET', url);
}
