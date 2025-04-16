import axios from 'axios'

const API_KEY =
	'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTc2NGVlZmU5YzE5ZTRmYWNlYzI5NzQ1NjJmOGZmNCIsIm5iZiI6MTc0NDcxNzI4NS44NTc5OTk4LCJzdWIiOiI2N2ZlNDVlNWVmNWFlNjg3Y2JkOTVmZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TPfU-UDtJeQ8hmsAJNyhUO4sMkX5WZYn5_-eYMTr8rM'

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
