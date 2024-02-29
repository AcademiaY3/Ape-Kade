class ResTypes {
    errors = {
        missing_token: { message: "Bearer token is missing" },
        invalid_token: { message: "Token is invalid" },
        cancelled_token: { message: "Token has been revoked" },
        token_expired: { message: "Token has expired" },
        not_found: { message: "invalid routes" },
    };
    successMessages = {
        data_retrieved: { message: "Data retrieved successfully" },
        server_online: { message: "Gateway Online" },
    };
}

export default ResTypes = new ResTypes()