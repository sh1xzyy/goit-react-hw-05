import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

const NotFoundPage = () => {
	return (
		<div className={s.notFoundPageWrapper}>
			<p>No such page was found!</p>
			<Link className={s.notFoundLink} to={'/'}>
				Go Back
			</Link>
		</div>
	)
}

export default NotFoundPage
