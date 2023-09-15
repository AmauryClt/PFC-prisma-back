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
exports.destroy = exports.add = exports.edit = exports.read = exports.browse = void 0;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const browse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const players = yield prisma.player.findMany();
        res.send(players);
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
exports.browse = browse;
const read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playerId = parseInt(req.params.id);
    try {
        const player = yield prisma.player.findUnique({
            where: { id: playerId },
        });
        if (!player) {
            res.send("player doesn't exist").status(404);
        }
        else {
            res.send(player);
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
exports.read = read;
const edit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playerId = parseInt(req.params.id);
    const newData = req.body;
    try {
        const updatedPlayer = yield prisma.player.update({
            where: { id: playerId },
            data: newData,
        });
        if (!updatedPlayer) {
            res.send("player not found").status(404);
        }
        else {
            res.send(updatedPlayer).status(204);
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
exports.edit = edit;
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postPlayer = yield prisma.player.create({
            data: { name: req.body.name },
        });
        if (!postPlayer) {
            res.send("player not added").status(404);
        }
        else {
            res.send(postPlayer).status(204);
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
exports.add = add;
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const playerId = parseInt(req.params.id);
    try {
        const deletePlayer = yield prisma.player.delete({
            where: { id: playerId },
        });
        // TODO check message with this status
        if (!deletePlayer) {
            res.status(404).send("Player not exist");
        }
        else {
            // TODO check message with this status
            res.status(204).send("player deleted");
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});
exports.destroy = destroy;
