import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loading } from "~/components/loading";
import { MainLayout } from "~/layouts/main";
import { Home } from "~/pages/home";
import { LikedMovies } from "~/pages/likedMovies";
import { MovieDetail } from "~/pages/movieDetail";
import { MoviesByGenre } from "~/pages/moviesByGenre";
import { MoviesBySearch } from "~/pages/moviesBySearch";
import { NotFound } from "~/pages/notFound";
import { WatchLater } from "~/pages/watchLater";


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
                path : '/moviesBySearch/:title',
                element :  <Suspense fallback={<Loading />}><MoviesBySearch /></Suspense> 
            },
            {
                path : '/profile/myFavoriteMovies',
                element :  <Suspense fallback={<Loading />}><LikedMovies /></Suspense> 
            },
            {
                path : '/profile/watchLater',
                element :  <Suspense fallback={<Loading />}><WatchLater /></Suspense> 
            },
            {
                path : '*',
                element : <NotFound />
            }
        ]
    }
])


export default routes
