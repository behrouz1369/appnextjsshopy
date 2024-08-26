import { inputProps } from "@/app/mudels/inputProps"
import { ErrorMessage, Field } from "formik"
import { FC } from "react"


const Input : FC<inputProps> = ({
    name,
    label,
    type="text",
    inputClassName,
    labelClassName,
    errorMessage
}) => {

    return (
        <>
            <label htmlFor={name} className={`text-[13px] text-white ${labelClassName ?? ''}`}>{label} : </label>
            <Field type={type} name={name} placeholder="Enter Text ..." className={`text-sm rounded border-0 py-2 px-4 ${inputClassName ?? ''}`} />
            <div className={`text-[12px] text-red-500 ${errorMessage ?? ''}`}>
                <ErrorMessage name={name} />
            </div>

        </>
    )
}

export default Input
