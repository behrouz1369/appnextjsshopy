import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import * as yup from 'yup'
import { LoginFormValuesInterface } from "../contract"
import InnerLoginForm from "../components/auth/innerLoginForm"


interface LoginFormProps {
}


let LoginFormValidationSchema = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(6)
 })

const LoginForm = withFormik<LoginFormProps,LoginFormValuesInterface>({
    mapPropsToValues : (props) => ({
        email:'',
        password:''
    }),

    validationSchema:LoginFormValidationSchema,

    handleSubmit:(values) => {
        console.log(values)
    }
})(InnerLoginForm)

export default LoginForm
