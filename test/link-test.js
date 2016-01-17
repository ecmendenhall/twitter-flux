import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Link } from '../src/client/link';

const TestUtils = React.addons.TestUtils;

describe('Link', () => {

  it('has an href', () => {
    let link = TestUtils.renderIntoDocument(
        <Link href={ "http://example.com" } />
    );
    expect(link.props.href).to.eql('http://example.com');
  });

});
