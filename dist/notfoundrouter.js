"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundHandler = (req, res, next) => {
    //const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(500).json({
        success: false,
        message: 'route not found!'
    });
};
exports.default = notFoundHandler;
