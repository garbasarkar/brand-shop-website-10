import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const loadedData = useLoaderData();
    const para = useParams();
    console.log(loadedData, para)
    return (
        <div>
            <h1>Single Data Details!</h1>
        </div>
    );
};

export default ProductDetails;