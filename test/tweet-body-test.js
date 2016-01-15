import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { TweetBody } from '../src/client/tweet-body';

const TestUtils = React.addons.TestUtils;

describe('TweetBody', () => {

  it('has text', () => {
    let userName = TestUtils.renderIntoDocument(
        <TweetBody text={ 'text' } />
    );
    expect(userName.props.text).to.eql('text');
  });

});
