'use client'

import Link from "next/link"
import Container from "../Container"
import AdminNavItem from "./AdminNavItem"
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md"
import { usePathname } from "next/navigation"
import { SafeUser } from "@/types"


interface LoginFormProps {
    currentUser: SafeUser | null;
}


const AdminNav: React.FC<LoginFormProps> = ({ currentUser }) => {

    const pathname = usePathname();

    return (
        <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
            <Container>

                <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">

                    <Link href={'/admin'}>
                        <AdminNavItem
                            label="پنل کاربری"
                            icon={MdDashboard}
                            selected={pathname === '/admin'}
                        />
                    </Link>

                    {currentUser && currentUser.role === 'ADMIN' && (
                        <>
                            <Link href={'/admin/add-products'}>
                                <AdminNavItem
                                    label="ایجاد کالا"
                                    icon={MdLibraryAdd}
                                    selected={pathname === '/admin/add-products'}
                                />
                            </Link>
                            <Link href={'/admin/manage-products'}>
                                <AdminNavItem
                                    label="مدیریت کالاها"
                                    icon={MdDns}
                                    selected={pathname === '/admin/manage-products'}
                                />
                            </Link>
                        </>
                    )}
                    
                    <Link href={'/admin/manage-orders'}>
                        <AdminNavItem
                            label="مدیریت سفارش ها"
                            icon={MdFormatListBulleted}
                            selected={pathname === '/admin/manage-orders'}
                        />
                    </Link>

                </div>

            </Container>
        </div>
    )
}

export default AdminNav