const getHeroes = (req, res, knex) => {
    return knex.select('*').from('heroe')
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(400).json('Ocurrio un error, intentalo más tarde')
        })
}

module.exports = {
    getHeroes,
}