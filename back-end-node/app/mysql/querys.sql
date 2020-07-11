-------------------Criar DATABASES----------------
CREATE DATABASE tccgenerico;

-------------------Selecionar DATABASES-----------
USE tccgenerico;

-------------------Criar TABELAS------------------
CREATE TABLE users(
    userId INT NOT NULL AUTO_INCREMENT,
    userName char(20) NOT NULL,
    userPassword char(20) NOT NULL,
    PRIMARY KEY (userId)
);

-------------------Select TABELAS-----------------
SELECT * FROM users;

-------------------Iserir na TABELA usuarios admin-
INSERT INTO users(userName, userPassword)
VALUES ('admin', '123');