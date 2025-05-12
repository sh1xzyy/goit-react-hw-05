import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

const options = {
	headers: { Authorization: `Bearer ${API_KEY}` },
}

export const getMoviesByTrending = async () => {
	const response = await axios.get(
		'https://api.themoviedb.org/3/trending/movie/day',
		options
	)
	return response.data
}

export const getMoviesById = async id => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}`,
		options
	)
	return response.data
}

export const getMovieCreditsById = async id => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}/credits`,
		options
	)
	return response.data
}

export const getMovieReviewsById = async id => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/movie/${id}/reviews`,
		options
	)
	return response.data
}

export const getMoviesByQuery = async query => {
	const response = await axios.get(
		`https://api.themoviedb.org/3/search/movie`,
		{ ...options, params: { query } }
	)
	return response.data
}
