export const revalidate = 0;

// ** Components
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import getProducts from "@/actions/getProducts";
import { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";
import Slides from "./components/slides/Slides";


interface HomeProps {
    searchParams: IProductParams;
}


export default async function Home({ searchParams }: HomeProps) {

    const products = await getProducts(searchParams);

    if (products.length === 0) {
        return (
            <NullData title='هیچ محصولی یافت نشد...' />
        )
    };

    function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };

        return array;
    };

    const shuffledProducts = shuffleArray(products);

    return (
        <div>
            <div dir="ltr" className="pb-1">
                <Slides />
            </div>

            <div className="pt-2 px-4 xl:px-[6.8rem] md:px-10">
                <HomeBanner />
            </div>
            <div className="p-8">
                <Container>
                    <div className="grid grid-cols-2 max-[400px]:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                        {shuffledProducts.map((product: any) => (
                            <ProductCard data={product} key={product.id} />
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    )
}
