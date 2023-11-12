import { store } from "~/redux/app";
import { _setGenreModal } from ".";

export const setGenreModal = (state) =>  store.dispatch(_setGenreModal(state))
