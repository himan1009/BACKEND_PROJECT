class ApiError extends Error {
    constructor(
        statusCode,
        message= "SOMETHING WENT WRONG",
        errors = [],
        statck = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        if (statck) {
            this.stacl = statck
        } else {
            Error.captureStackTrace(this, this.constructor)
        }

    }
}





export {ApiError}