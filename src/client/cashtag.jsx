import React from 'react';

export class Cashtag extends React.Component {

  render() {
    return(
        <span className='cashtag'>{ this.props.tag }</span>
    )
  }
  
}