const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Route index123')
})

module.exports = router;