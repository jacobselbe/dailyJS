import React from 'react';
import { connect } from 'react-redux';

import Card from "./Card";
import './section.css';

// import actions needed

export class CommunitySection extends React.Component {
  render() {
    return (
      <div class="section">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(CommunitySection);