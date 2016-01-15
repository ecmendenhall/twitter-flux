import React from 'react';

export class UserName extends React.Component {
  render() {
    return(
        <div className='username'>
          <span className='name'>{ this.props.name }</span>
          <span className='screen-name'>{ this.props.screen_name }</span>
        </div>
    )
  }
}