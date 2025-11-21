import express from 'express';
import path from 'path';

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
//============================= PAGES ============================================

import matchesRouter from './public/routers/matchesRouter.js';
app.use(matchesRouter);

import pagesRouter from './public/routers/pagesRouter.js';
app.use(pagesRouter);

import contactRouter from './public/routers/contactRouter.js'
app.use(contactRouter)
//=================================== API ===============================================
// import {getMatches} from './util/matchesUtil.js';

// app.get("/api/matches", async (req,res) => {
//     // const promises = Array.from({ length: 5 }, () => getDogImgURL())
//     // const dogs = await Promise.all(promises)
//     const matches = await getMatches();
//     res.send({
//         data : matches
//     })
// });

// nodemon for dev app.js and node app.js for prod
const PORT = Number(process.env.PORT || 8080);
app.listen(PORT, () =>{
    console.log('Server is running on port:',PORT);
});

 
//console.log(process.env);
