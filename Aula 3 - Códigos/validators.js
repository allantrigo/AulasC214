const Validator = {
    validate() {
        array = arguments[0]
        msg = undefined
        if (array.length < 2)
            msg = "É necessário mais de um número para realizar uma operação"
        for (number of array) {
            if (typeof number !== "number")
                msg = "Um dos argumentos não é um número"
        }
        if (msg)
            throw new Error(msg)
    },
    validateDiv() {
        array = arguments[0]
        msg = undefined
        for (number of array) {
            if (number === 0)
                throw new Error("Impossível realizar divisão por 0")
        }
        if (msg)
            throw new Error(msg)
    }
}

module.exports = Validator