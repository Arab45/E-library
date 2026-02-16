export const sendError = (res, message, status=404) =>{
    return res.status(status).json({
        success: false,
        message: message
    })
};

export const sendSuccess = (res, message, data) => {
    return res.json({
        success: true,
        message: message,
        data: data
    })
};


export default { sendError, sendSuccess };