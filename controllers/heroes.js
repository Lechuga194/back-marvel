const { default: knex } = require("knex");

const getHeroes = (req, res, knex) => {
    return knex.select('*').from('heroe')
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json('Ocurrio un error al recuperar heroes')
        })
}

const createHero = (req, res, knex) => {
    const { name, alias, image, details} = req.body
    knex('heroe')
    .returning('*')
    .insert({
        nombre: name,
        alias: alias,
        imagen: image,
        descripcion: details
    }).then(hero => {
        res.json(hero[0])
    }).catch(err => {
        console.log(err)
        res.status(500).json('Ocurrio un error al agregar el heroe')
    })
}

const deleteHero = (req, res, knex) => {
    const id = req.params.id
    knex('heroe')
    .where('id', id)
    .del()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('Ocurrio un error al eliminar el heroe')
    })
}

module.exports = {
    getHeroes,
    createHero,
    deleteHero,
}