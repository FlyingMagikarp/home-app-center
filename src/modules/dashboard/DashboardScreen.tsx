import React, {useContext} from 'react';
import {Grid, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import {StoreContext} from "../../index";
import {observer} from "mobx-react-lite";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {RouteComponentProps} from "react-router";
import Typography from "@material-ui/core/Typography";
import Tile from "../common/components/Tile";



export const useStyles = makeStyles((theme: Theme) => createStyles({
    title: {
        fontSize: '16px'
    }
}));


type Props = RouteComponentProps<any>;

const DashboardScreen = observer((props: Props) => {
    const {masterDataStore, uiStore} = useContext(StoreContext);
    const classes = useStyles();
    const isMobile = uiStore.isMediumScreenDown;

    return (
        <>
            <div>
                <Typography variant="h1" component="h2">
                    APPS
                </Typography>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={6}>
                    <Grid item><Tile text={"Ämtliplan"} icon={"calendar"}/></Grid>
                    <Grid item><Tile text={"Recies"} icon={"book"}/></Grid>
                    <Grid item><Tile text={"Roomba?"} icon={"book"}/></Grid>
                </Grid>
            </div>
        </>
    );
});

export default DashboardScreen;




