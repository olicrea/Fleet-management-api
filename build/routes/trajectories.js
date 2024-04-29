"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajectories_1 = require("../controller/trajectories");
const trajectoriesRouter = (0, express_1.Router)();
trajectoriesRouter.get('/trajectories/:id/:day', trajectories_1.historialTaxi);
trajectoriesRouter.get('/lastLocation', trajectories_1.lastLocation);
exports.default = trajectoriesRouter;
