import React from 'react';
import {Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import {observer} from "mobx-react-lite";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link as RouterLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import ViewModuleIcon from '@material-ui/icons/ViewModule';


export const useStyles = makeStyles((theme: Theme) => createStyles({
    navItemLink: {
        color: 'white',
        textDecoration: 'none',
    }
}));

const CompactHeader = observer(() => {
    const classes = useStyles();

    return (
        <>
            <RouterLink to={'/'} className={classes.navItemLink}>
                <ViewModuleIcon fontSize={'large'}/>
            </RouterLink>
        </>
    );
});

export default CompactHeader;




