import { useEffect, useState } from 'react'
import { getMoviesByTrending } from '../../services/api'
import MoviesList from '../../components/MovieList/MovieList'
import Section from '../../components/Section/Section'
import ErrorPage from '../ErrorPage/ErrorPage'

const HomePage = () => {
	const [movies, setMovies] = useState([])
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const getMovies = async () => {
			try {
				const response = await getMoviesByTrending()
				setMovies(response.results)
			} catch (error) {
				setIsError(true)
				console.log(error)
			}
		}
		getMovies()
	}, [])
	return (
		<>
			{!isError ? (
				<Section>
					<MoviesList movies={movies} />
				</Section>
			) : (
				<ErrorPage />
			)}
		</>
	)
}

export default HomePage
