import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Favorites } from '../src/client/favorites';

const TestUtils = React.addons.TestUtils;

describe('Favorites', () => {

  it('has a retweet count', () => {
    let rts = TestUtils.renderIntoDocument(
        <Favorites favorite_count={ 5 } />
    );
    expect(rts.props.favorite_count).to.eql(5);
  });

  it('returns retweet count if count is positive', () => {
    let rts = TestUtils.renderIntoDocument(
        <Favorites favorite_count={ 5 } />
    );
    expect(rts.favoriteCount()).to.eql('5');
  });

  it('returns empty string if count is not positive', () => {
    let rts = TestUtils.renderIntoDocument(
        <Favorites favorite_count={ 0 } />
    );
    expect(rts.favoriteCount()).to.eql('');
  });

});
