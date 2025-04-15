import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import './App.css'
import Container from './components/Container/Container'

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/movies' element={<Movies />} />
				</Routes>
			</Container>
		</>
	)
}

export default App
