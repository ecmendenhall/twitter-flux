import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Mention } from '../src/client/mention';

const TestUtils = React.addons.TestUtils;

describe('Mention', () => {

  it('has a screen name', () => {
    let rts = TestUtils.renderIntoDocument(
        <Mention screen_name={ "djkhaled" } />
    );
    expect(rts.props.screen_name).to.eql('djkhaled');
  });

});
