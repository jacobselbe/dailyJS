import React from 'react';
import Icon from '@material-ui/core/Icon';
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

export default function NavBar(props) {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title">
                        <h3>dailyJS</h3>
                        <Icon>star</Icon>
                        <Icon>star</Icon>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
}