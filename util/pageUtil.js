import { readPage, contructPage} from "./templatingEngine.js";


const frontpage = readPage("./public/pages/frontend/index.html") // linjen læses synkron, dsv næste linje læses ikke før readpage har hentet indholdet fra parameter
export const frontpagePage = contructPage(frontpage, {
    tabTitle: "DogInder | Welcome"
  
});


const matches = readPage("./public/pages/matches/matches.html");
export const matchesPage = contructPage(matches,{
    cssLinks : '<link rel="stylesheet" href="/pages/matches/matches.css">'
});

const contact = readPage("./public/pages/contact/contact.html");
export const contactPage = contructPage(contact,{
    tabTitle: "DogInder | Contact Us"
}); 

