import React, {useContext} from 'react';
import {Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import {StoreContext} from "../../index";
import {observer} from "mobx-react-lite";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {RouteComponentProps} from "react-router";


export const useStyles = makeStyles((theme: Theme) => createStyles({

}));

type Props = RouteComponentProps<any>;

const DutyPlanScreen = observer((props: Props) => {
    const {masterDataStore} = useContext(StoreContext);
    const classes = useStyles();

    return (
        <>
            <div><h1>DutyPlan</h1></div>
        </>
    );
});

export default DutyPlanScreen;




