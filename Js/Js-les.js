
 //calling the id on html
 //int JS
 //arith operations
 // Boolean () used to find out if an expression is true or not. Any Real value is true be ye string or numbers
    /*var a = 10;
    a--;
    var b = 27;
    b++;
    var c = 24;
    var x = (a * b) / (a + b);
    var y = x * c;
    var z = b;                    

    var me = {firstname:"Ose", lastname:"Noah", age:c, eyecolor:"Coffee Brown", religion:"Christian", gender:"male"}
                
    document.getElementById("dem").innerHTML = y;
    document.getElementById("ari").innerHTML = x;
    document.getElementById("ops").innerHTML = z;
    document.getElementById('me').innerHTML = 'My initial is '+ me.lastname +" "+ me.firstname +'.'+" "+'I am'+" "+ me.age +" "+ 'years old '+'.'+" "+ 'I am a' +"&nbsp"+ me.religion;
*/
var score = 100;

if (score < 50) {
    document.write("F");
}
else if (score < 70) {
    document.write("D");
}
else if (score < 80) {
    document.write("C");
}
else if (score < 90) {
    document.write("B");
}
else if (score <= 100) {
    document.write("A");
}
else {
    document.write("You overdid yourself, Score must not be more than 100")
} 

var count;
for (count = 0; count <=8 ; count++) {
    if (count === 3) { break //continue
        
    }
    document.write( count )
    document.write("<br />");
    
}

var i = 1;
while (i <= 7) {
    document.write(i);
    document.write("<br />");
    i++
}