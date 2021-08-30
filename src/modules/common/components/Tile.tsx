import {observer} from "mobx-react-lite";
import {Link as RouterLink} from "react-router-dom";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, CardContent, Typography} from "@material-ui/core";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DateRangeIcon from '@material-ui/icons/DateRange';

interface ITileProps {
    text: string,
    icon: "book" | "calendar"
}

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    navItemLink: {
        color: 'white',
        textDecoration: 'none',
    }
});

const Tile = observer((props: ITileProps) => {
    const classes = useStyles();

    return (
        <>
            <RouterLink to={'/'} className={classes.navItemLink}>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography variant="body2" component="p">
                            {props.icon=="book" &&
                                <MenuBookIcon/>
                            }
                            {props.icon=="calendar" &&
                                <DateRangeIcon/>
                            }
                        </Typography>
                        <Typography variant="h5" component="h2" className={classes.title}>
                            {props.text}
                        </Typography>
                    </CardContent>
                </Card>
            </RouterLink>
        </>
    );
});

export default Tile;