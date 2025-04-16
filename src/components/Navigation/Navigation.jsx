import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import s from './Navigation.module.css'

const Navigation = () => {
	return (
		<>
			<nav>
				<ul className={s.headerList}>
					<li>
						<NavLink
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
							to='/'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
							to='/movies'
						>
							Movies
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Navigation
