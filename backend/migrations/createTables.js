import mysql from 'mysql';
import db from '../config/db.js';

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        phoneNumber VARCHAR(15) NOT NULL,
        city VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        province VARCHAR(255) NOT NULL,
        country VARCHAR(255) NOT NULL DEFAULT 'Nepal',
        gender ENUM('male', 'female', 'other') NOT NULL,
        isAdmin BOOLEAN DEFAULT FALSE,
        image VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

db.query(createUsersTable, (err, result) => {
    if (err) throw err;
    console.log("Users table created or already exists.");
});

// Create categories table
const createCategoriesTable = `
    CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    )
`;

db.query(createCategoriesTable, (err, result) => {
    if (err) {
        console.error('Error creating categories table:', err);
    } else {
        console.log('Categories table created or already exists.');
    }
});

// Create brands table
const createBrandsTable = `
    CREATE TABLE IF NOT EXISTS brands (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255)
    )
`;

db.query(createBrandsTable, (err, result) => {
    if (err) {
        console.error('Error creating brands table:', err);
    } else {
        console.log('Brands table created or already exists.');
    }
});

// Create brand_categories join table
const createBrandCategoriesTable = `
    CREATE TABLE IF NOT EXISTS brand_categories (
        brand_id INT,
        category_id INT,
        PRIMARY KEY (brand_id, category_id),
        FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE CASCADE,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
    )
`;

db.query(createBrandCategoriesTable, (err, result) => {
    if (err) {
        console.error('Error creating brand_categories table:', err);
    } else {
        console.log('brand_categories table created or already exists.');
    }
});

// Create products table
const createProductsTable = `
    CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        dimension VARCHAR(255),
        materials VARCHAR(255),
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        category_id INT,
        brand_id INT,
        image VARCHAR(255),
        FOREIGN KEY (category_id) REFERENCES categories(id),
        FOREIGN KEY (brand_id) REFERENCES brands(id)
    )
`;

db.query(createProductsTable, (err, result) => {
    if (err) {
        console.error('Error creating products table:', err);
    } else {
        console.log('Products table created or already exists.');
    }
});

db.end();
