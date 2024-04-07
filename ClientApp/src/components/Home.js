import React, { Component } from 'react';
import { Carasoul } from './Carasoul';
import { CarText } from './CarText';
export class Home extends Component {
  static displayName = Home.name;
  render() {
    return (
        <div>
            <Carasoul />
            <CarText />

      </div>
    );
  }
}
