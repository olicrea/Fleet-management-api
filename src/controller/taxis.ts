import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';
import { skip } from 'node:test';

const prisma = new PrismaClient();
console.log('PrismaClient initialized successfully');
// https://www.prisma.io/docs/orm/prisma-client/queries/crud
export const listTaxis = async (req: Request, resp: Response) => { //incluyo next?
  try {
    let ultimoId = Number(req.query.ultimoId); // Pasar el último ID como un parámetro de consulta
    if (!(ultimoId)) {
      ultimoId = 7249; // Establecer un valor predeterminado de 7249 si ultimoId no está presente
    }
    console.log('ultimoId:', ultimoId);
    const taxis = await prisma.taxis.findMany({
      take: 10,
      cursor: {
        id: ultimoId,
      },
      orderBy: {
        id: 'asc',
      },
    });
    resp.status(200).json(taxis);
  } catch (error) {
    return resp.status(500).send("Error getting taxis");
  } finally {
    // Desconexión de Prisma
    await prisma.$disconnect();
  }
}

// npx prisma db pull
// npx prisma generate 