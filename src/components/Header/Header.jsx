import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import s from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
	const setActiveClass = ({ active }) => {
		return clsx(s.link, active && s.active)
	}

	return (
		<>
			<header className={s.header}>
				<Container>
					<nav className={s.nav}>
						<NavLink className={active => setActiveClass(active)} to='/'>
							Home
						</NavLink>
						<NavLink className={active => setActiveClass(active)} to='/Movies'>
							Movies
						</NavLink>
					</nav>
				</Container>
			</header>
		</>
	)
}

export default Header
