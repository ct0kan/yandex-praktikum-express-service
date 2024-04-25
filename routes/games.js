const { sendAllGamesController, addGameController, deleteGameController } = require("../controllers/games");
const getAllGames = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", getAllGames, sendAllGamesController);
gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.delete("/games/:id",  getAllGames, deleteGameController);

module.exports = gamesRouter;