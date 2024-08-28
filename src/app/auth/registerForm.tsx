import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import  * as yup  from "yup"
import { RegisterFormValuesInterface } from "../contract"
import InnerRegisterForm from "../components/auth/innerRegisterForm"
import CallApi from "../helpers/callApi"


interface RegisterFormProps {
}

let RegisterFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(3),
    email : yup.string().required().email(),
    password : yup.string().required().min(6)
 })

const RegisterForm = withFormik<RegisterFormProps,RegisterFormValuesInterface>({
        mapPropsToValues : (props) => ({
            name: '',
            email: '',
            password:'',
        }),

        validationSchema:RegisterFormValidationSchema,

        handleSubmit : async (values) => {
            const res = await CallApi().post('/auth/register',values)
        }
})(InnerRegisterForm)

export default RegisterForm;
