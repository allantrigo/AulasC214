const Validator = require("./validators");

const Calculadora = {
    add() {
        try {
            Validator.validate(arguments)
            result = 0
            for (number of arguments) {
                result += number
            }
            return result
        } catch (error) {
            console.log(error)
        }
    },
    sub() {
        try {
            Validator.validate(arguments)
            result = arguments[0]
            for (i = 1; i < arguments.length; i++)
                result -= arguments[i]
            return result
        } catch (error) {
            console.log(error)
        }
    },

    mult() {
        try {
            Validator.validate(arguments)
            result = arguments[0]
            for (i = 1; i < arguments.length; i++)
                result *= arguments[i]
            return result
        } catch (error) {
            console.log(error)
        }
    },

    div() {
        try {
            Validator.validate(Object.values(arguments))
            Validator.validateDiv(Object.values(arguments))
            result = arguments[0]
            for (i = 1; i < arguments.length; i++)
                result /= arguments[i]
            return result
        } catch (error) {
            console.log(error)
        }
    },

    pow(a, b) {
        try {
            Validator.validate(arguments)
            result = Math.pow(a, b)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = Calculadora