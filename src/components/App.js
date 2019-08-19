import React from 'react';
import Challenge from './Challenge';
import Container from '@material-ui/core/Container';


export default function App(props) {
  return (
    <Container>
      <header>dailyJS</header>
      <main role="main">
        <Challenge />
      </main>
    </Container>
  );
}