const express = require('express');
const router = express.Router()
const {
    produsenA,
    produsenB,
    produsenC,
    produsenD,
    produsenE
} = require('../controllers/produsenController')

router.get("/",produsenA)
router.get("/:id",produsenB)
router.post('/', produsenC)
router.delete('/:id', produsenD)
router.patch('/:id', produsenE)

module.exports = router