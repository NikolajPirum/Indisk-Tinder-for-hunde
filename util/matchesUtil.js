
// export async function getDogImgURL() {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     //console.log(response) //Response har en key body. body har en value ReadableStream, dvs en sekvens a bytes som kan læses asynkron.
//     const result = await response.json(); // After calling .json(), the bodyUsed property becomes true. You cannot read the body again from this response.
//     //console.log(result)

//     const dog = {
//         imageURL : result.message
//     };
//     return dog;
// }
// getDogImgURL()
import { fakerEN_IN } from '@faker-js/faker'; //random generator

export async function getMatches(amountOfMatches = 5) { // læser 5 matches pr kald
    const promises = [];
    
    for (let i = 0; i < amountOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json());

        promises.push(promise);
    }
    const results = await Promise.all(promises);
     //... er spread operator - spreder objektets egenskaber ud i det nye objekt
    const matches = results.map((result) => ({ imageURL: result.message, ...getIndianProfile() })); 
    

    return matches;
}

function getIndianProfile() {
    return {
        name: fakerEN_IN.person.fullName(),
        bio: fakerEN_IN.person.bio(),
        address: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city()
    }
}