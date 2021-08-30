import React from 'react';
import {Route, RouteComponentProps, Switch} from "react-router-dom";
import CompactHeader from "./common/components/header/CompactHeader";

import createStyles from "@material-ui/core/styles/createStyles";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {observer} from "mobx-react";


const CVScreen = React.lazy(() => import(/* webpackChunkName: "CreateOrderScreen" */ './dashboard/DashboardScreen'));
const ProjectsScreen = React.lazy(() => import(/* webpackChunkName: "CreateOrderScreen" */ './dutyPlan/DutyPlanScreen'));


const useStyles = makeStyles(() => createStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    navButton: {
        /*position: 'fixed',
        top: 0,
        right: 0*/
    },
    innerContent: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
}));

const getRoutes = () => {
    const routes = [
        {
            path: '/',
            main: CVScreen,
            exact: true,
            requireAuth: false
        },
        {
            path: '/dutyPlan',
            main: ProjectsScreen,
            exact: true,
            requireAuth: false
        }/*,
        {
            path: '/promotionpreview/:id',
            main: PromotionPreviewOverview,
            requireAuth: true
        }*/
    ];

    return routes;
};

const getRoute = (path: any, exact: any, component: any, requireAuth: any, index: any) => {
    return <Route
            key={index}
            path={path}
            exact={exact}
            component={component}
        />;
};

type Props = RouteComponentProps<any>;

const Main = observer((props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <span className={classes.navButton}><CompactHeader /></span>
            <div className={classes.innerContent}>
                <Switch>
                    {getRoutes().map((route, index) => (
                        getRoute(route.path, route.exact, route.main, route.requireAuth, index)
                    ))}
                </Switch>
            </div>
        </div>
    )
});

export default Main;



