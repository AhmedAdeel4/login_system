import * as Yup from 'yup'

export const yupValidation = Yup.object  ({
    name: Yup.string().min(3).required('please enter name'),
    email: Yup.string().min(3).email('please enter valid email').required('please enter email'),
    password: Yup.string().min(5).required('please enter password'),
    cpassword: Yup.string().oneOf([Yup.ref('password')],'password not matched').required('please enter cpassword'),    
})