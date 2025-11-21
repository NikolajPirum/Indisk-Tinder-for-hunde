import {Router} from 'express';
import {getMatches} from '../../util/matchesUtil.js';
const router = Router();


router.get("/api/matches", async (req,res) => {
    // const promises = Array.from({ length: 5 }, () => getDogImgURL())
    // const dogs = await Promise.all(promises)
    const matches = await getMatches();
    res.send({
        data : matches
    })
});

export default router;