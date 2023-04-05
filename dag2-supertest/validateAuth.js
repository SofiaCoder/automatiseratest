const joi = require('joi');

exports.validateAuth = function validateAuth(req, res, next){
    const schema = joi.object({
        username: joi.string().required(),
        password: joi.string().required()
    })
    
    const { error} = schema.validate(req.body)
    if(error) {
        res.status(400).send(error.details[0].message)
    } else {
    next()
    }
}
