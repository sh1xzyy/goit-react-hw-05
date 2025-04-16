import Container from '../Container/Container'
import s from './Header.module.css'
import Navigation from '../Navigation/Navigation'

const Header = () => {
	return (
		<>
			<header className={s.header}>
				<Container>
					<Navigation />
				</Container>
			</header>
		</>
	)
}

export default Header
