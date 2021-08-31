import {computed, observable} from "mobx";
import RootStore from "../../../rootStore";
import getWeek from 'date-fns/getWeek'
import {add} from "date-fns";

export default class DutyPlanStore {

    public static storeName: string = 'dutyPlanStore';

    public rootStore: RootStore;

    @observable public pendingRequestsCount = 0;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    private get currentWeek(){
        let now = new Date();
        return getWeek(now);
    }

    @computed
    public get taskData() {
        let mod2 = [[true,false,false],[false,true,false],[false,false,true]];
        let mod1 = [[false,true,false],[false,false,true],[true,false,false]];
        let mod0 = [[false,false,true],[true,false,false],[false,true,false]];
        let tasksMod = [mod0,mod1,mod2];
        let weekNr = this.currentWeek;
        let mod = weekNr%3;

        return tasksMod[mod];
    };
}
