import axios from 'axios'

export const getData = async () => {
	const response = await axios.get(
		'https://api.themoviedb.org/3/trending/movie/'
	)
	return response
}
