import s from './MovieList.module.css'
import MovieItem from '../MovieItem/MovieItem'

const MoviesList = ({ movies }) => {
	return (
		<>
			<ul className={s.moviesList}>
				{movies.map(movie => (
					<MovieItem key={movie.id} movie={movie} />
				))}
			</ul>
		</>
	)
}

export default MoviesList
