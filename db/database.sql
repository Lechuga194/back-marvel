CREATE TABLE heroe (
    id SERIAL NOT NULL PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    alias VARCHAR(150) NOT NULL,
    imagen VARCHAR(1000),
    descripcion TEXT
);

INSERT INTO heroe VALUES (
    DEFAULT,
    'Steve Rogers',
    'Captain America',
    'https://static.vix.com/es/sites/default/files/styles/4x3/public/btg/cine.batanga.com/files/Capitan-America-El-Soldado-de-Invierno-y-la-misma-pelicula-Critica.jpg',
    'Captain America is a superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics.'
)