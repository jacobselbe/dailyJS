import React from 'react';

// import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar';
import Container from '@material-ui/core/Container';
import Challenge from './Challenge';

/* Saved Material-UI Theme */
// const useStyles = makeStyles(theme => ({
//     root: {
//         color: theme.status.danger,
//         '&$checked': {
//             color: theme.status.danger,
//         },
//     },
//     checked: {},
// }));

// function CustomCheckbox() {
//     const classes = useStyles();

//     return (
//         <Checkbox
//             defaultChecked
//             classes={{
//                 root: classes.root,
//                 checked: classes.checked,
//             }}
//         />
//     );
// }

// const theme = createMuiTheme({
//     status: {
//         danger: orange[500],
//     },
// });

// export default function CustomStyles() {
//     return (
//         <ThemeProvider theme={theme}>
//             <CustomCheckbox />
//         </ThemeProvider>
//     );
// }

export default function App(props) {
    return (
        // <ThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <NavBar />
                <Container>
                    <Challenge />
                </Container>
            </React.Fragment>
        // </ThemeProvider>
    );
}