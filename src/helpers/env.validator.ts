import * as Joi from 'joi';

export const envVarsSchema = Joi.object({
  NODE_VERSION: Joi.string().required(),

  PORT: Joi.number().default(6000),

  JWT_SECRET: Joi.string().required(),

  NODE_ENV: Joi.string().required(),

  DB_HOST: Joi.string().required(),
  DB_USER: Joi.string().required(),
  DB_NAME: Joi.string().required(),  
  DB_TYPE: Joi.string().required(),
});
