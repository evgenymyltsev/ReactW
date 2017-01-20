// var names = ['john', 'Andrew ', 'Jen'];
// //
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// //   });
// //
// // names.forEach((name) => console.log(name));
//
// // var returnMe = (name) => name +'!';
// // console.log(returnMe('ME'));
//
// var person ={
//   name: 'ME',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' say hi to ' + name);
//     });
//   }
// };
//
// person.greet();

// Challenge Area

// function add(a, b) {
//   return a + b
// }

var addStatement = (a,b) => a+b;
var addExpression = (a,b) => {
  return a+b;
}
console.log(addExpression(1,3));
console.log(addStatement(3,6));
