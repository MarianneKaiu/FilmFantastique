import express from "express";
import router from "./route";

const port = 3000;
const app = express();

app.use("/api", router);

app.get("/", (req, res) => {
    res.send("Hello El Kaiù, ton serveur fonctionne");
});

app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
