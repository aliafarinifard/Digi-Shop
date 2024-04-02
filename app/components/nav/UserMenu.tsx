'use client'

import { useCallback, useState } from "react"
import Avatar from "../Avatar";
import { AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/types";


interface UserMenuProps {
    currentUser: SafeUser | null;
}


const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <>
            <div className="relative z-30">

                <div onClick={toggleOpen} className="p-2 border-[1px] border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700">
                    <Avatar src={currentUser?.image} />
                    <AiFillCaretDown />
                </div>

                {isOpen && (
                    <div className="absolute rounded-md shadow-md w-[10.63rem] bg-white overflow-hidden left-0 top-12 text-sm flex flex-col cursor-pointer">

                        {currentUser ? (
                            <div>
                                <Link href={'/orders'}>
                                    <MenuItem onClick={toggleOpen}>سفارش ها</MenuItem>
                                </Link>
                                <Link href={'/admin'}>
                                    <MenuItem onClick={toggleOpen}>حساب کاربری</MenuItem>
                                </Link>
                                <hr />
                                <MenuItem onClick={() => {
                                    toggleOpen();
                                    signOut();
                                }}>
                                    خروج
                                </MenuItem>
                            </div>
                        ) : (
                            <div>
                                <Link href={'/login'}>
                                    <MenuItem onClick={toggleOpen}>ورود</MenuItem>
                                </Link>
                                <Link href={'/register'}>
                                    <MenuItem onClick={toggleOpen}>ثبت نام</MenuItem>
                                </Link>
                            </div>
                        )}

                    </div>
                )}

            </div>
            {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
        </>
    )
}

export default UserMenu