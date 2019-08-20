import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';
import Challenge from './Challenge';

export default function App(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Container>
                <Challenge />
            </Container>
        </React.Fragment>
    );
}