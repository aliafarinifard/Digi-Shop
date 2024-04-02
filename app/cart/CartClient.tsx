'use client';

import { useCart } from "@/hooks/useCart"
import Link from "next/link";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Heading from "../components/Heading";
import Button from "../components/Button";
import CartItem from "./CartItem";
import { formatPrice } from "@/utils/formatPrice";

import emptyCart from "@/public/empty-cart.webp";
import Image from "next/image";


const CartClient = () => {

    const { cartProducts, handleClearCart, cartTotalAmount, cartTotalQty } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">سبد خرید شما خالی است!</div>
                <Image src={emptyCart} alt="empty cart" className="w-80" />
                <div>
                    <Link href={'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                        <span> رفتن به فروشگاه</span>
                        <MdArrowBack />
                    </Link>
                </div>
            </div >
        )
    }

    return (
        <div>
            <Heading title='سبد خرید شما' center />
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">

                <div className="col-span-2 justify-self-start flex items-center gap-[3px]">
                    <span>کالا</span>

                    <span>({cartTotalQty})</span>
                </div>

                <div className="justify-self-center">قیمت</div>

                <div className="justify-self-center">تعداد</div>

                <div className="justify-self-end flex items-center gap-[3px]">
                    <span>قیمت کالاها</span>

                    <span>({cartTotalQty})</span>
                </div>


            </div>

            <div>
                {cartProducts && cartProducts.map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    )
                })}
            </div>

            <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4 max-[450px]:flex-col max-[450px]:gap-6">
                <div className="w-[6rem]">
                    <Button label="حذف همه" onClick={() => { handleClearCart() }} small outline />
                </div>

                <div className="text-sm flex flex-col items-start gap-1">

                    <div className="flex justify-between w-full text-base font-semibold mb-3">
                        <span className="font-[500]">جمع سبد خرید</span>
                        <span>{formatPrice(cartTotalAmount)}</span>
                    </div>
                    <p className="text-slate-500 text-[0.8rem] mb-1">مالیات و حمل و نقل در هنگام پرداخت محاسبه می شود</p>
                    <Button label="تایید و تکمیل سفارش" onClick={() => { }} />
                    <div className="flex justify-end w-full">
                        <Link href={'/'} className="text-slate-500 flex items-center gap-1 mt-2">
                            <span>رفتن به فروشگاه</span>
                            <MdArrowBack />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartClient