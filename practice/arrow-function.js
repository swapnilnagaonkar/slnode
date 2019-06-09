// const square = function(x){
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

//const square = (x) => x * x
//console.log(square(10))

// const event = {
//     name : 'Bithday party',
//     printGuestList : function(){
//         console.log('Guest List '+this.name)
//     }
// }


const event = {
    name : 'Bithday party',
    guestList : ['Krishna','Satyanand','kirti nitai'],
    printGuestList(){
        console.log('Guest List '+this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending '+this.name)
        });
    }
}
event.printGuestList();