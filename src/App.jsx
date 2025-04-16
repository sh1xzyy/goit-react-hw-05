import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy, Suspense } from 'react'

const Header = lazy(() => import('./components/Header/Header'))
const Container = lazy(() => import('./components/Container/Container'))
const MovieReviews = lazy(() =>
	import('./components/MovieReviews/MovieReviews')
)
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'))
const MovieDetailsPage = lazy(() =>
	import('./pages/MovieDetailsPage/MovieDetailsPage')
)
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))

function App() {
	return (
		<>
			<Suspense fallback={<p className='loading'>Loading...</p>}>
				<Header />
				<Container>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/movies' element={<MoviesPage />} />
						<Route path='/movies/:id' element={<MovieDetailsPage />}>
							<Route path='cast' element={<MovieCast />} />
							<Route path='reviews' element={<MovieReviews />} />
						</Route>
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Container>
			</Suspense>
		</>
	)
}

export default App
