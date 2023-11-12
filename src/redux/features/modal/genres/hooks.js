import { useSelector } from "react-redux";

export const useGenreModal = () => useSelector(state => state.genreModal.modal)
