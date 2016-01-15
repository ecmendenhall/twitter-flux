import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { RTs } from '../src/client/rts';

const TestUtils = React.addons.TestUtils;

describe('RTs', () => {

  it('has a retweet count', () => {
    let rts = TestUtils.renderIntoDocument(
        <RTs retweet_count={ 5 } />
    );
    expect(rts.props.retweet_count).to.eql(5);
  });

  it('returns retweet count if count is positive', () => {
    let rts = TestUtils.renderIntoDocument(
        <RTs retweet_count={ 5 } />
    );
    expect(rts.retweetCount()).to.eql('5');
  });

  it('returns empty string if count is not positive', () => {
    let rts = TestUtils.renderIntoDocument(
        <RTs retweet_count={ 0 } />
    );
    expect(rts.retweetCount()).to.eql('');
  });

});
