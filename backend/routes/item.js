const router = require('express').Router();
let Item = require('../models/items.model');

router.route('/').get((req, res) => {
    Item.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) =>{
    const description = req.body.description;
    const value = Number(req.body.value);

    const newItem = new Item({
        description, 
        value,
    });

    newItem.save()
    .then(() => res.json("Item Added!"))
    .catch (err => res.status(400).json("Error: " + err));
});

module.exports = router;