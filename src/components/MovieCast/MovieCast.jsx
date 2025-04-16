import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieCreditsById } from '../../services/api'
import s from './MovieCast.module.css'

const MovieCast = () => {
	const [cast, setCast] = useState([])
	const [isEmpty, setIsEmpty] = useState(false)
	const { id } = useParams()

	useEffect(() => {
		const getMovies = async () => {
			const response = await getMovieCreditsById(id)
			setCast(response.cast)
			setIsEmpty(!response.cast.length)
		}
		getMovies()
	}, [id])

	return (
		<div>
			{!isEmpty ? (
				<ul className={s.castList}>
					{cast.map(
						({ id, character, known_for_department, name, profile_path }) => {
							return (
								<li key={id}>
									<img
										src={
											profile_path
												? `https://image.tmdb.org/t/p/w500/${profile_path}`
												: '/No_Image_Available.jpg'
										}
										alt={character}
									/>
									<div className={s.castInfo}>
										<h3>{name}</h3>
										<p>
											<span>Character:</span> {character}
										</p>
										<p>
											<span>Department:</span> {known_for_department}
										</p>
									</div>
								</li>
							)
						}
					)}
				</ul>
			) : (
				<p>We do not have any info about cast for this movie</p>
			)}
		</div>
	)
}

export default MovieCast
