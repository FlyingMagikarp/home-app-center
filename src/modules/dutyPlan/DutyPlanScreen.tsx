import React, {useContext} from 'react';
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme} from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import {StoreContext} from "../../index";
import {observer} from "mobx-react-lite";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {RouteComponentProps} from "react-router";
import Typography from "@material-ui/core/Typography";
import DutyPlanCheckButton from "./DutyPlanCheckButton";


export const useStyles = makeStyles((theme: Theme) => createStyles({
    title: {
        marginBottom: "50px"
    },
    table: {
        minWidth: 600,
    },
}));

type Props = RouteComponentProps<any>;

const DutyPlanScreen = observer((props: Props) => {
    const {dutyPlanStore} = useContext(StoreContext);
    const classes = useStyles();

    let taskData = dutyPlanStore.taskData;

    function createData(name, tasks) {
        return { name, tasks };
    }

    const rows = [
        createData('Alvaro', taskData[0]),
        createData('Kim', taskData[1]),
        createData('Marko', taskData[2]),
    ];

    return (
        <>
            <div className={classes.title}>
                <Typography variant="h1" component="h2">
                    Ämtliplan
                </Typography>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><b>Wer/Was</b></TableCell>
                                <TableCell >Badezimmer</TableCell>
                                <TableCell >Boden</TableCell>
                                <TableCell >Küche</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        <b>{row.name}</b>
                                    </TableCell>
                                    <TableCell >
                                        <DutyPlanCheckButton disabled={row.tasks[0]}/>
                                    </TableCell>
                                    <TableCell >
                                        <DutyPlanCheckButton disabled={row.tasks[1]}/>
                                    </TableCell>
                                    <TableCell >
                                        <DutyPlanCheckButton disabled={row.tasks[2]}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
});

export default DutyPlanScreen;




