CREATE TABLE Filmes (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  plataforma VARCHAR(255) NOT NULL,
  genero VARCHAR(255) NOT NULL,
  status VARCHAR(255) NOT NULL,
  nota FLOAT, 
  resumo TEXT 
);
