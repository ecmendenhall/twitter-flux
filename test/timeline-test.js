import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { Timeline } from '../src/client/timeline';
import { Tweet } from '../src/client/tweet';

const TestUtils = React.addons.TestUtils;

describe('Timeline', () => {

  it('has many tweets', () => {
    let props = {tweets: [{id: 1}, {id: 2}]}
    let timeline = TestUtils.renderIntoDocument(
        <Timeline {...props} />
    );
    expect(timeline.refs.tweet1).to.be.a.instanceof(Tweet);
    expect(timeline.refs.tweet2).to.be.a.instanceof(Tweet);
  });

});
