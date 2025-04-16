import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMoviesById } from '../../services/api'
import MovieDetailCard from '../../components/MovieDetailCard/MovieDetailCard'
import MovieDetailsNav from '../../components/MovieDetailsNav/MovieDetailsNav'

const MovieDetailsPage = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState({})

	useEffect(() => {
		const getData = async () => {
			try {
				const movieInfo = await getMoviesById(id)
				setMovie(movieInfo)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [id])

	return (
		<div>
			<MovieDetailCard id={id} movie={movie} />
			<MovieDetailsNav />
		</div>
	)
}

export default MovieDetailsPage
