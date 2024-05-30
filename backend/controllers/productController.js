import db from '../config/db.js';

export const getProducts = (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};