import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const browse = async (req, res) => {
  try {
    const players = await prisma.player.findMany();
    res.send(players);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const read = async (req, res) => {
  const playerId = parseInt(req.params.id);

  try {
    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });

    if (!player) {
      res.send("player doesn't exist").status(404);
    } else {
      res.send(player);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const edit = async (req, res) => {
  const playerId = parseInt(req.params.id);
  const newData = req.body;

  try {
    const updatedPlayer = await prisma.player.update({
      where: { id: playerId },
      data: newData,
    });

    if (!updatedPlayer) {
      res.send("player not found").status(404);
    } else {
      res.send(updatedPlayer).status(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  try {
    const postPLayer = await prisma.player.create({
      data: { name: req.body.name },
    });

    if (!postPlayer) {
      res.send("player not added").status(404);
    } else {
      res.send(postPlayer).status(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const destroy = async (req, res) => {
  const playerId = parseInt(req.params.id);

  try {
    const deletePlayer = await prisma.player.delete({
      where: { id: playerId },
    });
    // TODO check message with this status
    if (!deletePlayer) {
      res.status(404).send("Player not exist");
    } else {
      // TODO check message with this status
      res.status(204).send("player deleted");
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
