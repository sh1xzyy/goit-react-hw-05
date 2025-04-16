import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getMoviesByQuery } from '../../services/api'
import Section from '../../components/Section/Section'
import Container from '../../components/Container/Container'
import MoviesList from '../../components/MovieList/MovieList'
import SearchBar from '../../components/SearchBar/SearchBar'

const MoviesPage = () => {
	const [movies, setMovies] = useState([])
	const [searchParams, setSearchParams] = useSearchParams('')

	useEffect(() => {
		const getMovies = async () => {
			const response = await getMoviesByQuery(searchParams)
			setMovies(response.results)
		}
		getMovies()
	}, [searchParams])

	const onFormSubmit = query => {
		setSearchParams(query)
	}
	return (
		<>
			<Section>
				<Container>
					<SearchBar onFormSubmit={onFormSubmit} />
					<MoviesList movies={movies} />
				</Container>
			</Section>
		</>
	)
}

export default MoviesPage
