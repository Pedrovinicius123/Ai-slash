const { sinapsis, machina } = require('./modules/sinaptica')
const parallel = require('./modules/parallel')
const NumpyJS = require('jsnumpy')

class Model {
    constructor(learningRate) {
        this.learningRate = learningRate
        this.brain = null

    }

    async getArray(brain) {

        let response

        let result = brain.generateArray()

        result.catch(() => {
            console.log('Error')
        })

        result.then((value) => {
            response = value
            return response
        })
    }

    async selectWeightedSinapsis() {
        console.log(this.brain[0])
    }

    async process(x) {

    }
}

brain = new machina(10, 10)
const computer = new Model(0.01)
let result = computer.getArray(brain)

result.catch(() => {
    console.log('error')
})

result.then((value) => {
    console.log(value)
})
