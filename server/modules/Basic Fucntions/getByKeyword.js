 
 const getProductsbyKey = (products = [],searchQuery) => {


    let arr =  products.filter((product) => {
        const name = product["product_name"].toLowerCase();
        const category = product["product_category_tree"].toLowerCase();
        if(name.includes(searchQuery)!== false || category.includes(searchQuery) !== false) return product
   })

   return arr;

}

module.exports = getProductsbyKey;