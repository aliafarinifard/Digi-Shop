'use client'

import { Product } from "@prisma/client"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { formatPrice } from "@/utils/formatPrice";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { MdCached, MdClose, MdDelete, MdDone, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";


interface ManageProductsClientProps {
    products: Product[];
}


const ManageProductsClient: React.FC<ManageProductsClientProps> = ({ products }) => {

    const router = useRouter();
    const storage = getStorage(firebaseApp);

    const fontFamily = '__className_f0d1a5';

    let rows: any = [];

    if (products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: formatPrice(product.price),
                category: product.category,
                brand: product.brand,
                inStock: product.inStock,
                images: product.images
            }
        })
    };


    const columns: GridColDef[] = [
        {
            field: 'id', headerName: 'ID', width: 220, renderCell: (params) => {
                return (
                    <div className={fontFamily}>{params.row.id}</div>
                )
            }
        },
        {
            field: 'name', headerName: 'نام', width: 220, renderCell: (params) => {
                return (
                    <div className={fontFamily}>{params.row.name}</div>
                );
            },
        },
        {
            field: 'price', headerName: 'قیمت', width: 100, renderCell: (params) => {
                return (
                    <div className={`font-bold text-slate-800 ${fontFamily}`}>{params.row.price}</div>
                );
            },
        },
        {
            field: 'category', headerName: 'دسته بندی', width: 100, renderCell: (params) => {
                return (
                    <div className={fontFamily}>{params.row.category}</div>
                )
            }
        },
        {
            field: 'brand', headerName: 'برند', width: 100, renderCell: (params) => {
                return (
                    <div className={fontFamily}>{params.row.brand}</div>
                );
            },
        },
        {
            field: 'inStock', headerName: 'وضعیت', width: 120, renderCell: (params) => {
                return (
                    <div>
                        {params.row.inStock === true ?
                            <Status
                                text="موجود"
                                icon={MdDone}
                                bg="bg-teal-200"
                                color="text-teal-700"
                            />
                            :
                            <Status
                                text="ناموجود"
                                icon={MdClose}
                                bg="bg-rose-200"
                                color="text-rose-700"
                            />
                        }
                    </div>
                );
            },
        },
        {
            field: 'action', headerName: 'عملیات', width: 200, renderCell: (params) => {
                return (
                    <div className="flex justify-between gap-4 w-full">
                        <ActionBtn icon={MdCached} onClick={() => handleToggleStock(params.row.id, params.row.inStock)} />
                        <ActionBtn icon={MdDelete} onClick={() => handleDelete(params.row.id, params.row.images)} />
                        <ActionBtn icon={MdRemoveRedEye} onClick={() => {
                            router.push(`/product/${params.row.id}`)
                        }} />
                    </div>
                );
            },
        },
    ];


    // Toggle Product Func
    const handleToggleStock = useCallback((id: string, inStock: boolean) => {
        axios.put('/api/product', {
            id,
            inStock: !inStock
        }).then((res) => {
            toast.success('وضعیت کالا تغییر کرد');
            router.refresh();
        }).catch((err) => {
            toast.error('ناموفق، خطایی رخ داده');
            console.log(err);
        });
    }, []);


    // Delete Product Func
    const handleDelete = useCallback(async (id: string, images: any[]) => {
        toast('درحال حذف، لطفا صبر کنید');

        const handleImageDelete = async () => {
            try {

                for (const item of images) {
                    if (item.image) {
                        const imageRef = ref(storage, item.image);
                        await deleteObject(imageRef);
                        console.log('image deleted', item.image)
                    };
                };

            } catch (error) {
                console.log('Deleting images error', error);
            };
        };

        await handleImageDelete();


        axios.delete(`/api/product/${id}`).then((res) => {
            toast.success('کالا حذف شد');
            router.refresh();
        }).catch((err) => {
            toast.error('ناموفق، خطایی رخ داده')
            console.log(err)
        });

    }, []);


    return (
        <div className="max-w-[1150px] m-auto text-xl" dir="ltr">
            <div className="mb-4 mt-8">
                <Heading title="مدیریت کالاها" center />
            </div>

            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 9 },
                        },
                    }}
                    pageSizeOptions={[9, 20]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    )
}

export default ManageProductsClient