"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_1 = require("../controller/taxis");
const router = (0, express_1.Router)();
router.get('/taxis', taxis_1.listTaxis); // /:uid req.params En esta parte se ve la diferencia entre query y params
// http://localhost:3001/taxis?ultimoId=7262
exports.default = router;
