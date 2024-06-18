import express from "express";
import auth from "../middleware/auth.js";
const router = express.Router();

import { signin, signup, userDetails } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/getuserDetails/:id",auth, userDetails);

export default router;