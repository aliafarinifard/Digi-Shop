'use client'


import { SafeUser } from "@/types";
import Heading from "../components/Heading";
import { FaUserCircle } from "react-icons/fa";
import Button from "../components/Button";
import { useRouter } from "next/navigation";


interface SummaryProps {
    currentUser: SafeUser | null;
}


const Summary: React.FC<SummaryProps> = ({ currentUser }) => {

    const router = useRouter();

    return (
        <div className="mt-8">

            <div className="max-w-[1200px] m-auto flex flex-col gap-4">


                {!currentUser && (
                    <div className="flex flex-col items-center justify-between gap-16 max-w-[500px] m-auto">
                        <Heading title='برای مشاهده پنل کاربری، ابتدا ثبت نام کنید' center custom="text-xl" />

                        <Button label="ثبت نام" onClick={() => { router.push('/register') }} />
                    </div>
                )}



                {currentUser && (
                    <>

                        <div>
                            <span className="font-bold text-xl">سلام {currentUser?.name} عزیز 👋</span>
                        </div>

                        <div className="w-full flex justify-end max-[500px]:justify-center">
                            <div className="flex gap-8 max-[500px]:flex-col-reverse">

                                <div className="flex flex-col gap-4">

                                    <input
                                        type="text"
                                        value={currentUser.name || ''}
                                        className="border border-slate-100 focus:outline-none px-3 py-2 rounded-md disabled:cursor-not-allowed w-[18rem] text-sm text-center" disabled
                                    />

                                    <input
                                        type="email"
                                        value={currentUser.email || ''}
                                        className="border border-slate-100 focus:outline-none px-3 py-2 rounded-md disabled:cursor-not-allowed w-[18rem] text-sm text-center" disabled
                                    />

                                </div>

                                <div className="flex flex-col items-center justify-center">

                                    {currentUser?.image === null
                                        ?
                                        (
                                            <div className="bg-slate-50 rounded-full p-2">
                                                <div className="bg-slate-100 rounded-full p-2">
                                                    <div className="bg-slate-200 rounded-full p-2">
                                                        <FaUserCircle size={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="bg-slate-50 rounded-full p-2">
                                                <div className="bg-slate-100 rounded-full p-2">
                                                    <div className="bg-slate-200 rounded-full p-2">
                                                        <img src={currentUser?.image} alt={currentUser?.name || ''} className="rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                    <div className="text-slate-600 text-[1.2rem]">
                                        {currentUser?.role === 'USER' ?
                                            (
                                                <p className="font-bold">کاربر</p>
                                            )
                                            :
                                            (
                                                <p className="font-bold">ادمین</p>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

            </div>

        </div>
    )
}

export default Summary