-- use database: react_gallery

-- create table
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	path varchar(255),
    description varchar(500),
    likes int
);

-- insert current data
INSERT INTO gallery (path, description, likes)
VALUES ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park', 0),
('images/beer.jpg', 'Photo of Spudz McKenzie', 7),
('images/coffee.jpg', 'Photo of a World War 1 cavalry coffee samovar', 3),
('images/hammer.jpg', 'Photo of an antique sledge hammer', 4),
('images/stop_sign.jpg', 'Photo of an antique school bus stop sign', 0),
('images/wheels.jpg', 'Photo of wagon wheels', 1);
