var num1 = parseInt(prompt("Enter the first dimension!"));
var num2 = parseInt(prompt("Enter the second dimension!"));
var num3 = parseInt(prompt("Enter the third dimension!"));
var pass = function (a,b,c){
	return a+b>c && b+c>a && c+a>b
}
if (pass(num1,num2,num3) && num1===true || num1<=0){
	alert("Hey, Enter a Valid Dimension!!");
}
if (pass(num1,num2,num3) && num1===num2 && num2===num3){
	alert("Equilateral Triangle")
}
else if(pass(num1,num2,num3) && num1===num2 || num2===num3 || num1===num3){
	alert("Isosceles Triangle")
}
else if(pass(num1,num2,num3) && num1!==num2!==num3){
	alert("Scalene Triangle")
}
else {
	alert ("!!! Not a Triangle !!!")
}
