 const getAllProduct=async(req,client)=>{
    try{
        const response = await client.query(`SELECT * FROM "product"`)
        if(response){
            return {error: false, data: response.rows , message: "product read successfully"};
        } else {
           return {error: true, message: "product not read successfully"};
        }
    }  catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }

 const addAdminProduct = async (req,client) =>{
    const {productid,productname,imageurl,categoryid,price} = req.body
    try{
        const response = await client.query(`INSERT INTO product 
        (productid,
        productname,
        imageurl,
        categoryid,
        price) VALUES($1,$2,$3,$4,$5) RETURNING *`,
         [productid,productname,imageurl,categoryid,price])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "product created successfully"};
         } else {
            return {error: true, message: "product not created successfully"};
         }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

export {
    getAllProduct,
    addAdminProduct
 }