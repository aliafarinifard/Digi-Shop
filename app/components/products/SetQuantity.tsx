'use client'

import { CardProductType } from "@/app/product/[productId]/ProductDetails"



interface SetQtyProps {
    cardCounter?: boolean,
    cardProduct: CardProductType,
    handleQtyIncrease: () => void,
    handleQtyDecrease: () => void,
    custom?: string;
}


const btnStyles = "border-[1.2px] border-slate-300 px-2 rounded"


const SetQuantity: React.FC<SetQtyProps> = ({
    cardCounter,
    cardProduct,
    handleQtyIncrease,
    handleQtyDecrease,
    custom
}) => {
    return (
        <div className="flex items-center gap-8">

            {cardCounter ? null : <div className="font-semibold">تعداد :</div>}

            <div className={`flex items-center gap-4 text-base ${custom ? custom : ''}`}>
                <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
                <div>{cardProduct.quantity}</div>
                <button onClick={handleQtyDecrease} className={`${btnStyles} px-[11px] py-[0.5px]`}>-</button>
            </div>

        </div>
    )
}

export default SetQuantity