import { SwaggerDefinition } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'Fleet Management API',
    description: 'API para gestionar información de taxis con dispositivos GPS. [Más información.](https://github.com/olicrea/DEV013-fleet-management-api)',
    version: '1.0.0',
  },
  servers: [
    {
      url: 'http://localhost:3001',
    },
  ],
  components: {
    schemas: {
      Taxis: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          plate: { type: 'string' },
          trajectories: {
            type: 'array',
          },
        },
      },
      Trajectories: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          taxi_id: { type: 'integer' },
          date: { type: 'string', format: 'date-time' },
          latitude: { type: 'number' },
          longitude: { type: 'number' },
        },
      },
    },
  },
};

export { swaggerDefinition };
