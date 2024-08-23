import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, UpdateUser } from "../controllers/user.controller";
import { AuthRequired } from "../middleware/Auth.middleware";
import { parseuery } from "../middleware/user.middleware";

const router = Router();

router.get("/user",AuthRequired, parseuery, getUsers).get("/user/:id",getUser);
router.post("/user",AuthRequired,createUser);
router.patch("/user/:id",AuthRequired, UpdateUser);
router.delete("/user/:id",AuthRequired,deleteUser);

export default router   