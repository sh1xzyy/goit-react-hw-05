import s from './ErrorPage.module.css'

const ErrorPage = () => {
	return (
		<div className={s.errorMsgWrapper}>
			<p>Something went wrong. Please try again!</p>
		</div>
	)
}

export default ErrorPage
