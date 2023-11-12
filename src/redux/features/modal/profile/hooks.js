import { useSelector } from "react-redux";

export const useProfileModal = () => useSelector(state => state.profileModal.modal)