import HttpType from "../../Utils/Constants/HttpTypes.js";
import ResTypes from "../../Utils/Constants/ResTypes.js";
import response from "../../Utils/ResponseHandler/ResponseHandler.js";

const checkHeaders = (req,res,next) => {
    const authHeader = req.headers.authorization
    const authRole = req.headers.role
    const token = authHeader.split(" ")[1]

    const roles = ['admin','user','seller']
    if (!authHeader) {
        return response(res,404,ResTypes.errors.missing_auth_header)
    }
    if (!authRole) {
        return response(res,404,ResTypes.errors.missing_role_header)
    }
    if (!token) {
        return response(res,404,ResTypes.errors.missing_token)
    }
    
    if (!roles.includes(authRole.toLowerCase())) {
        return response(res,403,ResTypes.errors.not_found_role)
    }

    next()
}

export default checkHeaders