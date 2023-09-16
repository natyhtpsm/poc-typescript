import Joi from 'joi';

export const filmeSchema = Joi.object({
    nome: Joi.string().required(),
    plataforma: Joi.string().required(),
    genero: Joi.string().required(),
    status: Joi.string().valid('Quero assistir', 'Em andamento', 'Finalizado').required(),
    nota: Joi.number().optional(),
    resumo: Joi.string().optional(),
});