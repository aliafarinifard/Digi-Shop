'use client'

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";


interface ListRatingProps {
    product: any;
}


const ListRating: React.FC<ListRatingProps> = ({ product }) => {
    return (
        <>
            <Heading title='دیدگاه کاربران' />

            <div
                className="text-sm mt-2"
            >

                {product.reviews && product.reviews.map((review: any) => (
                    <div
                        key={review.id}
                        className="max-w-[300px]"
                    >
                        <div
                            className="flex gap-2 items-center"
                        >
                            <Avatar src={review?.user.image} />

                            <div className="font-semibold">
                                {review?.user.name}
                            </div>

                            <div className="font-light">
                                {moment(review.createDate).fromNow()}
                            </div>
                        </div>

                        <Rating value={review.rating} readOnly sx={{ direction: 'ltr' }} />

                        <div
                            className="ml-2"
                        >
                            {review.comment}
                        </div>
                        <hr className="mt-4 mb-4" />
                    </div>
                ))}

            </div >
        </>
    )
}

export default ListRating