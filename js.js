
alert ("please chooese which king of clothes you want");
var clotheskind= prompt("Enter the type  T-shirt Or jacket ");

while(clotheskind !="t-shirt" && clotheskind !="jacket"){
    alert("pleas chooes the correct value:");
    var clotheskind=prompt("Enter the type T-shirt Or jacket")
}

alert("you are chooes the " + clotheskind);

var imagestyle="";
if(clotheskind== "jacket" ){
    
        document.write('<img src="/images/jacket.jpg" />');

        imagestyle= imagestyle+ '<img src="/images/jacket1.jpg" />';
    }
else{
         document.write('<img src="/images/t-shirt.jpg" />');

         imagestyle='<img src="images/t-shirt1.JPG" />';
}

var num=prompt("please enter the number of pices:");
var outpices="";


 for(var i=0;i<num;i++)
 {
    console.log('test '+imagestyle);
    outpices=outpices+imagestyle;

 }
 
 document.write(outpices);

