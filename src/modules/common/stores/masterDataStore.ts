import {computed, observable} from "mobx";
import RootStore from "../../../rootStore";

export default class MasterDataStore {

    public static storeName: string = 'masterDataStore';

    public rootStore: RootStore;

    @observable public pendingRequestsCount = 0;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @computed
    public get isLoading() {
        return this.pendingRequestsCount > 0;
    }
}
