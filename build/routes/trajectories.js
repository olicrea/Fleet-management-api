"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajectoriesRouter = (0, express_1.Router)();
trajectoriesRouter.get('/trajectories', (req, res) => {
    // Aquí iría la lógica para obtener y enviar la lista de trayectorias
    res.json({ message: 'Lista de trayectorias' });
});
exports.default = trajectoriesRouter;
