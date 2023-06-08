const express = require("express")
const router = express.Router()
const projectsCtrl = require("../../controllers/api/articles")

router.get('/', projectsCtrl.index)
router.get('/:id', projectsCtrl.show)

module.exports = router