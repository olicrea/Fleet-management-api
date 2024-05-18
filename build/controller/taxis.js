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
const listTaxis = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const take = req.query.take ? parseInt(req.query.take) : 10;
        const skip = req.query.skip ? parseInt(req.query.skip) : 0;
        const taxis = yield prisma.taxis.findMany({
            take,
            skip,
            select: {
                id: true,
                plate: true,
            },
            orderBy: {
                id: 'asc',
            },
        });
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
