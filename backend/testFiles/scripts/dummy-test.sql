CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100) NOT NULL,
    published_year YEAR,
    genre ENUM('Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography', 'Other'),
    price DECIMAL(6,2),
    stock INT,
    added_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);