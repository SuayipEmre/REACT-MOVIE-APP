import { store } from "~/redux/app";
import {  _setSearchTitle } from ".";


export const setSearchTitle = (data) =>  store.dispatch(_setSearchTitle(data))