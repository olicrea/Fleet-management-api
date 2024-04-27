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
exports.listaTaxis = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
console.log('PrismaClient initialized successfully');
// https://www.prisma.io/docs/orm/prisma-client/queries/crud
const listaTaxis = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let ultimoId = Number(req.query.ultimoId); // Pasar el último ID como un parámetro de consulta
        if (!(ultimoId)) {
            ultimoId = 7249; // Establecer un valor predeterminado de 7249 si ultimoId no está presente
        }
        console.log('ultimoId:', ultimoId);
        const taxis = yield prisma.taxis.findMany({
            take: 10,
            cursor: {
                id: ultimoId,
            },
            orderBy: {
                id: 'asc',
            },
        });
        resp.status(200).json(taxis);
    }
    catch (error) {
        return resp.status(500).send("Error getting taxis");
    }
    finally {
        // Desconexión de Prisma
        yield prisma.$disconnect();
    }
});
exports.listaTaxis = listaTaxis;
// npx prisma db pull
// npx prisma generate 
