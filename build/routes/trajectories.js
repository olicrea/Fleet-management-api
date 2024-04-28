"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajectories_1 = require("../controller/trajectories");
const trajectoriesRouter = (0, express_1.Router)();
trajectoriesRouter.get('/trajectories', trajectories_1.historialTaxi);
exports.default = trajectoriesRouter;
