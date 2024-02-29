import HttpType from "../../Utils/Constants/HttpTypes.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";
import SendToken from "./SendToken.js";

const TokenWare =  async(req,res,next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return response(res,401,HttpType.getStatus(401),ResTypes.errors.missing_token)
        }
        const token = authHeader.split(" ")[1]
        const validationResponse = await SendToken(token);
        if(validationResponse.authenticated)
            next()
        else if(!validationResponse.authenticated)
            return response(res, 400, HttpType.getStatus(400), ResTypes.errors.invalid_token)
    } catch (error) {
        return response(res,403,HttpType.getStatus(403),error)
    }
}

export default TokenWare