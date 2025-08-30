import * as Yup from 'yup'

const logInSchema = Yup.object  ({
    email: Yup.string().min(3).email('please enter valid email').required('please enter email'),
    password: Yup.string().min(5).required('please enter password'),
})

export default logInSchema ;