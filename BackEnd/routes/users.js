import express from 'express';
const router = express.Router();


// get all user
router.get('/', (req, res) => {
    res.send("hey");
})

// get one user
router.get('/:id', (req, res) => {
    res.send(req.params.id);
})

// create a user
router.post('/', (req, res) => {

})

// update user info
router.patch('/:id', (req, res) => {

})

// delete user
router.delete('/:id', (req, res) => {

})




export default router;              
