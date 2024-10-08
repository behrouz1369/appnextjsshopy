import Image from "next/image";
import logoWeb from './../../../../public/logo/logo-one.jpg'

import { object, string } from "yup";

import RegisterForm from "@/app/auth/registerForm";



const Register = () => {

    return (
        <>
            {/* Login Page */}
            <div className="flex justify-center items-center bg-blue-950 w-full h-screen">
                <div className="flex flex-col justify-center items-center gap-3 rounded w-1/2 lg:w-1/3 border-2 p-5">
                    <header className="flex flex-col justify-center items-center gap-5">
                        {/* <Image
                            src={logoWeb}
                            alt="Picture of the author"
                            width={150}
                            height={150}
                            // blurDataURL="data:..."
                            placeholder="blur"
                        /> */}

                        <h2 className="text-xl text-white font-bold">Register in to your account</h2>
                    </header>

                    <div className="flex w-full">
                        <RegisterForm />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;
