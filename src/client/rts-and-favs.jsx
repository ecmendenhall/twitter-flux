import React from 'react';

import { Reply } from './reply';
import { RTs } from './rts';
import { Favorites } from './favorites';

export class RTsAndFavs extends React.Component {
  render() {
    return(
        <div className='rts-and-likes'>
          <Reply ref='reply' />
          <RTs { ...this.props } ref='rts' />
          <Favorites { ...this.props } ref='favorites' />
        </div>
    )
  }
}