import { Link, useLocation } from 'react-router-dom'
import { FaStar, FaUser, FaBackspace } from 'react-icons/fa'
import { LuLanguages } from 'react-icons/lu'
import { IoIosTimer } from 'react-icons/io'
import { useRef } from 'react'
import s from './MovieDetailCard.module.css'
import Section from '../../components/Section/Section'

const MovieDetailCard = ({ movie }) => {
	const location = useLocation()
	const backLink = useRef(location.state?.from ?? '/movies')
	return (
		<>
			<Section>
				<Link to={backLink.current} className={s.goBackLink}>
					<FaBackspace />
					Go back
				</Link>
				<div className={s.movieInfo}>
					<img
						src={
							movie.poster_path
								? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
								: '/No_Image_Available.jpg'
						}
						alt={movie.title}
						height={400}
						width={300}
					/>
					<div className={s.description}>
						<div className={s.movieStats}>
							<p>
								<FaStar color='orange' />
								{movie.vote_average}
							</p>
							<p>
								<FaUser />
								{movie.vote_count}
							</p>
							<p>
								<LuLanguages />
								{movie.spoken_languages?.map(({ name }) => name).join(', ')}
							</p>
							<p>
								<IoIosTimer />
								{movie.runtime}min
							</p>
						</div>
						<div className={s.movieDetails}>
							<p>
								<span>Genres: </span>
								{movie.genres?.map(({ name }) => name).join(', ')}
							</p>
							<h3>{movie.title}</h3>
							<p>{movie.overview}</p>
						</div>
					</div>
				</div>
			</Section>
		</>
	)
}

export default MovieDetailCard
