import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import s from './SearchBar.module.css'

const SearchBar = ({ onFormSubmit }) => {
	const validationSchema = Yup.object().shape({
		query: Yup.string().required('Fill Field'),
	})

	const handleSubmit = (values, actions) => {
		onFormSubmit(values.query)
		actions.resetForm()
	}
	return (
		<>
			<Formik
				initialValues={{ query: '' }}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className={s.form}>
					<div>
						<Field className={s.field} type='text' name='query' />
						<button type='submit'>Search</button>
					</div>
					<ErrorMessage className={s.errorMsg} name='query' component={'p'} />
				</Form>
			</Formik>
		</>
	)
}

export default SearchBar
