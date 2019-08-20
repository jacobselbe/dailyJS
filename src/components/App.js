import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Challenge from './Challenge';


export default function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <header>dailyJS</header>
        <main role="main">
          <Challenge />
        </main>
      </Container>
    </React.Fragment>
  );
}