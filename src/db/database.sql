CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    balance NUMERIC NOT NULL
);

INSERT INTO users (id, balance) VALUES (1, 1000);