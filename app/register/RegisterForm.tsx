'use client'

import { useEffect, useState } from "react"

// ** Components
import Heading from "../components/Heading"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";


interface RegisterFormProps {
    currentUser: SafeUser | null;
}


const RegisterForm: React.FC<RegisterFormProps> = ({ currentUser }) => {

    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: "",
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

        axios.post('/api/register', data).then(() => {
            toast.success('حساب کاربری ایجاد شد');

            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if (callback?.ok) {
                    router.push('/cart')
                    router.refresh();
                    toast.success('وارد شدید');
                };

                if (callback?.error) {
                    toast.error(callback.error);
                };
            });
        }).catch(() => toast.error("ناموفق، خطایی رخ داده")).finally(() => {
            setIsLoading(false);
        });
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
            <Heading title='ثبت نام در Digi~Shop' />
            <Button
                label="ورود با حساب کاربری Google"
                outline
                icon={AiOutlineGoogle}
                onClick={() => { signIn('google') }}
            />

            <hr className="bg-slate-300 w-full h-px" />

            <Input
                id="name"
                label="نام"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />

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

            <Button label={isLoading ? "درحال ثبت نام...." : "ثبت نام"} onClick={handleSubmit(onSubmit)} />

            <p className="text-sm flex items-center gap-[3px]">
                <span>حساب کاربری دارید؟</span>
                <Link href={'/login'} className="underline font-bold"> ورود</Link>
            </p>
        </>
    )
}

export default RegisterForm