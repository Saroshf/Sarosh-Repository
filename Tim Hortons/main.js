//Tim Hortons Roll Up The Rim Simulator
'use strict';
//Global Variables
let numgp = 0;
let numppa = 0;
let numcof = 0;
let numdon = 0;
//Event Listeners
document.getElementById('provbtn').addEventListener('click', provHandler)
document.getElementById('sim1').addEventListener('click', sim1Handler);
document.getElementById('sim5').addEventListener('click', sim5Handler);
document.getElementById('simgp').addEventListener('click', simgpHandler);
document.getElementById('sim500').addEventListener('click', sim500Handler);


//Event Functions
function provHandler() {
    let prov = document.getElementById('provInput').value;
    if (prov == 'Alberta') {
        document.getElementById('provimg').src = "Media/alberta.jpg"
        console.log('Alberta');
    } else if (prov == "British Columbia") {
        document.getElementById('provimg').src = "Media/bc.jpg"
        console.log("British Columbia");
    } else if (prov == "Saskatchewan") {
        document.getElementById('provimg').src = "Media/sask.jpg"
        console.log("Saskatchewan");
    } else {
        alert("Please enter either Alberta, British Columbia, or Saskatchewan.");
    }
}


function sim1Handler() {
    //Simulating results
    let prov = document.getElementById('provInput').value;
    let randprze = Math.random();
    console.log(randprze)
    if (prov == "Alberta") {
        //Simulating Results for Alberta
        if (randprze < 0.05) {
            console.log('Grand Prize');
            numgp++;
            document.getElementById('GP').innerHTML = numgp;
            document.getElementById('simoutput').innerHTML = "Grand Prize!!";
        } else if (randprze < 0.20) {
            console.log('Please Play Again.')
            numppa++;
            document.getElementById('PPA').innerHTML = numppa;
            document.getElementById('simoutput').innerHTML = "Please Play Again.";
        } else if (randprze < 0.60) {
            console.log('Free Donut')
            numdon++;
            document.getElementById('Donut').innerHTML = numdon;
            document.getElementById('simoutput').innerHTML = "Free Donut!!";
        } else if (randprze < 1) {
            console.log('Free Coffee')
            numcof++;
            document.getElementById('Coffee').innerHTML = numcof;
            document.getElementById('simoutput').innerHTML = "Free Coffee!!";
        }
    } else if (prov == "British Columbia") {
        //Simulating Results for British Columbia
        if (randprze < 0.10) {
            console.log('Grand Prize');
            numgp++;
            document.getElementById('GP').innerHTML = numgp;
            document.getElementById('simoutput').innerHTML = "Grand Prize!!";
        } else if (randprze < 0.20) {
            console.log('Free Donut')
            numdon++;
            document.getElementById('Donut').innerHTML = numdon;
            document.getElementById('simoutput').innerHTML = "Free Donut!!";
        } else if (randprze < 0.30) {
            console.log('Free Coffee')
            numcof++;
            document.getElementById('Coffee').innerHTML = numcof;
            document.getElementById('simoutput').innerHTML = "Free Coffee!!";
        } else if (randprze < 1) {
            console.log('Please Play Again.')
            numppa++;
            document.getElementById('PPA').innerHTML = numppa;
            document.getElementById('simoutput').innerHTML = "Please Play Again.";
        }
    } else if (prov == "Saskatchewan") {
        //Simulating Results for Saskatchewan
        if (randprze < 0.01) {
            console.log('Free Donut')
            numdon++;
            document.getElementById('Donut').innerHTML = numdon;
            document.getElementById('simoutput').innerHTML = "Free Donut!!";
        } else if (randprze < 0.02) {
            console.log('Free Coffee')
            numcof++;
            document.getElementById('Coffee').innerHTML = numcof;
            document.getElementById('simoutput').innerHTML = "Free Coffee!!";
        } else if (randprze < 0.30) {
            console.log('Grand Prize');
            numgp++;
            document.getElementById('GP').innerHTML = numgp;
            document.getElementById('simoutput').innerHTML = "Grand Prize!!";
        } else if (randprze < 1) {
            console.log('Please Play Again.')
            numppa++;
            document.getElementById('PPA').innerHTML = numppa;
            document.getElementById('simoutput').innerHTML = "Please Play Again.";
        }
    }

}


function sim5Handler() {
    //Simulating 5 times
    let prov = document.getElementById('provInput').value;
    for (let n = 0; n < 5; n++) {
        let randprze = Math.random();
        console.log(randprze)
        if (prov == "Alberta") {
            //Simulating Results for Alberta
            if (randprze < 0.05) {
                console.log('Grand Prize')
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            } else if (randprze < 0.60) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 1) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else {
                document.getElementById('simoutput').innerHTML = "---------";
            }
        } else if (prov == "British Columbia") {
            //Simulating Results for British Columbia
            if (randprze < 0.10) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.30) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        } else if (prov == "Saskatchewan") {
            //Simulating Results for Saskatchewan
            if (randprze < 0.01) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.02) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 0.30) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        }
    }
}


function simgpHandler() {
    //Simulating till Grand Prize
    let prov = document.getElementById('provInput').value;
    while (numgp < 1) {
        let randprze = Math.random();
        console.log(randprze)
        if (prov == "Alberta") {
            //Simulating Results for Alberta
            if (randprze < 0.05) {
                console.log('Grand Prize')
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            } else if (randprze < 0.60) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 1) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            }
        } else if (prov == "British Columbia") {
            //Simulating Results for British Columbia
            if (randprze < 0.10) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.30) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        } else if (prov == "Saskatchewan") {
            //Simulating Results for Saskatchewan
            if (randprze < 0.01) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.02) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 0.30) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        }
    }
}


function sim500Handler() {
    //Simulating till 500 Donuts
    let prov = document.getElementById('provInput').value;
    while (numdon < 500) {
        let randprze = Math.random();
        console.log(randprze)
        if (prov == "Alberta") {
            //Simulating Results for Alberta
            if (randprze < 0.05) {
                console.log('Grand Prize')
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            } else if (randprze < 0.60) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 1) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            }
        } else if (prov == "British Columbia") {
            //Simulating Results for British Columbia
            if (randprze < 0.10) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 0.20) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.30) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        } else if (prov == "Saskatchewan") {
            //Simulating Results for Saskatchewan
            if (randprze < 0.01) {
                console.log('Free Donut')
                numdon++;
                document.getElementById('Donut').innerHTML = numdon;
                document.getElementById('simoutput').innerHTML = "Free Donut!!";
            } else if (randprze < 0.02) {
                console.log('Free Coffee')
                numcof++;
                document.getElementById('Coffee').innerHTML = numcof;
                document.getElementById('simoutput').innerHTML = "Free Coffee!!";
            } else if (randprze < 0.30) {
                console.log('Grand Prize');
                numgp++;
                document.getElementById('GP').innerHTML = numgp;
                document.getElementById('simoutput').innerHTML = "Grand Prize!!";
            } else if (randprze < 1) {
                console.log('Please Play Again.')
                numppa++;
                document.getElementById('PPA').innerHTML = numppa;
                document.getElementById('simoutput').innerHTML = "Please Play Again.";
            }
        }
    }
}