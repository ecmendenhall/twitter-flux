import React from 'react';

export class Hashtag extends React.Component {

  render() {
    return(
        <span className='hashtag'>{ this.props.tag }</span>
    )
  }
  
}