
//Idea Nomber 1

// function increment() {
//     let result = document.getElementById("result").innerHTML;
//     let resultNum = parseInt(result);
//     let resulIn = resultNum + 1;
//     document.getElementById("result").innerHTML = resulIn;
//     console.log(resulIn)
   
//  }   

// function decrement() {
//       let result = document.getElementById("result").innerHTML;
//     let resultNum = parseInt(result);
//     if (resultNum > 0) {
//         let resulIn = resultNum - 1;
//     document.getElementById("result").innerHTML = resulIn;
//     console.log(resulIn)
//     }
    
// }


//Idea Nomber 2
function Counter(increment) {
    let result = document.getElementById("result").innerHTML;
    let resultNum = parseInt(result);
    if (increment == true) {
        let resulIn = resultNum + 1;
    document.getElementById("result").innerHTML = resulIn;
    }
    if (increment == false) {
        if (result > 0) {
             let resulIn = resultNum - 1;
    document.getElementById("result").innerHTML = resulIn;
        }
       
    }
    
   
}
