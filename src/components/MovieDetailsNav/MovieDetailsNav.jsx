import { NavLink, Outlet } from 'react-router-dom'
import clsx from 'clsx'
import Section from '../../components/Section/Section'
import s from './MovieDetailsNav.module.css'

const MovieDetailsNav = () => {
	return (
		<>
			<Section>
				<h3 className={s.navTitle}>Additional Information</h3>
				<ul className={s.additionalLinks}>
					<li>
						<NavLink
							to={'cast'}
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
						>
							Cast
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'reviews'}
							className={({ isActive }) => clsx(s.link, isActive && s.active)}
						>
							Reviews
						</NavLink>
					</li>
				</ul>
				<Outlet />
			</Section>
		</>
	)
}

export default MovieDetailsNav
