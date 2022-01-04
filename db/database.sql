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

INSERT INTO heroe VALUES (
    DEFAULT,
    'Robert Bruce Banner',
    'Hulk',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hulk_%282540708438%29.jpg/1024px-Hulk_%282540708438%29.jpg',
    'The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962). In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist. The two exist as independent dissociative personalities, and resent each other.'
)

INSERT INTO heroe VALUES (
    DEFAULT,
    'Anthony Edward Stark',
    'Iron Man',
    'https://as.com/betech/imagenes/2017/11/09/portada/1510236468_301942_1510236537_noticia_normal.jpg',
    'Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.'
)

INSERT INTO heroe VALUES (
    DEFAULT,
    'Peter Parker',
    'Spider-Man',
    'https://www.cinemascomics.com/wp-content/uploads/2020/10/mentores-spider-man.jpg',
    'Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. '
)