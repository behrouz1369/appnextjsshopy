import { Form, FormikProps, withFormik } from "formik"
import Input from "../components/shared/form/input"
import  * as yup  from "yup"

interface RegisterFormValues {
    name:string,
    email:string,
    password:string
}

const InnerRegisterForm = (props : FormikProps<RegisterFormValues>) => {

    return(
        <Form className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-1 justify-start">
                <Input name="name" label="name" />
            </div>

            <div className="flex flex-col gap-1 justify-start">
                <Input name="email" label="email" />
            </div>

            <div className="flex flex-col gap-1 justify-start">
                <Input name="password" label="password" />
            </div>

            <div className="flex justify-between items-center py-3">
                <button type="submit" className="text-lg font-semibold text-white bg-blue-600 rounded py-2 px-4 hover:bg-blue-700 transition-all">Register User</button>
            </div>
        </Form>
    )
}
interface RegisterFormProps {
    name?:string,
    email?:string,
    password?:string
}

let RegisterFormValidationSchema = yup.object().shape({
    name : yup.string().required().min(3),
    email : yup.string().required().email(),
    password : yup.string().required().min(6)
 })

const RegisterForm = withFormik<RegisterFormProps,RegisterFormValues>({
        mapPropsToValues : (props) => ({
            name: '',
            email: '',
            password:'',
        }),

        validationSchema:RegisterFormValidationSchema,

        handleSubmit :(values)=>{
            console.log(values)
        }
})(InnerRegisterForm)

export default RegisterForm;
