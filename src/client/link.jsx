import React from 'react';

export class Link extends React.Component {

  render() {
    return(
        <a href={ this.props.href }>{ this.props.href }</a>
    )
  }
  
}