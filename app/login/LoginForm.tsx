'use client'

import { useEffect, useState } from "react"

// ** Components
import Heading from "../components/Heading"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";


interface LoginFormProps {
    currentUser: SafeUser | null;
}


const LoginForm: React.FC<LoginFormProps> = ({ currentUser }) => {

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const router = useRouter();


    useEffect(() => {
        if (currentUser) {
            router.push('/cart');
            router.refresh();
        }
    }, []);


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                router.push('/cart')
                router.refresh();
                toast.success('وارد شدید');
            };

            if (callback?.error) {
                toast.error(callback.error);
            };
        })
    };


    if (currentUser) {
        return (
            <div className="flex flex-col items-center justify-center gap-6">
                <p className="text-center">وارد شدید، درحال انتقال به صفحه اصلی...</p>
            </div>
        );
    };


    return (
        <>
            <Heading title='ورود به Digi~Shop' />
            <Button
                label="ورود با Google"
                outline
                icon={AiOutlineGoogle}
                onClick={() => { signIn('google') }}
            />

            <hr className="bg-slate-300 w-full h-px" />

            <Input
                id="email"
                label="ایمیل"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="رمز عبور"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

            <Button label={isLoading ? "درحال ورود..." : "ورود"} onClick={handleSubmit(onSubmit)} />

            <p className="text-sm flex items-center gap-[3px]">
                <span>حساب کاربری ندارید؟</span>
                <Link href={'/register'} className="underline font-bold"> ثبت نام</Link>
            </p>
        </>
    )
}

export default LoginForm