import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import * as yup from 'yup'
import { LoginFormValuesInterface } from "../contract"
import InnerLoginForm from "../components/auth/innerLoginForm"
import callApi from "../helpers/callApi"
import ValidationError from "../exceptions/validationError"


interface LoginFormProps {
    setCookie : any
}


let LoginFormValidationSchema = yup.object().shape({
    // email : yup.string().required().email(),
    // password : yup.string().required().min(6)
 })

const LoginForm = withFormik<LoginFormProps,LoginFormValuesInterface>({
    mapPropsToValues : (props) => ({
        email:'',
        password:''
    }),

    validationSchema:LoginFormValidationSchema,

    handleSubmit: async (values , {props , setFieldError}) => {
       try {
            const res = await callApi().post('/auth/login' , values)
            if(res.status === 200){
                props.setCookie('cookie-shopy' , res.data.token , {
                    'maxAge': 3600 * 24 * 30,
                    'domain':'localhost',
                    'path': '/',
                    'sameSite' : 'lax'
                })
            }
       } catch (error) {
            if(error instanceof ValidationError){
                Object.entries(error.message).forEach(([key , value]) => setFieldError(key , value as string))
            }
       }
    }
})(InnerLoginForm)

export default LoginForm
