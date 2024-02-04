const authValidation =(req,res,next) =>{
    const {authorization} = req.headers;
    console.log(authorization)
    if (!authorization) {
        res.status(401).send('token needed')
    }
    try {
        
    } catch (error) {
        
    }
}