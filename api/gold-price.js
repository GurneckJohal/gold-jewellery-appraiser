

async function getGoldPrice() {

    const response = await fetch(
        "",
        {
            headers: {
                Authorization: `Bearer ${process.env.METALS_API_KEY}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Metals API call failed");
    }

    return response.json();
}

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            error: "Method not allowed."
        });
    }

    try {
        const data = await getGoldPrice();
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(502).json({
            error: "Unable to fetch gold price"
        });
    }
}