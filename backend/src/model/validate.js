import Joi from "joi";

const validateschema = Joi.object({
  phrase: Joi.string().min(10).required(),
});

export { validateschema };
