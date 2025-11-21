import { Router} from 'express'

const router = Router()

router.post("/api/contact", (req,res) => {
    res.send({data : "message recieved"})
});

export default router;
