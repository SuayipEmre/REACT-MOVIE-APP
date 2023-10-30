import { useSearchTitle } from "~/redux/features/search/hooks"

export const filterMovies = (movies) => {

    const searchTitle = useSearchTitle()

    let filteredMovies = []
    filteredMovies = movies

    if (searchTitle) {
        filteredMovies = movies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))
    }

    return filteredMovies

}