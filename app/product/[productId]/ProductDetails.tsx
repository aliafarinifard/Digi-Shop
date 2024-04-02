'use client';

import { useCallback, useEffect, useState } from "react"

// ** Material UI
import { Rating } from "@mui/material"
import SetQuantity from "@/app/components/products/SetQuantity";
import SetColor from "@/app/components/products/SetColor";
import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";



interface ProductDetailsProps {
    product: any;
}


export type CardProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    quantity: number;
    price: number;
    selectedImg: SelectedImgType;
};


export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};



const Horizontal = () => {
    return (
        <hr className="w-[30%] my-2" />
    )
}


const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    // useCart Hook
    const { handleAddProductToCart, cartProducts } = useCart();

    const [isProductInCart, setIsProductInCart] = useState(false);

    const [cardProduct, setCardProduct] = useState<CardProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        quantity: 1,
        price: product.price,
        selectedImg: { ...product.images[0] },
    })


    const router = useRouter();


    useEffect(() => {

        setIsProductInCart(false);

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id);

            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }

    }, [cartProducts])


    const productRating = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;


    // handleColorSelect Func
    const handleColorSelect = useCallback((value: SelectedImgType) => {

        setCardProduct(prev => {
            return { ...prev, selectedImg: value }
        })

    }, [cardProduct.selectedImg])


    // handleQtyIncrease Func
    const handleQtyIncrease = useCallback(() => {

        if (cardProduct.quantity === 99) {
            return;
        };

        setCardProduct((prev) => {
            return { ...prev, quantity: prev.quantity + 1 };
        });

    }, [cardProduct]);


    // handleQtyDecrease Func
    const handleQtyDecrease = useCallback(() => {

        if (cardProduct.quantity === 1) {
            return;
        };

        setCardProduct((prev) => {
            return { ...prev, quantity: prev.quantity - 1 };
        });
    }, [cardProduct])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <ProductImage
                cardProduct={cardProduct}
                product={product}
                handleColorSelect={handleColorSelect}
            />

            <div className="flex flex-col gap-1 text-slate-500 text-sm">

                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

                <Horizontal />
                <div className="text-justify leading-[1.7rem]">
                    {product.description}
                </div>
                <Horizontal />

                <div className="">
                    <span className="font-semibold">دسته بندی : </span>
                    <span>{product.category}</span>
                </div>

                <div className="">
                    <span className="font-semibold">برند : </span>
                    <span>{product.brand}</span>
                </div>

                <div className="flex items-center gap-1">
                    <span className="font-semibold">وضعیت : </span>
                    <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                        {product.inStock ? 'موجود' : 'ناموجود'}
                    </div>
                </div>

                <Horizontal />
                {isProductInCart
                    ?
                    <>
                        <p className="mb-2 text-slate-500 flex items-center gap-1">
                            <MdCheckCircle size={20} className="text-teal-400" />
                            <span> کالا به سد خرید شما اضافه شد</span>
                        </p>

                        <div className="max-w-[18.75rem]">
                            <Button label="مشاهده سبد خرید" outline onClick={() => { router.push('/cart') }} />
                        </div>
                    </>
                    :
                    <>

                        <SetColor
                            cardProduct={cardProduct}
                            images={product.images}
                            handleColorSelect={handleColorSelect}
                        />

                        {product.inStock ? (
                            <>
                                <Horizontal />
                                <SetQuantity
                                    cardProduct={cardProduct}
                                    handleQtyIncrease={handleQtyIncrease}
                                    handleQtyDecrease={handleQtyDecrease}
                                />

                                <Horizontal />
                                <div className="max-w-[18.75rem]">
                                    <Button
                                        label="افزودن به سبد"
                                        onClick={() => handleAddProductToCart(cardProduct)}
                                    />
                                </div>
                            </>
                        )
                            :
                            <>
                                <Horizontal />
                                <div className="max-w-[18.75rem]">
                                    <div className="rounded-md bg-rose-500 text-white px-2 py-3 text-[1.1rem] transition w-full border-slate-700 flex items-center justify-center gap-2">ناموجود</div>
                                </div>
                            </>
                        }
                    </>
                }

            </div>

        </div >
    )
}

export default ProductDetails