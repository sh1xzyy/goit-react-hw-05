import { Link, useLocation } from 'react-router-dom'
import s from './MovieItem.module.css'
import { FaStar } from 'react-icons/fa'

const MovieItem = ({
	movie: { id, poster_path, original_title, vote_average },
}) => {
	const location = useLocation()
	return (
		<>
			<li className={s.movieItem}>
				<Link to={`/movies/${id}`} state={{ from: location }}>
					<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt='' />
					<div className={s.movieInfo}>
						<p>
							{<FaStar color='orange' />}
							{vote_average}
						</p>
						<h3>{original_title}</h3>
					</div>
				</Link>
			</li>
		</>
	)
}

export default MovieItem
