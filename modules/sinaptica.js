const parallel = require('./parallel')

let sinapsis = {
    weight: Math.random(),
    operation: 1,
    switches: 0,
    probability: 1,
    deltay: 0,

    addWeight: async (lr) => {
        this.weight += lr;
    },

    addSwitch: async () => {
        this.switches++;
    },

    addProb: async (lr) => {
        this.probability += lr;
    },

    changeOperation: async () => {
        if (operation > 0) { operation = -1 } else 1;
    },

    changeDeltaY: async (newDeltay) => {
        this.deltay = newDeltay
    }
}

let line = new Array();

const generateArray = (i, j) => {

    let mtrx
    let item
    for (let idx = 0; idx < i; idx++) {
        let columns = new Array();

        for (let idx = 0; idx < j; idx++) {
            
            sinapsis.weight = Math.random()
            console.log(sinapsis.weight)

            newsinapsis = sinapsis
            item = newsinapsis
            
            columns.push(item)

        }

        line.push(columns)
    }

    mtrx = line

    return mtrx
}

let arr = generateArray(2, 2)
console.log(arr)
