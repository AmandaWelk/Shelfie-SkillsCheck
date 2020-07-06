module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const {image_url, name, price} = req.body;

        db.create_product([image_url, name, price]) 
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    getOne: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.get_product([id])
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
        })
    },

    update: (req, res) => {
        const db = req.app.get('db');
        const {image_url, name, price} = req.body;
        const {id} = req.params;

        db.update_products([id, image_url, name, price])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product([id])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    }
}