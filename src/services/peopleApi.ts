import {IPeopleState} from "../store/ducs/peoples/contracts/state";
import axios from "axios";
import {IInfo} from "../store/ducs/info/contracts/state";

export const Api = {
    fetchPeople(): Promise<IPeopleState["data"]> {
        return axios.get("/peoples").then(({data})=> data);
    },
    fetchInfo(id: string): Promise<IInfo> {
        return axios.get("/peoples?_id="+ id).then(({data})=> data);
    }
}