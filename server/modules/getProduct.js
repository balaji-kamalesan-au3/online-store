const data = require("../Data/flipkart_sampledata");
const getProductsbyKey = require("./Basic Fucntions/getByKeyword")

const validateToken = require("../validation/validateToken");

const getData = (req,res) => {
    

    if(req.params.key === "null"){
        const {errors,isValid,user} = validateToken(req);
        if(!isValid){
            res.status(400).json(errors);
        }
        else{
            const products = data.data;
            const startIndex = Math.floor(Math.random()*Math.floor(407));
            const endIndex = startIndex+100;
            console.log(startIndex,endIndex)
            console.log(products.length)
            const response = []
            for(let i=startIndex;i<endIndex;i++){
                response.push(products[i]);
            }   
            res.status(200).json(response);
        }
    }
    else{
        const {errors,isValid,user} = validateToken(req);
        if(!isValid){
            res.status(400).json(errors);
        }
        else {
            const searchQuery = req.params.key.toLowerCase();
            let products = getProductsbyKey(data.data, searchQuery);
            res.status(200).json(products)

        }
    }
    
}

module.exports = getData