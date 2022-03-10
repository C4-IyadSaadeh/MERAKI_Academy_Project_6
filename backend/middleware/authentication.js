const jwt=require('jsonwebtoken');

const authentication= async(req, res,next) => {
    try {
        const token=req.headers.authorization.split(' ').pop();
        const result= await jwt.verify(token,process.env.SECRET);
        req.token=result;
        next();
    } catch (error) {
        if (error.expireAt) {
            return res.status(403).json({
                success: false,
                message: "The Time out login is expired Please try again later"
              });
        }
        return res.status(403).json({
            success: false,
            message: "the token is not correct",
          });
    }
}
module.exports=authentication;