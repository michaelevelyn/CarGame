// Variables
let car = {
    make: 'Audi',
    model: 'R8',
    color: 'white'
    mileage: 0,
    isWorking: true;

    DriveToWork(){
        alert('Old Mileage: ${this.mileage}');
        this.mileage = this.mileage + 10;
        alert('New Mileage: ${this.mileage}');
    },
}

//Functions
// Logs all out car's current stats to the console
const rewriteStats() => {

}

// Main Process
// Captuers keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
const document.onkeyup(event)=>{

    // Captures the key press, converts it to the lowercase, and saves it to the variable.
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if {letter === 'd'}{
        car.DriveToWork();
        rewriteStats();
    }