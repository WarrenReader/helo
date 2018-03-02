CREATE TABLE IF NOT EXISTS users
(id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
gender TEXT, 
hair_color TEXT,
eye_color TEXT,
hobby TEXT,
birth_day INTEGER,
birth_month TEXT,
birth_year INTEGER
)