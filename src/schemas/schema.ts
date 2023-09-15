import Joi from 'joi';

export const filmeSchema = Joi.object({
    nome: Joi.string().required(),
    plataforma: Joi.string().required(),
    genero: Joi.string().required(),
    status: Joi.string().required(),
    nota: Joi.number().optional(),
    resumo: Joi.string().optional(),
});