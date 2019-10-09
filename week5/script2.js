var myImage=document.getElementById('lamb1');
var imageArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
var imageIndex=1;
var bir=document.getElementById('bir');
var eki	=document.getElementById('eki');
var uw=document.getElementById('uw');
var tort=document.getElementById('tort');
var arr=[bir,eki,uw,tort];
function changeImage1(){
	 myImage.setAttribute("src",imageArray[imageIndex]);
	 if(imageIndex==0){
	 	document.getElementById("soz2").innerHTML = "car-Lamborghini";
	 	document.getElementById("sozder").innerHTML ="<b>Lamborghini</b> is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. ";
	 	var c=imageIndex+1;
	 	for(x of arr){
	 		if(c>4){
	 			c=0;
	 		}
	 		x.setAttribute("src",imageArray[c]);
	 		c++;
	 	}
	 }
	 if(imageIndex==1){
	 	document.getElementById("soz2").innerHTML = "new car-Toyota";
	 	document.getElementById("sozder").innerHTML ="<b>Toyota</b> Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyota's corporate structure consisted of 364,445 employees worldwide[4] and, as of September 2018, was the sixth-largest company in the world by revenue. As of 2017, Toyota is the largest automotive manufacturer.";}
			var c=imageIndex+1;
	 	for(x of arr){
	 		if(c>4){
	 			c=0;
	 		}
	 		x.setAttribute("src",imageArray[c]);
	 		c++;
	 	}
	 if(imageIndex==2){
	 	document.getElementById("soz2").innerHTML = "new car-Ferrari";
	 	document.getElementById("sozder").innerHTML ="<b>Ferrari</b> is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the company's inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed.";
	 		var c=imageIndex+1;
	 	for(x of arr){
	 		if(c>4){
	 			c=0;
	 		}
	 		x.setAttribute("src",imageArray[c]);
	 		c++;
	 	}
	 }
	 if(imageIndex==3){
	 	document.getElementById("soz2").innerHTML = "new car-BMW";
	 	document.getElementById("sozder").innerHTML ="Bayerische Motoren Werke AG, commonly referred to as <b>BMW</b> is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.";
	 var c=imageIndex+1;
	 	for(x of arr){
	 		if(c>4){
	 			c=0;
	 		}
	 		x.setAttribute("src",imageArray[c]);
	 		c++
	 	}
	 }
	 if(imageIndex==4){
	 	document.getElementById("soz2").innerHTML = "new car-Mercedes";
	 	document.getElementById("sozder").innerHTML ="Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the biggest selling premium vehicle brand in the world, having sold 2.31 million passenger cars.";
	var c=imageIndex+1;
	 	for(x of arr){
	 		if(c>4){
	 			c=0;
	 		}
	 		x.setAttribute("src",imageArray[c]);
	 		c++;
	 	}
	 }
	 imageIndex++;
	 if(imageIndex>4){
	 	imageIndex=0;
	 }
}
function changeImage2(){
	 myImage.setAttribute("src",imageArray[imageIndex]);
	 if(imageIndex==0){
	 	document.getElementById("soz2").innerHTML = "car-Lamborghini";
	 	document.getElementById("sozder").innerHTML ="<b>Lamborghini</b> is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.Ferruccio Lamborghini, an Italian manufacturing magnate, founded Automobili Ferruccio Lamborghini S.p.A. in 1963 to compete with established marques, including Ferrari. ";
	 	bir.setAttribute("src",imageArray[1]);
	 	eki.setAttribute("src",imageArray[2]);
	 	uw.setAttribute("src",imageArray[3]);
	 	tort.setAttribute("src",imageArray[4]);
	 	}
	 if(imageIndex==1){
	 	document.getElementById("soz2").innerHTML = "new car-Toyota";
	 	document.getElementById("sozder").innerHTML ="<b>Toyota</b> Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota, Aichi, Japan. In 2017, Toyota's corporate structure consisted of 364,445 employees worldwide[4] and, as of September 2018, was the sixth-largest company in the world by revenue. As of 2017, Toyota is the largest automotive manufacturer.";
	 	bir.setAttribute("src",imageArray[2]);
	 	eki.setAttribute("src",imageArray[3]);
	 	uw.setAttribute("src",imageArray[4]);
	 	tort.setAttribute("src",imageArray[0]);
	 }

	 if(imageIndex==2){
	 	document.getElementById("soz2").innerHTML = "new car-Ferrari";
	 	document.getElementById("sozder").innerHTML ="<b>Ferrari</b> is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo Ferrari in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940. However, the company's inception as an auto manufacturer is usually recognized in 1947, when the first Ferrari-badged car was completed.";
		bir.setAttribute("src",imageArray[3]);
	 	eki.setAttribute("src",imageArray[4]);
	 	uw.setAttribute("src",imageArray[0]);
	 	tort.setAttribute("src",imageArray[1]);
	 }
	 if(imageIndex==3){
	 	document.getElementById("soz2").innerHTML = "new car-BMW";
	 	document.getElementById("sozder").innerHTML ="Bayerische Motoren Werke AG, commonly referred to as <b>BMW</b> is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945.";
	 	bir.setAttribute("src",imageArray[4]);
	 	eki.setAttribute("src",imageArray[0]);
	 	uw.setAttribute("src",imageArray[1]);
	 	tort.setAttribute("src",imageArray[2]);
	 }
	 if(imageIndex==4){
	 	document.getElementById("soz2").innerHTML = "new car-Mercedes";
	 	document.getElementById("sozder").innerHTML ="Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz. In 2018, Mercedes-Benz was the biggest selling premium vehicle brand in the world, having sold 2.31 million passenger cars.";
	 	bir.setAttribute("src",imageArray[0]);
	 	eki.setAttribute("src",imageArray[1]);
	 	uw.setAttribute("src",imageArray[2]);
	 	tort.setAttribute("src",imageArray[3]);
	 }
	 imageIndex--;
	 if(imageIndex<0){
	 	imageIndex=4;
	 }

}