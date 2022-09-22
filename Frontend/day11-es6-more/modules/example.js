// export function adder(n1,n2){
//     return n1+multiplier(n1,n2);
// }
function adder(n1,n2){
    return n1+multiplier(n1,n2);
}
function multiplier(n1,n2){
    return n1*n2;
}
//named export
// export {
//     adder as add
// }
//default
//export default adder; //can be named anything in main file.

// export{multiplier};

export{multiplier,adder};