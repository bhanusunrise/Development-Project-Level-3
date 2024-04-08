import React, { Component } from 'react';
import PriceList from './PriceList';

export class Pricing extends Component {
  static displayName = Pricing.name;

  render() {
    return (
      <div> 
            <PriceList />
      </div>
    );
  }
}
