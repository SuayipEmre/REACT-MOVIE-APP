import { useSelector } from "react-redux";


export const useFilterSearchTitle = () => useSelector(state => state.search.filterSearchTitle)