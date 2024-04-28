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
exports.historialTaxi = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const historialTaxi = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const date = req.params.date;
        const historialTrajectories = yield prisma.trajectories.findMany({
            where: {
                taxi_id: id,
                date: { gte: date },
            },
            orderBy: {
                date: 'asc',
            },
            select: {
                latitude: true,
                longitude: true,
                date: true,
            },
            take: 10,
            skip: 20,
        });
        resp.status(200).json(historialTrajectories);
    }
    catch (error) {
        return resp.status(500).send("Error getting taxi's locations");
    }
    finally {
        // Desconexión de Prisma
        yield prisma.$disconnect();
    }
});
exports.historialTaxi = historialTaxi;
