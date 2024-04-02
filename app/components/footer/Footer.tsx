// ** Next Import
import Link from "next/link"

// ** Components
import Container from "../Container"
import FooterList from "./FooterList"

// ** React Icons
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import Image from "next/image";

import heart from "@/public/heart.webp";


const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
                    <FooterList>

                        <h3 className="text-base font-bold mb-2">دسته بندی ها</h3>
                        <Link href={'#'}>موبایل</Link>
                        <Link href={'#'}>لپ تاپ</Link>
                        <Link href={'#'}>کامپیوتر و دسکتاپ</Link>
                        <Link href={'#'}>ساعت</Link>
                        <Link href={'#'}>تلویزیون</Link>
                        <Link href={'#'}>اکسسوری</Link>

                    </FooterList>

                    <FooterList>

                        <h3 className="text-base font-bold mb-2">خدمات ما</h3>
                        <Link href={'#'}>پاسخ به پرسش های متداول</Link>
                        <Link href={'#'}>رویه های بازگرداندن کالا</Link>
                        <Link href={'#'}>نحوه ثبت سفارش</Link>
                        <Link href={'#'}>تماس با دیجی شاپ</Link>
                        <Link href={'#'}>حریم خصوصی</Link>
                        <Link href={'#'}>شرایط استفاده</Link>

                    </FooterList>

                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">درباره دیجی شاپ</h3>
                        <p className="mb-2 text-justify leading-[1.7rem]">
                            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد. یکی از مهم‌ترین دغدغه‌های کاربران دیجی‌کالا یا هر فروشگاه‌ اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان می‌رسد.
                        </p>
                        <p dir="ltr" className="text-end">&copy; {new Date().getFullYear()} Digi~Shop.</p>
                        <div className="flex items-center justify-end" dir="ltr">
                            <p className="font-bold text-md mt-2">
                                Developed by Ali.
                            </p>
                            <Image src={heart} alt="heart" className="w-7 h-7 relative top-[2px]" />
                        </div>
                    </div>
                    <FooterList>

                        <h3 className="text-base font-bold mb-2 ml-3 lg:ml-0">همراه ما باشید</h3>

                        <div className="flex gap-2 ml-3 lg:ml-0">

                            <Link href={'#'}>
                                <MdFacebook size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href={'#'}>
                                <AiFillYoutube size={24} />
                            </Link>

                        </div>

                    </FooterList>
                </div>
            </Container>
        </footer>
    )
}

export default Footer