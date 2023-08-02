
-- @block
CREATE TABLE CRUD (
    id Int Primary Key AUTO_INCREMENT,
    name VARCHAR(20),
    age Int,
    bio Text
)

-- @block
DROP TABLE CRUD;

-- @block
Select * FROM CRUD;

-- @block
INSERT INTO crud VALUES(0, "phil", 55, "Hello small world")

-- @block
CREATE USER 'spillUser'@'host' IDENTIFIED WITH authentication_plugin BY 'password123';