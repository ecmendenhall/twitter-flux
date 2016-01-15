import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { UserName } from '../src/client/user-name';

const TestUtils = React.addons.TestUtils;

describe('UserName', () => {

  it('has a username', () => {
    let userName = TestUtils.renderIntoDocument(
        <UserName name={ 'name' } />
    );
    expect(userName.props.name).to.eql('name');
  });
  
  it('has a screen name', () => {
    let userName = TestUtils.renderIntoDocument(
        <UserName screen_name={ 'screen name' } />
    );
    expect(userName.props.screen_name).to.eql('screen name');
  });

});
