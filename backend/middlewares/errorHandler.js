const errorHandler = (err, req, resp, next) => {
    resp.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

export default errorHandler;