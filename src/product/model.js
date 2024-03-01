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
    const fileName = `product_${Date.now()}_${file.originalname}`;
    try{
        const response = await client.query(`INSERT INTO product 
        (productid,
        productname,
        imageurl,
        categoryid,
        price) VALUES($1,$2,$3,$4,$5) RETURNING *`,
         [productid,productname,fileName,categoryid,price])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "product created successfully"};
         } else {
            return {error: true, message: "product not created successfully"};
         }
    } catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }
 const getCategoryProduct = async (req,client) =>{
    try{
        const response = await client.query(`SELECT * FROM product WHERE "categoryid" = $1`,[req.params.id])
        if(response){
            return {error: false, data: response.rows , message: "product read successfully"};
        } else {
           return {error: true, message: "product not read successfully"};
        }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const getSearchProduct = async (req,client) => {
    const {searchText} = req.body
    try {
        let response = await client.query(`
          SELECT p.*, c.categoryid
          FROM "product" p
          LEFT JOIN "category" c ON p.categoryid = c.categoryid
          WHERE 
            p.productname ILIKE $1 OR 
            p.price ILIKE $1 OR 
            c.categoryname ILIKE $1;
        `, [`%${searchText}%`]);
    
        if (response) {
          return { error: false, data: response.rows, message: "Search results retrieved successfully" };
        } else {
          return { error: true, message: "Search results not retrieved successfully" };
        }
      } catch (err) {
        console.error("Error while searching products:", err);
        return { error: true, message: err.toString() };
      }
  };
export {
    getAllProduct,
    addAdminProduct,
    getCategoryProduct,
    getSearchProduct
 }