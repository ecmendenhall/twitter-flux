import React from 'react';

export class Favorites extends React.Component {

  favoriteCount() {
    if (this.props.favorite_count > 0) {
      return this.props.favorite_count.toString();
    } else {
      return '';
    }
  }

  render() {
    return(
        <span className='favorites'>
          <i className='fa fa-star'></i>{ this.favoriteCount() }
        </span>
    )
  }
}