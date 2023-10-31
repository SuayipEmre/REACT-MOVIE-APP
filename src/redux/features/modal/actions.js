import { store } from "~/redux/app";
import { _setModal } from ".";

export const setModal = (state) =>  store.dispatch(_setModal(state))
