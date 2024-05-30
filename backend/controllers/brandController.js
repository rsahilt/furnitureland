import db from '../config/db.js';

export const getBrands = (req, res) => {
    const sql = "SELECT * FROM brands";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};