import React from 'react';

export class UserAvatar extends React.Component {
  render() {
    return(
        <div className='avatar'>
          <img src={ this.props.profile_image_url } />
        </div>
    )
  }
}