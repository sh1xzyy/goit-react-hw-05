import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import './App.css'
import Container from './components/Container/Container'
import HomePage from './pages/HomePage/Homepage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
import MovieCast from './components/MovieCast/MovieCast'
import MovieReviews from './components/MovieReviews/MovieReviews'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
	return (
		<>
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
		</>
	)
}

export default App
