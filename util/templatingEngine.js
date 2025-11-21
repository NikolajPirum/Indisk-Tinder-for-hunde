import fs from 'fs'; // file system import

// Før brugte jeg single page application, hvor websiden opbygges på clientens browser og bruger clientens ressourcer.
// SPA henter html skelet og js henter data
//ssr fordele: responstid, SEO - søgemaskine(fx bing) optimering, ressourcer bliver brugt på server når man starter

const footer = readPage("./public/components/footer/footer.html");
const header = readPage("./public/components/header/header.html");

export function readPage(path){
    return fs.readFileSync(path).toString(); //readFileSync læser filens indhold 
}

export function contructPage(pageContent,options = {}){
    return header
    .replace('$$TAB_TITLES$$', options.tabTitle || "DogInder")
    .replace('$$CSS_LINKS$$', options.cssLinks || "")
     + pageContent
     + footer;
}
