import db from '../config/db.js';

export const getCategories = (req, res) => {
    const sql = "SELECT * FROM categories";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};