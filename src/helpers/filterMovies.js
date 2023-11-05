import { useFilterSearchTitle } from "~/redux/features/filterSearch/hooks"

export const filterMovies = (movies) => {

    const filterSearchTitle = useFilterSearchTitle()

    let filteredMovies = []
    filteredMovies = movies

    if (filterSearchTitle) {
        filteredMovies = movies.filter(item => item.title.toLowerCase().includes(filterSearchTitle.toLowerCase()))
    }

    return filteredMovies

}