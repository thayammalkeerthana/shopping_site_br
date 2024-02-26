 const addCart = async (req,client) =>{
    const {cartId,cartName,price,quantity} = req.body
    console.log("req.bod",req.body)
    try{
         const response = await client.query(`INSERT INTO cart 
        (cartid, 
        cartname, 
        price,
        quantity) VALUES ($1,$2,$3,$4)
        ON CONFLICT (cartid) 
        DO UPDATE SET quantity = cart.quantity + EXCLUDED.quantity;`,
        [cartId,cartName,price,quantity])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "cart created successfully"};
         } else {
            return {error: true, message: "cart not created successfully"};
         }
    } catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }

 const decCart = async (req,client) =>{
    const {cartId,cartName,price,quantity} = req.body
    try{
         const response = await client.query(`INSERT INTO cart 
        (cartid, 
        cartname, 
        price,
        quantity) VALUES ($1,$2,$3,$4)
        ON CONFLICT (cartid) 
        DO UPDATE SET quantity = cart.quantity - EXCLUDED.quantity;`,
        [cartId,cartName,price,quantity])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "cart item removed successfully"};
         } else {
            return {error: true, message: "cart item removed successfully"};
         }
    } catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }

 const getCartData=async(req,client)=>{
    try{
        console.log("calling");
        const response = await client.query(`SELECT * FROM "cart"`)
        console.log("response",response);
        if(response){
            return {error: false, data: response.rows , message: "cart read successfully"};
        } else {
           return {error: true, message: "cart not read successfully"};
        }
    }  catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }

 const deleteCartData=async(req,client)=>{
        const response = await client.query(`DELETE FROM cart WHERE "cartid" = $1`,[req.params.id])
        try{
            if(response.rowCount>0){
                return {error: false, message: "cart data deleted successfully"};
            } else {
               return {error: true, message: "cart data not deleted successfully"};
            }
            } catch(err){
                return {error: true, message: err.toString()};
            }
 }
 
const deleteCartAllData=async(req,client)=>{
    const response = await client.query(`DELETE FROM cart`)
    try{
        if(response.rowCount>0){
            return {error: false, message: "cart data deleted successfully"};
        } else {
           return {error: true, message: "cart data not deleted successfully"};
        }
        } catch(err){
            return {error: true, message: err.toString()};
        }
}

export {
    addCart,
    getCartData,
    deleteCartData,
    decCart,
    deleteCartAllData
 }