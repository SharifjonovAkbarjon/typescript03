import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Products {
    id: number;
    images: string[];
    title: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Product: FC = () => {
    const [data, setData] = useState<Products[] | null>(null);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((res) => setData(res.data.products))
            .catch((res) => console.log(res));
    }, []);

    let productsItem: JSX.Element[] | undefined = data?.map((product: Products): JSX.Element => (
<div key={product.id} className="flex flex-col items-center mt-[40px]  p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300">
    <Link to={`/product/${product.id}`}>
        <img className="w-[150px] h-[150px] object-cover rounded-md mb-4" src={product.images[0]} alt={product.title} />
    </Link>
    <h2 className="text-xl font-semibold mb-2 text-center">{product.title}</h2>
    <h3 className="text-gray-300 text-lg font-bold">{product.price} $</h3>
</div>

    ));

    return (
        <div className="container  flex-wrap gap-[20px] grid grid-cols-4">
            {productsItem}
        </div>
    );
};

export default Product;
