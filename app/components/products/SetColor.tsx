'use client'

// ** Types
import { CardProductType } from "@/app/product/[productId]/ProductDetails"
import { SelectedImgType } from "@/app/product/[productId]/ProductDetails"


interface SetColorProps {
    images: SelectedImgType[],
    cardProduct: CardProductType,
    handleColorSelect: (value: SelectedImgType) => void
}


const SetColor: React.FC<SetColorProps> = ({ images, cardProduct, handleColorSelect }) => {
    return (
        <div>
            <div className="flex items-center gap-4">

                <span className="font-semibold">رنگ :</span>

                <div className="flex gap-1">
                    {images.map(image => (
                        <div
                            key={image.color}
                            className={`w-7 h-7 rounded-full border-teal-300 flex items-center justify-center ${cardProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none'}`}
                            onClick={() => handleColorSelect(image)}
                        >

                            <div style={{ background: image.colorCode }} className="w-5 h-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer">
                                
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SetColor