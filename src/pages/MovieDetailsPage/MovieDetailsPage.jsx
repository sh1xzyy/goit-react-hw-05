import s from './MovieDetailsPage.module.css'
import { FaStar, FaUser, FaBackspace } from 'react-icons/fa'
import { LuLanguages } from 'react-icons/lu'
import { IoIosTimer } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { getMoviesById } from '../../services/api'
import Section from '../../components/Section/Section'
import clsx from 'clsx'

const MovieDetailsPage = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState({})
	const location = useLocation()
	const backLink = useRef(location.state?.from ?? '/movies')

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
			<Section>
				<Link to={backLink.current} className={s.goBackLink}>
					<FaBackspace />
					Go back
				</Link>
				<div className={s.movieInfo}>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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

			<Section>
				<ul className={s.additionalLinks}>
					<li>
						<NavLink
							to={'cast'}
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
						>
							Cast
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'reviews'}
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
						>
							Reviews
						</NavLink>
					</li>
				</ul>
				<Outlet />
			</Section>
		</div>
	)
}

export default MovieDetailsPage
