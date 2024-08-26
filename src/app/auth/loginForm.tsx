import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import * as yup from 'yup'


interface LoginFormValues {
    email:string,
    password:string
}

const InnerLoginForm = (props : FormikProps<LoginFormValues>) => {
    return (
        <>
            <Form className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1 justify-start">
                    <Input name="email" label="email" />
                </div>

                <div className="flex flex-col gap-1 justify-start">
                    <Input name="password" label="password" />
                </div>

                <div className="flex justify-between items-center py-3">
                    <button type="submit" className="text-lg font-semibold text-white bg-blue-600 rounded py-2 px-4 hover:bg-blue-700 transition-all">Login User</button>
                    <a href="#" className="text-red-700">forget Password</a>
                </div>
            </Form>
        </>
    )
}

interface LoginFormProps {
    email?:string,
    password?:string
}


let LoginFormValidationSchema = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(6)
 })

const LoginForm = withFormik<LoginFormProps,LoginFormValues>({
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
