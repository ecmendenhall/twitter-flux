import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Reply } from '../src/client/reply';

const TestUtils = React.addons.TestUtils;

describe('Reply', () => {

  it('renders', () => {
    let userName = TestUtils.renderIntoDocument(
        <Reply />
    );
  });

});
