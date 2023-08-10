import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

const checkNameMiddleware: RequestHandler = async (req, res, next) => {
  const { name } = req.body;

  try {
    const player = await prisma.player.findUnique({
      where: {
        name,
      },
    });

    if (player) {
      res.status(403).json({ error: "Le nom d'utilisateur existe déjà" });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
  }
};

export { checkNameMiddleware };
