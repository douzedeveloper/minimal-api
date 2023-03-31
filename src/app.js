const express = require('express');
const morgan = require('morgan');

// Routes
import productRoutes from "./routes/product.routes";

const app = express();

// Settings
app.set("port", 3000);

// Middlewares
app.use(morgan('combined'));

// Routes
app.use("/api/products", productRoutes);

export default app;