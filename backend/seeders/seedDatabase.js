import db from '../config/db.js';

// Insert initial data into categories
const seedCategories = `
    INSERT INTO categories (name) VALUES 
    ('Living'), 
    ('Kitchen'), 
    ('Dining'), 
    ('Bedroom'), 
    ('Garden'), 
    ('Office')
`;

db.query(seedCategories, (err, result) => {
    if (err) {
        console.error('Error seeding categories table:', err);
    } else {
        console.log('Categories table seeded successfully.');
    }
});

// Insert initial data into brands
const seedBrands = `
    INSERT INTO brands (name, image) VALUES 
    ('Alder', 'path_to_alder_image.jpg'), 
    ('Paradise', 'path_to_paradise_image.jpg'), 
    ('Jas', 'path_to_jas_image.jpg')
`;

db.query(seedBrands, (err, result) => {
    if (err) {
        console.error('Error seeding brands table:', err);
    } else {
        console.log('Brands table seeded successfully.');
    }
});

// Insert data into brand_categories to establish relationships
const seedBrandCategories = `
    INSERT INTO brand_categories (brand_id, category_id) VALUES 
    ((SELECT id FROM brands WHERE name = 'Alder'), (SELECT id FROM categories WHERE name = 'Living')), 
    ((SELECT id FROM brands WHERE name = 'Alder'), (SELECT id FROM categories WHERE name = 'Kitchen')),
    ((SELECT id FROM brands WHERE name = 'Paradise'), (SELECT id FROM categories WHERE name = 'Living')), 
    ((SELECT id FROM brands WHERE name = 'Paradise'), (SELECT id FROM categories WHERE name = 'Kitchen')), 
    ((SELECT id FROM brands WHERE name = 'Paradise'), (SELECT id FROM categories WHERE name = 'Dining')),
    ((SELECT id FROM brands WHERE name = 'Jas'), (SELECT id FROM categories WHERE name = 'Bedroom'))
`;

db.query(seedBrandCategories, (err, result) => {
    if (err) {
        console.error('Error seeding brand_categories table:', err);
    } else {
        console.log('brand_categories table seeded successfully.');
    }
});

// Insert initial data into products
const seedProducts = `
    INSERT INTO products (name, dimension, materials, description, price, category_id, brand_id, image) VALUES 
    ('Living Room Sofa', '200x90x100 cm', 'Leather, Wood', 'Comfortable leather sofa', 999.99, 
        (SELECT id FROM categories WHERE name = 'Living'), 
        (SELECT id FROM brands WHERE name = 'Alder'), 
        'path_to_sofa_image.jpg'),
    ('Kitchen Table', '150x75x75 cm', 'Wood, Metal', 'Modern kitchen table', 299.99, 
        (SELECT id FROM categories WHERE name = 'Kitchen'), 
        (SELECT id FROM brands WHERE name = 'Paradise'), 
        'path_to_table_image.jpg'),
    ('Dining Chair', '45x45x90 cm', 'Wood', 'Elegant dining chair', 79.99, 
        (SELECT id FROM categories WHERE name = 'Dining'), 
        (SELECT id FROM brands WHERE name = 'Paradise'), 
        'path_to_chair_image.jpg')
`;

db.query(seedProducts, (err, result) => {
    if (err) {
        console.error('Error seeding products table:', err);
    } else {
        console.log('Products table seeded successfully.');
    }
});

db.end();
