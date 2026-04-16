import { response, Router } from "express";

const router = Router();

router.get("/", (request, response) => {
    response.send("Practise is working!")
})

export default router;