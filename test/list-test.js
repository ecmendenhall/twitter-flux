import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { List } from '../src/client/list';

const TestUtils = React.addons.TestUtils;

describe('List', () => {

  it('renders', () => {
    let list = TestUtils.renderIntoDocument(
        <List />
    );
  });

});
