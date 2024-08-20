import { Router } from "express";
import { createUser, deleteUser, getUsers, UpdateUser } from "../controllers/user.controller";

const router = Router();

router.get("/user", getUsers).get("/user/:id");
router.post("/user",createUser);
router.patch("/user/:id", UpdateUser);
router.delete("/user/:id",deleteUser);

export default router