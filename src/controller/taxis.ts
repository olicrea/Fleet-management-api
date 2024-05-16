import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();
console.log('PrismaClient initialized successfully');
// https://www.prisma.io/docs/orm/prisma-client/queries/crud

export const listTaxis = async (req: Request, resp: Response) => {
  try {

    const take = req.query.take ? parseInt(req.query.take as string) : 10;
    const skip = req.query.skip ? parseInt(req.query.skip as string) : 0;

    const taxis = await prisma.taxis.findMany({
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
  } catch (error) {
    console.error(error);
    return resp.status(500).send("Error getting taxis");
  } 
};

// npx prisma db pull
// npx prisma generate 