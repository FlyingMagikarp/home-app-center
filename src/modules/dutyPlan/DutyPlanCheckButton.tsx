import {observer} from "mobx-react-lite";
import React from "react";
import {Checkbox, withStyles} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    colorGreen: {
        color: 'green',
    },
});

interface IDutyPlanCheckButtonProps {
    disabled: boolean
}


const DutyPlanCheckButton = observer((props: IDutyPlanCheckButtonProps) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    if (props.disabled) {
        return (
            <>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="default"
                    style={{
                        transform: "scale(1.7)",
                    }}
                    className={classes.colorGreen}
                />
            </>
        );
    } else {
        return (
            <>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    color="default"
                    style={{
                        transform: "scale(1.7)",
                    }}
                    className={classes.colorGreen}
                    disabled
                />
            </>
        );
    }
});

export default DutyPlanCheckButton;