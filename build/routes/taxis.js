"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_1 = require("../controller/taxis");
const router = (0, express_1.Router)();
router.get('/taxis', taxis_1.listaTaxis); // /:uid req.params En esta parte se ve la diferencia entre query y params
exports.default = router;
