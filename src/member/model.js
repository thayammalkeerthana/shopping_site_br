
const create = async (req,client) =>{
    const {name,memberId,age,department} = req.body
    try{
        const response = await client.query(`INSERT INTO members 
        (name,
        "memberId",
         age,
         department) VALUES($1,$2,$3,$4) RETURNING *`,
         [name,memberId,age,department])
         if(response.rowCount>0){
             return {error: false, data: response.rows , message: "Member created successfully"};
         } else {
            return {error: true, message: "Member not created successfully"};
         }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }



const update = async (req,client) =>{
    const {name,memberId,age,department} = req.body
    try{
        const response = await client.query(`UPDATE members SET
        name = $1,
         age = $3,
         department = $4 WHERE "memberId" = $2 RETURNING *`,
         [name,memberId,age,department])
         if(response.rowCount>0){
            return {error: false, data: response.rows , message: "Member updated successfully"};
        } else {
           return {error: true, message: "Member not updated successfully"};
        }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const getAll = async (req,client) =>{
    try{
        const response = await client.query("SELECT * FROM members")
        if(response){
            return {error: false, data: response.rows , message: "Member read successfully"};
        } else {
           return {error: true, message: "Member not read successfully"};
        }
    }  catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const getAllProduct=async(req,client)=>{
    try{
        console.log("calling");
        const response = await client.query(`SELECT * FROM "product"`)
        console.log("response",response);
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

 const getOne = async (req,client) =>{
    try{
        const response = await client.query(`SELECT * FROM members WHERE "memberId" = $1`,[req.params.id])
        if(response){
            return {error: false, data: response.rows , message: "Member read successfully"};
        } else {
           return {error: true, message: "Member not read successfully"};
        }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

 const remove = async(req,client) =>{
    const response = await client.query(`DELETE FROM members WHERE "memberId" = $1`,[req.params.id])
    try{
    if(response.rowCount>0){
        return {error: false, message: "Member deleted successfully"};
    } else {
       return {error: true, message: "Member not deleted successfully"};
    }
    } catch(err){
        return {error: true, message: err.toString()};
    }
 }

export {
    create,
    update,
    getAll,
    getOne,
    remove,
    getAllProduct
 }