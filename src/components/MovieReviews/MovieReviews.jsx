import { useEffect, useState } from 'react'
import { getMovieReviewsById } from '../../services/api'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import s from './MovieReviews.module.css'

const MovieReviews = () => {
	const { id } = useParams()
	const [reviews, setReviews] = useState([])
	const [isEmpty, setIsEmpty] = useState(false)

	useEffect(() => {
		const getReviews = async () => {
			try {
				const response = await getMovieReviewsById(id)
				setReviews(response.results)
				setIsEmpty(!response.results.length)
			} catch (error) {
				console.log(error)
			}
		}
		getReviews()
	}, [id])

	return (
		<div>
			{!isEmpty ? (
				<ul className={s.movieReviewsList}>
					{reviews.map(({ id, author, content }) => {
						return (
							<li key={id}>
								<h3>Author: {author}</h3>
								{parse(content)}
							</li>
						)
					})}
				</ul>
			) : (
				<p>We do not have any reviews for this movie</p>
			)}
		</div>
	)
}

export default MovieReviews
