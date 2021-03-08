var clotheskind;
var imagestyle="";
var outpices="";
function starting(){
alert ("please chooese which king of clothes you want");
 clotheskind= prompt("Enter the type  T-shirt Or jacket ");
}
starting();


function clothes(){
while(clotheskind !="t-shirt" && clotheskind !="jacket"){
    alert("pleas chooes the correct value:");
     clotheskind=prompt("Enter the type T-shirt Or jacket")
}

alert("you are chooes the " + clotheskind);

 
if(clotheskind== "jacket" ){
    
        document.write('<img src="/images/jacket.jpg" />');

        imagestyle= '<img src="/images/jacket1.JPG" />';
    }
else{
         document.write('<img src="/images/t-shirt.jpg" />');

         imagestyle='<img src="/images/t-shirt1.JPG" />';
}
}

clothes();

function number(){
var num=prompt("please enter the number of pices:");

outpices="";


 for(var i=0;i<num;i++)
 {
    console.log(imagestyle);
    outpices=outpices+imagestyle;

 }
}
number();
 
 document.write(outpices);

