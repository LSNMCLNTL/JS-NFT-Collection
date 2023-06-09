
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const holdNFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name_param, eye_color_param, shirt_type_param, bling_param) {
    const holdNFT ={
        "name" : name_param,
        "eye_color": eye_color_param,
        "shirt_type": shirt_type_param,
        "bling": bling_param
    }
    holdNFTs.push(holdNFT);
    console.log("Minted: " + name_param);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < holdNFTs.length; i++) {
        console.log("\nID: \t\t\t" + (i + 1));
        console.log("Name: \t\t\t" + holdNFTs[i].name);
        console.log("Eye color: \t\t " + holdNFTs[i].eye_color);
        console.log("Type of Shirt: \t" + holdNFTs[i].shirt_type);
        console.log("Bling \t\t\t" + holdNFTs[i].bling);
    }
}


// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + "Total Number of NFTS minted: " + holdNFTs.length);
}

// call your functions below this line
mintNFT("Leo","Brown", "T-Shirt", "Diamond");
mintNFT("Joshua","Blue", "Polo", "Quartz");
mintNFT("Robert","Cyan", "Hoodie", "Ruby");
mintNFT("Ken","Red", "Jacket", "Amethyst");

listNFTs();
getTotalSupply();
