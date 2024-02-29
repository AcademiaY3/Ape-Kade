class ResTypes {
    errors = {
        missing_token: { message: "Bearer token is missing" },
        invalid_token: { message: "Token is invalid" },
        cancelled_token: { message: "Token has been revoked" },
        token_expired: { message: "Token has expired" },
    };
    successMessages = {
        data_retrieved: { message: "Data retrieved successfully" }
    };
}

export default ResTypes = new ResTypes()