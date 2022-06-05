const Anime = require("../model/Anime");

const getAllAnimes = async (req, res, next) => {
  let animes;
  try {
    animes = await Anime.find();
  } catch (err) {
    console.log(err);
  }

  if (!animes) {
    return res.status(404).json({ message: "No Products Found" });
  }

  return res.status(200).json({ animes });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let anime;
  try {
    anime = await Anime.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!anime) {
    return res.status(404).json({ message: "No Anime Found" });
  }

  return res.status(200).json({ anime });
};

const addAnime = async (req, res, next) => {
  const { name, author, description, price, available, image } = req.body;
  let anime;
  try {
    anime = new Anime({
      name,
      author,
      description,
      price,
      available,
      image,
    });

    await anime.save();
  } catch (err) {
    console.log(err);
  }
  if (!anime) {
    return res.status(500).json({ message: "Unable to add" });
  }

  return res.status(201).json({ anime });
};

const updateAnime = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let anime;
  try {
    anime = await Anime.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    anime = await anime.save();
  } catch (err) {
    console.log(err);
  }
  if (!anime) {
    return res.status(500).json({ message: "Unable to update by this ID" });
  }

  return res.status(200).json({ anime });
};

const deleteAnime = async (req, res, next) => {
  const id = req.params.id;
  const ID = id.trim();
  let anime;

  try {
    anime = await Anime.findByIdAndRemove(ID);
  } catch (err) {
    console.log(err);
  }
  if (!anime) {
    return res
      .status(404)
      .json({ message: "Unable to Delete anime  by this ID" });
  }

  return res.status(200).json({ message: "Anime succesfully Deleted" });
};

exports.getAllAnimes = getAllAnimes;
exports.addAnime = addAnime;
exports.getById = getById;
exports.updateAnime = updateAnime;
exports.deleteAnime = deleteAnime;
