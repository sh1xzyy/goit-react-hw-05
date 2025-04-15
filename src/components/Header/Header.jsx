import { NavLink } from 'react-router-dom'
import Container from '../Container/Container'
import s from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
	return (
		<>
			<header className={s.header}>
				<Container>
					<nav>
						<ul className={s.headerList}>
							<li>
								<NavLink
									className={({ isActive }) =>
										clsx(s.link, isActive && s.active)
									}
									to='/'
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									className={({ isActive }) =>
										clsx(s.link, isActive && s.active)
									}
									to='/Movies'
								>
									Movies
								</NavLink>
							</li>
						</ul>
					</nav>
				</Container>
			</header>
		</>
	)
}

export default Header
