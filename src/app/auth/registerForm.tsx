import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import  * as yup  from "yup"
import { RegisterFormValuesInterface } from "../contract"
import InnerRegisterForm from "../components/auth/innerRegisterForm"
import Router from "next/router";
import callApi from "../helpers/callApi"


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
            const res = await callApi().post('/auth/register' , values);
            if(res.status === 201) {
                Router.push('/auth/login')
            }
        }
})(InnerRegisterForm)

export default RegisterForm;
