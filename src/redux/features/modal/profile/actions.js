import { store } from "~/redux/app";
import { _setProfileModal } from ".";


export const setProfileModal = (state) => store.dispatch(_setProfileModal(state))