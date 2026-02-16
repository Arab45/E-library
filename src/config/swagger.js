import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Library API",
      version: "1.0.0",
      description: "API documentation for E-Library system",
    },
    servers: [
      {
        url: "https://e-library-l1jl.onrender.com",
      },
    ],
  },

  // files where swagger reads comments
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
