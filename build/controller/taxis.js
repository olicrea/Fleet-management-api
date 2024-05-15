"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTaxis = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
console.log('PrismaClient initialized successfully');
// https://www.prisma.io/docs/orm/prisma-client/queries/crud
let lastPersistentId;
// "persistente" significa que el último ID consultado se almacena y conserva en la memoria de la aplicación
const listTaxis = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!lastPersistentId) {
            // Buscar el primer taxi en orden ascendente en la base de datos ya que podría no haber id 0 o 1
            const firstTaxi = yield prisma.taxis.findFirst({
                orderBy: {
                    id: 'asc',
                },
            });
            // Si no se encuentra ningún taxi, devuelve un mensaje indicando que no hay taxis en la base de datos
            if (!firstTaxi) {
                return resp.status(404).send("No taxis found in the database.");
            }
            lastPersistentId = firstTaxi.id;
        }
        console.log('lastPersistentId:', lastPersistentId);
        const taxis = yield prisma.taxis.findMany({
            take: 10,
            skip: 1,
            cursor: { id: lastPersistentId },
            orderBy: {
                id: 'asc',
            },
        });
        if (taxis.length > 0) {
            lastPersistentId = taxis[taxis.length - 1].id;
        }
        resp.status(200).json(taxis);
    }
    catch (error) {
        console.error(error);
        return resp.status(500).send("Error getting taxis");
    }
});
exports.listTaxis = listTaxis;
// npx prisma db pull
// npx prisma generate 
