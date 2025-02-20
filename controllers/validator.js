import joi from "joi";

const validator = (schema) => (payload) => schema.validate(payload, { abortEarly: false });

const schema_validator = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().max(10).min(3).required(),
    role: joi.string(),

});

const validate = validator(schema_validator);


const course_schema = joi.object({
    coursename: joi.string().required(),
    coursetitle: joi.string().required(),
    courseduration: joi.string().required(),
    courseprice: joi.string().required(),
    courseinstructor: joi.string().required(),
    email: joi.string().email().required(),
});
const validate_course = validator(course_schema);



const reset_password = joi.object({
    email: joi.string().required(),
    newPassword:joi.string().required(),
    OTP: joi.string(). min(6).max(6). required(),
})

const reset_password_validation = validator(reset_password)


export  {validate, validate_course, reset_password_validation}
