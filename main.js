// VARIABLES
let car = {
    make: 'Audi',
    model: 'R8',
    color: 'white',
    mileage: 0,
    IsWorking: true,

    DriveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },
    DriveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 7000;
        alert(`New Mileage: ${this.mileage}`);
        alert('Car needs a tuneup!');
        this.IsWorking = false;
    },

    getTuneup(){
        alert('Car is fixed and is ready to go!')
        this.IsWorking = true;
    },

    honk(){
        alert('Honk! Honk!');
    }
};

//FUNCTIONS
// Logs all out car's current stats to the console
const rewriteStats=()=>{
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`IsWorking: ${car.working}`);
    console.log('----------------------------------')

}   

// Main Process
// Captuers keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup=(event) => {

    // Captures the key press, converts it to the lowercase, and saves it to the variable.
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if {letter === 'd'}{
        car.DriveToWork();
        rewriteStats();
    }

    if {letter === 'r'}{
        car.DriveAroundUSA();
        rewriteStats();
    }

    if {letter === 'h'}{
        car.DriveAroundUSA();
        rewriteStats();
    }

    if {letter === 't'}{
        car.honk();
        rewriteStats();
    }