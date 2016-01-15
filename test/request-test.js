import { Request } from '../src/client/request';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Request', () => {

  it('delegates GET to the request library', () => {
    let requestSpy = sinon.spy();
    Request.client = requestSpy;

    Request.get('http://example.com');

    expect(requestSpy.calledWith('GET', 'http://example.com')).to.eq(true);
  });

});
