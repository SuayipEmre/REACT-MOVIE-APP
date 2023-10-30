import { useSelector } from "react-redux";


export const useSearchTitle = () => useSelector(state => state.search.searchTitle)