import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function checkNameMiddleware(req, res, next) {
  const { name } = req.body;

  try {
    const player = await prisma.player.findUnique({
      where: {
        name,
      },
    });

    if (player) {
      res.status(403).json({ error: "Le nom d'utilisateur existe déjà" });
    }

    next();
  } catch (error) {
    throw new Error(error);
  }
}

export { checkNameMiddleware };
