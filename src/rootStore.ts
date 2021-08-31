import { configure } from 'mobx';
import MasterDataStore from "./modules/common/stores/masterDataStore";
import {UserStore} from "./modules/common/stores/userStore";
import uiStore from "./modules/common/stores/uiStore";
import dutyPlanStore from "./modules/common/stores/dutyPlanStore";

configure({ enforceActions: 'observed' });

export default class RootStore {

    public static storeName: string = 'rootStore';

    public static getInstance() {
        if (!RootStore.instance) {
            RootStore.instance = new RootStore();
        }
        return RootStore.instance;
    }

    private static instance: RootStore;

    public masterDataStore: MasterDataStore;
    public userStore: UserStore;
    public uiStore: uiStore;
    public dutyPlanStore: dutyPlanStore;


    private constructor() {
        this.masterDataStore = new MasterDataStore(this);
        this.userStore = new UserStore(this);
        this.uiStore = new uiStore(this);
        this.dutyPlanStore = new dutyPlanStore(this);
    }

}