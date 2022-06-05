const express = require("express");
const router = express.Router();
const Anime = require("../model/Anime");
const animeController = require("../controllers/animeController");

router.get("/", animeController.getAllAnimes);
router.post("/", animeController.addAnime);
router.get("/:id", animeController.getById);
router.put("/:id", animeController.updateAnime);
router.delete("/:id", animeController.deleteAnime);

module.exports = router;
