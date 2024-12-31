//********** */ EKHANE SURU HOLO MODULE 17-2 NUMBER VIDEO  ********///
/**
 * VARIABLE ==> vary + able
 * 5 things to a variable  
 */
let x = 10;
let y = 10;
let z = x + y;

let result = z;
console.log(x)
console.log(y)
console.log(result)

var x = 10;
var y = 10;
var z = x + y;

let result = z;


//*********** */ EKHANE SURU HOLO MODULE 17-3 NUMBER VIDEO *****************//

// ekhane code kora hoy ni shudhu animation diye bujhano hoyese...../




//****** */ */ EKHANE SURU HOLO MODULE 17-5 NUMBER VIDEO ******************* = TYPE //
/**
 * VARIABLE 3 DHORONER
 * 1, Number,
 * 2, String,
 * 3, Boolean,
 */

var number = 33; //eta hocche number type er variable 
var isStudent = true; //eta hocche Boolean, type er variable 
var name = "akash";  //eta hocche string type er variable ....ekhane bises kore "" emon kotetion dite hobe

console.log(name);
console.log(typeof name);
console.log(typeof number);
console.log(typeof isStudent);
// typeof dara amra variable ta kon type er ta dekhte pari....
 



************ */ EKHANE SURU HOLO MODULE 17-6 NUMBER VIDEO ***************
17-6 JavaScript Keyword, Variable name naming convention....

// 1. no keyword in variable name
var false = 45;
var var = 50;

// no space or gap in variable name 
var is happy = false ;
ishappy = true ; 

// 3. no quote 
var "address" = "kocu khet";

// 4. can not start with a number. but number other then the first letter is allowed
var money = 45; 
var money2 = 55;
var 3money = 66; //eta kora jabe na karon suru te number dewya jay na 

// 5. name is case sensitave
address
address
ADDRESS
addRess
ADDress

// 6. how to erite a long variable
var mycurrenthomeaddress = "dhaka rangmati"
var my_current_home_address = "dhaka rangmati" //snake case
var myCurrentHomeAddress = "dhaka rangmati"    //camel case
var MyCurrentHomeAddress = "dhaka rangmati"    //pesca case
var my current home address = "dhaka rangmati" //evabe kora jabe na



// ************ EKHANE SURU HOLO MODULE 17-7 NUMBER VIDEO ***************** //
// 17-7 Know the fundamentals of JS Numbers...
var oraingPrice = 20;
var chololate = 0.5;
var applePrice = "20";

console.log("type check", typeof oraingPrice); //type check number,
console.log("type check", typeof applePrice);  //type check string,

// eta dara ami string type number ke intiser a convert korte parbo//
const x = parseInt(applePrice);
console.log("check", typeof x)

const y = parseFloat("20.4");
console.log( y)

var first = 0.1;
var second = 0.2;
var total = first + second;

console.log(parseFloat(total.toFixed(2)))

// পার্থক্য:
// ফাংশন	কাজ	উদাহরণ
// parseInt	স্ট্রিং থেকে শুধুমাত্র পূর্ণসংখ্যা বের করে। parseInt("12.34") → 12..
// parseFloat স্ট্রিং থেকে ভগ্নাংশসহ পুরো সংখ্যা বের করে।  parseFloat("12.34") → 12.34..




// ************ EKHANE SURU HOLO MODULE 17-9 NUMBER VIDEO ***************** //
17-9 (advanced) Mathematical operation shorthand.../

JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement 


//=============================================//


JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y

Shift Assignment Operators
Operator	Example	Same As
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y

Bitwise Assignment Operators
Operator	Example	Same As
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
 
Logical Assignment Operators
Operator	Example	Same As
&&=	x &&= y	x = x && (x = y)
||=	x ||= y	x = x || (x = y)
??=	x ??= y	x = x ?? (x = y)



// ********************* MIX ********************** //


var first = "mobarak";
var last  = "tobarak";
var fullName = first + last ;

console.log(fullName)


var first = "mobarak";
var last  = 55;
var fullName = first + last ;

console.log(fullName)


var first = "55"; //ekhane 2 ta 2 type howar karone result eseche = 5555 karon vinno
var last  = 55;
var fullName = first + last ;

console.log(fullName) //$ node index.js = 5555

