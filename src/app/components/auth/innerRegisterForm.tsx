import { RegisterFormValuesInterface } from "@/app/contract"
import { Form, FormikProps } from "formik"
import { deflate } from "zlib"
import Input from "../shared/form/input"


const InnerRegisterForm = (props : FormikProps<RegisterFormValuesInterface>) => {

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

export default InnerRegisterForm
