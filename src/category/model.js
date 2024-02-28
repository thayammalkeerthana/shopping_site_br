const getCategoryData=async(req,client)=>{
    try{
        const response = await client.query(`SELECT * FROM category`)
        if(response){
            return {error: false, data: response.rows , message: "category read successfully"};
        } else {
           return {error: true, message: "category not read successfully"};
        }
    }  catch(err){
        console.log("err",err);
        return {error: true, message: err.toString()};
    }
 }

 export {
    getCategoryData
 }