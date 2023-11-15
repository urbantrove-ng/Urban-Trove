module.exports = (controller)=>async (req,res,next)=>{
   try {
    controller(req,res)
   } catch (error) {
    console.log(error)
   }
}