'use strict';

module.exports = {
    buildDependencyGraph: buildDependencyGraph,
    kidWeights: kidWeights
}

function buildDependencyGraph(inp) {
    let depGraph = {};

    inp.forEach(line => {
        let disc = parseLine(line);

        depGraph[disc.name] = disc;
    })
    // console.log("before findParents");
    // console.log(depGraph);

    depGraph = findParents(depGraph);

    // console.log("before addToParents");
    // console.log(depGraph);

    depGraph = addToParents(depGraph);

    // console.log("after addToParents");
    // console.log(depGraph);

    return depGraph;
}

function parseLine(line){
    line = line.split(' ');
    let disc = {
        name: line[0],
        weight: Number(line[1].slice(1,line[1].length-1)),
        origWeight: Number(line[1].slice(1,line[1].length-1)),
    }
    if (line.length > 2) {
        disc.kids = {}
        line.slice(3).forEach(k => {
            if (k[k.length - 1] === ',') k = k.slice(0,k.length - 1);
            disc.kids[k] = {}
        })
    }
    return disc;
}

function findParents(depGraph) {
    // console.log("starting find parents");
    let keys = Object.keys(depGraph);
    // console.log(keys);
    keys.forEach(k => {
        let disc = depGraph[k];
        // console.log(k, disc);
        keys.forEach(p => {
            let tmp = depGraph[p];
            if (tmp.kids && tmp.kids[k]) {
                depGraph[k].parent = p;
            }
        })
    });
    return depGraph;
}

function addToParents(depGraph) {
    let changesMade = true;
    while (changesMade) {
        changesMade = false;
        Object.keys(depGraph).forEach(k => {
            if (depGraph[k].parent) {
                if (!depGraph[k].kids) {
                    depGraph[depGraph[k].parent].kids[k] = depGraph[k];
                    delete depGraph[k];
                    changesMade = true;
                }
                else if (Object.keys(depGraph[k].kids).every(c => {
                    return Object.keys(depGraph[k].kids[c]).length > 0;
                })){
                    depGraph[depGraph[k].parent].kids[k] = depGraph[k];
                    delete depGraph[k];
                    changesMade = true;
                }
            }

        })
    }
    return depGraph;
}

function kidWeights(depGraph) {
    depGraph = buildDependencyGraph(depGraph);
    let disc = depGraph[Object.keys(depGraph)[0]];
    disc.weight = recursiveFindKidWeight(disc);
    // console.log(disc);
    // printSomeWeights(disc, 0);
    plonkDownIn(disc);
    return depGraph;
}

function recursiveFindKidWeight(disc) {
    // console.log(disc);
    if (!disc.kids) return disc.weight;
    else {
        let discWeightSum = 0;
        Object.keys(disc.kids).forEach(d => {
            discWeightSum += recursiveFindKidWeight(disc.kids[d]);
        })
        disc.weight += discWeightSum;
    }
    return disc.weight;
}

function printSomeWeights(disc, depth) {
    let line = '';
    for (let x = 0; x < depth; x++) line += ' - ';
    line += disc.name +":" + disc.origWeight + ":";
    line += disc.weight;
    console.log(line);
    if (disc.kids) {
        Object.keys(disc.kids).forEach(k => {
            printSomeWeights(disc.kids[k], depth + 1);
            // let d = disc.kids[k];
            // line = '';
            // for (let x = 0; x < depth; x++) line += ' - ';
            // line += d.name +":";
            // line += d.weight;
            // console.log(line);
        })
    }

}

function plonkDownIn(disc) {
    if (disc.kids && !Object.keys(disc.kids).every(k => {
        disc.kids[k].weight === disc.kids[Object.keys(disc.kids)[0]].weight;
    })){
        printSomeWeights(disc, 0);
    }
    else if (disc.kids) {
        Object.keys(disc.kids).forEach(k => {
            plonkDownIn(disc.kids[k]);
        })
    }
}
