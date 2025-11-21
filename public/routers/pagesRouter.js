import { Router } from 'express';

const router = Router();



import { frontpagePage, matchesPage, contactPage } from '../../util/pageUtil.js';

router.get("/",(req,res) => {
    //res.sendFile(path.resolve('public/pages/frontend/index.html'));
    res.send(frontpagePage)
});
 
router.get("/matches", (req,res) => {
    //res.sendFile(path.resolve('public/pages/matches/matches.html'));
    res.send(matchesPage); 
});

router.get("/contact", (req,res) => {
    res.send(contactPage); 
});

export default router;