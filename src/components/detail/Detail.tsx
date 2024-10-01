import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface ProductDetail {
    id: number;
    images: string[];
    title: string;
    description: string;
    price: number;
}

const API_URL: string = "https://dummyjson.com/products/";

const Detail: FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const back = () => {
        navigate(-1);
    };

    return (
        <div className="container text-black">
            <div className="max-w-3xl mx-auto">
                <img className="w-full h-[200px] object-contain " src={product.images[0]} alt={product.title} />
                <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                <p className="text-xl mb-4">Price: {product.price} $</p>
                <p className="mb-6">{product.description}</p>
                <button onClick={back} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">Back</button>
            </div>
        </div>
    );
};

export default Detail;

