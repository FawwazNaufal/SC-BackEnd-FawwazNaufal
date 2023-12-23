const express = require('express'); // import modul express
const router = express.Router() // buat router baru dari express
const {
    produkA, 
    produkB,
    produkC,
    produkD,
    produkE
} = require('../controllers/produkController') // import fungsi controller produk

router.get("/",produkA) // endpoint GET untuk menampilkan semua produk
router.get("/:id",produkB) // endpoint GET untuk menampilkan produk berdasarkan id
router.post('/', produkC) // endpoint POST untuk membuat produk baru 
router.delete('/:id', produkD) // endpoint DELETE untuk menghapus produk berdasarkan id
router.patch('/:id', produkE) // endpoint PATCH untuk memperbarui produk berdasarkan id

module.exports = router // export router