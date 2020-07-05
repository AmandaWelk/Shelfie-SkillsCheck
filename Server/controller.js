module.exports = {
    create: (req, res) => {
        const db = req.app.get('db');
        const {image_url, name, price} = req.body;
        const {id} = req.params;

        db.create_product([image_url, name, price]) 
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    getAll: (req, res) => {
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    update: (req, res) => {
        const db = req.app.get('db');

        db.update_products()
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    },

    delete: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;

        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: "Error. Try Again!"});
            console.log(err)
        });
    }
}