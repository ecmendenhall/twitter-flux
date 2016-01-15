import React from 'react';
import ReactDom from 'react-dom';

import { Timeline } from './timeline';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'Home',
      tweets: []
    }
  }

  componentWillMount() {
    this.props.tweetStore.getTimeline((tweets) => {
      this.setState({tweets: tweets}); 
    });
  }

  render() {
    return(
        <section className='app'>
        <nav className='menu'>
            <div className='avatar avatar-sidebar'>
              <img width="48px" height="48px" src="https://pbs.twimg.com/profile_images/564360246/profile1_bigger.jpg" />
            </div>
          </nav>
          <section className='home'>
            <h1 className='section-header'>{ this.state.view }</h1>
            <Timeline tweets={ this.state.tweets } ref='timeline' />
          </section>
        </section>
    )
  }
}