import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationResult } from 'joi';

type Middleware = (req: Request, res: Response, next: NextFunction) => void;

export function schemaValidation(schema: Schema): Middleware {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation: ValidationResult = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors: string[] = validation.error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
    next();
  };
}
