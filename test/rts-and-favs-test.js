import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { RTsAndFavs } from '../src/client/rts-and-favs';
import { Reply } from '../src/client/reply';
import { Favorites } from '../src/client/favorites';
import { RTs } from '../src/client/rts';

const TestUtils = React.addons.TestUtils;

describe('RTsAndFavs', () => {

  it('has a reply', () => {
    let rtsAndFavs = TestUtils.renderIntoDocument(
        <RTsAndFavs />
    );
    expect(rtsAndFavs.refs.reply).to.be.an.instanceof(Reply);
  });

  it('has an RTs', () => {
    let rtsAndFavs = TestUtils.renderIntoDocument(
        <RTsAndFavs />
    );
    expect(rtsAndFavs.refs.rts).to.be.an.instanceof(RTs);
  });

  it('has a favorites', () => {
    let rtsAndFavs = TestUtils.renderIntoDocument(
        <RTsAndFavs />
    );
    expect(rtsAndFavs.refs.favorites).to.be.an.instanceof(Favorites);
  });
});
