import { useEffect } from 'react'
import { getData } from '../../services/api'

const Home = () => {
	useEffect(() => {
		const gettingData = async () => {
			const response = await getData()
			console.log(response)
		}
		gettingData()
	}, [])
	return <></>
}

export default Home
