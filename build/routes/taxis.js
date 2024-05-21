"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taxis_1 = require("../controller/taxis");
const router = (0, express_1.Router)();
/**
 * @openapi
 * /taxis:
 *   get:
 *     tags:
 *       - Taxis
 *     summary: Listar todos los taxis con paginación
 *     description: Devuelve una lista paginada de taxis, cada uno con su ID y placa.
 *     parameters:
 *       - name: take
 *         in: query
 *         description: Número máximo de taxis a devolver
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: skip
 *         in: query
 *         description: Número de taxis a omitir por paginación
 *         required: false
 *         schema:
 *           type: integer
 *           default: 0
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Taxis'
 *       '500':
 *         description: Error
 */
router.get('/taxis', taxis_1.listTaxis);
exports.default = router;
