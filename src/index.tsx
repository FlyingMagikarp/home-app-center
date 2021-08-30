import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import {Route, Router} from 'react-router-dom';
import {Suspense} from 'react';
import history from './util/history';
import Main from './modules/Main'
import {UserStore} from "./modules/common/stores/userStore";
import MasterDataStore from "./modules/common/stores/masterDataStore";
import RootStore from "./rootStore";
import GlobalStyle from "./globalStyles";
import uiStore from "./modules/common/stores/uiStore";


const rootStore = RootStore.getInstance();
const stores = {
    [MasterDataStore.storeName]: rootStore.masterDataStore,
    [UserStore.storeName]: rootStore.userStore,
    [uiStore.storeName]: rootStore.uiStore,
};

export const StoreContext = React.createContext<RootStore>(rootStore);

function startApplication() {

    ReactDOM.render(
        <>
        <GlobalStyle/>
        <Provider>
                <Router history={history}>
                    <>
                        <Suspense fallback={<div/>}>
                            <Route path="/" component={Main}/>
                        </Suspense>
                    </>
                </Router>
        </Provider>
        </>,
        document.getElementById('rootApp')
    );
}

startApplication();