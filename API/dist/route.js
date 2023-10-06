"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mock_movie_1 = require("./mock-movie");
const router = express_1.default.Router();
router.get("/movies", (req, res) => {
    const movies = mock_movie_1.MOVIES;
    return res.send(movies);
});
router.get("/movies/:id", function (req, res) {
    const id = req.params.id;
    const movie = mock_movie_1.MOVIES.find((movie) => movie.id == id);
    if (movie)
        res.json(movie);
});
router.get("/movies/delete/:id", function (req, res) {
    const id = req.params.id;
    const index = mock_movie_1.MOVIES.findIndex((movie) => movie.id === id);
    if (index !== -1) {
        const tempId = id;
        const message = `Le film portant l'id ${tempId} à bien été supprimé`;
        mock_movie_1.MOVIES.splice(index, 1);
        res.json(message);
    }
    else {
        const message = `Il n'y a pas de film portant l'id ${id}`;
        res.status(404).json(message);
    }
});
exports.default = router;
