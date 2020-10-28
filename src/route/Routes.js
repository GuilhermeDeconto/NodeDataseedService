"use strict"
const joi = require('joi');
const HealthController = require('../controller/HealthController.js');
const HTTPMethod = require('../config/HTTPMethod.js')

module.exports = [
    {
        method: HTTPMethod.GET,
        path: "/",
        options: {
            description: "Index endpoint to test if application is up and running",
            notes: "Returns a hello world",
            tags: ["api", "Health"],
            handler: HealthController.getHealthController
        }
    },
];
