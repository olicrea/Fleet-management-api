"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajectories_1 = require("../controller/trajectories");
const trajectoriesRouter = (0, express_1.Router)();
/**
 * @openapi
 * /trajectories/{id}/{day}:
 *   get:
 *     tags:
 *       - Trajectories
 *     summary: Listar ubicaciones de un taxi
 *     description: Devuelve lista de ubicaciones de un taxi dado el id y una fecha, con paginación
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Id del taxi para el que se buscan ubicaciones
 *         required: true
 *         schema:
 *           type: integer
 *       - name: day
 *         in: path
 *         description: Fecha específica para la búsqueda de ubicaciones en formato YYYY-MM-DD
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - name: take
 *         in: query
 *         description: Número máximo de trayectorias a devolver
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: skip
 *         in: query
 *         description: Número de trayectorias a omitir por paginación
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
 *                 $ref: '#/components/schemas/Trajectories'
 *       '500':
 *         description: Error
 */
trajectoriesRouter.get('/trajectories/:id/:day', trajectories_1.historialTaxi);
/**
 * @openapi
 * /lastLocation:
 *   get:
 *     tags:
 *       - Trajectories
 *     summary: Listar las últimas ubicaciones de todos los taxis
 *     description: Devuelve lista de las últimas ubicaciones de todos los taxis, con paginación
 *     parameters:
 *       - name: take
 *         in: query
 *         description: Número máximo de trayectorias a devolver
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *       - name: skip
 *         in: query
 *         description: Número de trayectorias a omitir por paginación
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
 *                 $ref: '#/components/schemas/Trajectories'
 *       '500':
 *         description: Error
 */
trajectoriesRouter.get('/lastLocation', trajectories_1.lastLocation);
exports.default = trajectoriesRouter;
