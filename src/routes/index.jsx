import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "~/layouts/main";
import { Home } from "~/pages/home";
import { MovieDetail } from "~/pages/movieDetail";
import { MoviesByGenre } from "~/pages/moviesByGenre";

const routes = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : '/detail/:id',
                element : <MovieDetail />
            },
            {
                path : '/moviesByGenre/:genreTitle',
                element : <MoviesByGenre />
            }
        ]
    }
])


export default routes