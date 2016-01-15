import React from 'react/addons'
import { expect } from 'chai';
import sinon from 'sinon';

import { App } from '../src/client/app';
import { Timeline } from '../src/client/timeline';

const TestUtils = React.addons.TestUtils;

describe('App', () => {

  it("sets 'Home' as initial view state", () => {
    let fakeTweetStore = {getTimeline: sinon.spy()};
    let app = TestUtils.renderIntoDocument(
        <App tweetStore={ fakeTweetStore }/>
    );
    expect(app.state.view).to.eql('Home');
  });

  it("sets empty list as initial tweets state", () => {
    let fakeTweetStore = {getTimeline: sinon.spy()};
    let app = TestUtils.renderIntoDocument(
        <App tweetStore={ fakeTweetStore }/>
    );
    expect(app.state.tweets).to.eql([]);
  });

  it("gets tweets on componentWillMount", () => {
    let fakeTweetStore = {getTimeline: sinon.spy()};
    let app = TestUtils.renderIntoDocument(
        <App tweetStore={ fakeTweetStore }/>
    );
    expect(fakeTweetStore.getTimeline.called).to.be.true;
  });

  it("has a timeline", () => {
    let fakeTweetStore = {getTimeline: sinon.spy()};
    let app = TestUtils.renderIntoDocument(
        <App tweetStore={ fakeTweetStore }/>
    );
    expect(app.refs.timeline).to.be.an.instanceof(Timeline);
  });

});
