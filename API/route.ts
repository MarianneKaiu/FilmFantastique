import express, { Router, Request, Response } from "express";
import { Movie } from "./movies";
import { MOVIES, MOVIES as movies } from "./mock-movie";

const router: Router = express.Router();

router.get("/movies", (req, res) => {
    const movies: Movie[] = MOVIES;
    return res.send(movies);
});

router.get("/movies/:id", function (req: Request, res: Response) {
    const id: string = req.params.id;
    const movie: Movie | undefined = movies.find((movie) => movie.id == id);
    if (movie) res.json(movie);
});
router.get("/movies/delete/:id", function (req: Request, res: Response) {
    const id: string = req.params.id;
    const index: number = movies.findIndex((movie) => movie.id === id);

    if (index !== -1) {
        const tempId = id;
        const message = `Le film portant l'id ${tempId} à bien été supprimé`;
        movies.splice(index, 1);
        res.json(message);
    } else {
        const message = `Il n'y a pas de film portant l'id ${id}`;
        res.status(404).json(message);
    }
});

export default router;
