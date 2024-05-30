import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import brandRoutes from './routes/brandRoutes.js';
import productRoutes from './routes/productRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hey, this is the backend");
});

app.use('/categories', categoryRoutes);
app.use('/brands', brandRoutes);
app.use('/products', productRoutes);

app.listen(8080, () => {
    console.log("Connected to backend");
});