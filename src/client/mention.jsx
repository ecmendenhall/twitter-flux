import React from 'react';

export class Mention extends React.Component {

  render() {
    return(
        <span className='mention'>
          { this.props.screen_name } 
        </span>
    )
  }
  
}