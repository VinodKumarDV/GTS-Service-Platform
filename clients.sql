CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  industry VARCHAR(50),
  location VARCHAR(50),
  subscription_tier VARCHAR(20),
  signup_date DATE,
  is_active BOOLEAN
);

-- Clients per industry
SELECT industry, COUNT(*) AS total
FROM clients
GROUP BY industry;

-- Clients per industry
SELECT status, COUNT(*) AS total
FROM clients
GROUP BY status;

-- Monthly growth
SELECT DATE_TRUNC('month', signup_date) AS month, COUNT(*)
FROM clients
GROUP BY month;
