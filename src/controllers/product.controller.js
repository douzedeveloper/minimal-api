import { getConnection } from "./../database/database";

const getProducts = async (req, res) => {
    try {
        res.send("List of Products");
        const connection = await getConnection();
        const result = await connection.query("SELECT id, title, description, image, price FROM product");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProduct = async (req, res) => {

    try {
        const { title, price, description, image } = req.body;

        if (title === undefined || price === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const product = { title, description, image, price };
        const connection = await getConnection();
        await connection.query("INSERT INTO product SET ?", product);
        res.json({ message: "Product added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};


export const methods = {
    getProducts,
    addProduct
};