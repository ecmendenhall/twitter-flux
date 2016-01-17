import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Hashtag } from '../src/client/hashtag';

const TestUtils = React.addons.TestUtils;

describe('Hashtag', () => {

  it('has a tag', () => {
    let hashtag = TestUtils.renderIntoDocument(
        <Hashtag tag={ "#blessup" } />
    );
    expect(hashtag.props.tag).to.eql('#blessup');
  });

});
