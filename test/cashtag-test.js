import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Cashtag } from '../src/client/cashtag';

const TestUtils = React.addons.TestUtils;

describe('Cashtag', () => {

  it('has a tag', () => {
    let cashtag = TestUtils.renderIntoDocument(
        <Cashtag tag={ "$TWTR" } />
    );
    expect(cashtag.props.tag).to.eql('$TWTR');
  });

});
