import { LoginFormValuesInterface } from "@/app/contract"
import { Form, FormikProps } from "formik"
import Input from "../shared/form/input"


const InnerLoginForm = (props : FormikProps<LoginFormValuesInterface>) => {
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

export default InnerLoginForm
