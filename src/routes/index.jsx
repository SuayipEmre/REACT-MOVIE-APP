import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loading } from "~/components/loading";
import { MainLayout } from "~/layouts/main";
import { Home } from "~/pages/home";
import { MovieDetail } from "~/pages/movieDetail";
import { MoviesByGenre } from "~/pages/moviesByGenre";
import { NotFound } from "~/pages/notFound";


const routes = createBrowserRouter([
    {
        path : '/',
        element : <Suspense fallback={<Loading />}> <MainLayout /></Suspense>,
        children : [
            {
                index : true,
                element :  <Suspense fallback={<Loading />}>  <Home /></Suspense>
            },
            {
                path : '/detail/:id',
                element :  <Suspense fallback={<Loading />}> <MovieDetail /></Suspense> 
            },
            {
                path : '/moviesByGenre/:genreTitle',
                element :  <Suspense fallback={<Loading />}><MoviesByGenre /></Suspense> 
            },
            {
                path : '*',
                element : <NotFound />
            }
        ]
    }
])


export default routes