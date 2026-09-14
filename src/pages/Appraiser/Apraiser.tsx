import { useEffect, useState } from "react";

function Appraiser() {
    const [goldPrice, setGoldPrice] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("/api/gold-price")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch gold price");
                }

                return response.json();
            })
            .then((data) => {
                setGoldPrice(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>loading</p>;
    }

    return <p>{`${goldPrice}`}</p>;
}

export default Appraiser;