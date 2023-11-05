import { store } from "~/redux/app";
import { _setFilterSearchTitle } from ".";


export const setFilterSearchTitle = (data) =>  store.dispatch(_setFilterSearchTitle(data))