import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { UserAvatar } from '../src/client/user-avatar';

const TestUtils = React.addons.TestUtils;

describe('UserAvatar', () => {

  it('has an image URL', () => {
    let userAvatar = TestUtils.renderIntoDocument(
        <UserAvatar profile_image_url={ 'profile image url' } />
    );
    expect(userAvatar.props.profile_image_url).to.eql('profile image url');
  });

});