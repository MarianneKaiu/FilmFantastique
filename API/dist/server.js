"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route"));
const port = 3000;
const app = (0, express_1.default)();
app.use("/api", route_1.default);
app.get("/", (req, res) => {
    res.send("Hello El Kaiù, ton serveur fonctionne");
});
app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});
