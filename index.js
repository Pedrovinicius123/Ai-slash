const {sinapsis, genArr} = require('./modules/sinaptica')
const parallel = require('./modules/parallel')

class Model {
    constructor(learningRate, brain){
        this.learningRate = learningRate
        this.brain = brain

    }

    async process(x) {

        const processing = () => {
            for (let item of x) {
                
                
            }
        }

    }
}
