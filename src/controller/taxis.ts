import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();
console.log('PrismaClient initialized successfully');
// https://www.prisma.io/docs/orm/prisma-client/queries/crud

let lastPersistentId: number | undefined;
// "persistente" significa que el último ID consultado se almacena y conserva en la memoria de la aplicación

export const listTaxis = async (req: Request, resp: Response) => {
  try {

    if (!lastPersistentId) {
      // Buscar el primer taxi en orden ascendente en la base de datos ya que podría no haber id 0 o 1
      const firstTaxi = await prisma.taxis.findFirst({
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

    const taxis = await prisma.taxis.findMany({
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
  } catch (error) {
    console.error(error);
    return resp.status(500).send("Error getting taxis");
  } 
};

// npx prisma db pull
// npx prisma generate 