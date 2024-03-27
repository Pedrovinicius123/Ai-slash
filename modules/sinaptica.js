const {parallelize, retreiveInfo} = require('./parallel')
const path = require('path')
const fs = require('fs')

class sinapsis {
    constructor(weight){
        this.weight = weight;
        this.switches = 1;
        this.probability = 1;
        this.deltay = 0;
        this.operation = {
            up: true,
            down: false
        }
    }

    addWeight = async (lr) => {
        this.weight += lr;
    }

    addSwitch = async () => {
        this.switches++;
    }

    addProb = async (lr) => {
        this.probability += lr;
    }

    changeOperation = async () => {
        if (operation.up === true) {
            operation = {up:true, down:false}
        } 
        else { 
            operation = {up: true, down:false};
        }
    }

    changeDeltaY = async (newDeltay) => {
        this.deltay = newDeltay
    }

    changeWeight = async (nWeight) => {
        this.weight = nWeight
    }
}

const generateSubArray = (params) => {
    let line = new Array();
    for(let idx = 0; idx < params.j; idx++) {
        line.push(new sinapsis(Math.random()))
    }   

    return line

} 

class brain {
    constructor(i, j){
        this.i = i
        this.j = j
        this.mtrx = []
    }
    
    generateArray = async () => {    
        parallelize(generateSubArray, this.i, {i: this.i, j: this.j}, 'brain.json', 'data')
    }
}

const computer = new brain(4, 4)
let mtrxPath = computer.generateArray()

module.exports = {
    sinaptic: sinapsis,
    machina: brain,
}
