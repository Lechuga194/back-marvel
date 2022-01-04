const getHeros = (req, res, knex) => {
    return knex.select('*').from('hero')
        .then(data => res.status(200).json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json('An error occurred while getting the hero list')
        })
}

const getHero = (req, res, knex) => {
    return knex.select('*').from('hero').where('id', req.params.id)
    .then(data => {
        if(data.length > 0)
            res.status(200).json(data)
        else
            res.status(400).json('Hero not found')    
    })    
    .catch(err => {
        console.log(err)
        res.status(500).json('An error occurred while getting the hero')
    })
}

const createHero = (req, res, knex) => {
    const { name, alias, image, details} = req.body
    knex('hero')
    .returning('*')
    .insert({
        name: name,
        alias: alias,
        image: image,
        details: details
    }).then(data => {
        res.json(data[0])
    }).catch(err => {
        console.log(err)
        res.status(500).json('An error occurred while adding the hero')
    })
}

const updateHero = (req, res, knex) => {
    const { id, name, alias, image, details} = req.body
    knex('hero').update({
        name: name,
        alias: alias,
        image: image,
        details: details
    }).where("id", id)
    .then(data => res.status(200).json(data))
    .catch(err => {
        console.log(err)
        res.status(500).json('An error occurred while updating the hero')
    })
}

const deleteHero = (req, res, knex) => {
    const id = req.params.id
    knex('hero')
    .where('id', id)
    .del()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json('An error occurred while deleting the hero')
    })
}

module.exports = {
    getHeros,
    getHero,
    createHero,
    updateHero,
    deleteHero,
}