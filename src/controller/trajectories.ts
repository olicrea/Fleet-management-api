import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const prisma = new PrismaClient();

export const historialTaxi = async (req: Request, resp: Response) => {
  try {
    const id = Number(req.params.id);
    const date = req.params.date as string;

    const historialTrajectories = await prisma.trajectories.findMany({
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
  } catch (error) {
    return resp.status(500).send("Error getting taxi's locations");
  } finally {
    // Desconexión de Prisma
    await prisma.$disconnect();
}};
