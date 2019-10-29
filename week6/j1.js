var a=document.getElementById("adduser");
var b=document.getElementById("modal");
function kkk() {
	a.style.display="block";
	b.style.display="block";
}
window.onclick = function(event){
	if (event.target==modal) {
		modal.style.display="none";
	}
}
function r(){
	a.style.display="none";
	b.style.display="none";
}
function add() {

		var k = document.createElement('div');
		
		k.style.display="flex";
		k.style.flexDirection="row";
        k.style.width=1200+'px';
        k.style.height=30+'px';
        k.style.marginTop=20+'px';
        
        k.style.borderBottom="1px solid #888888";

        var x = document.createElement("INPUT");
  		x.setAttribute("type", "checkbox");
  		k.appendChild(x);

  		x.onclick = function(){
  			k.style.boxShadow="0 0 0 1px red";
  		}



  		var check = document.getElementById("C").checked;
  		var ans ="";
		if(check==false){
			ans = "Inactive";
		}else{
			ans = "Active";
		}

		var col = document.getElementById("image").value;

		var t1 = document.createElement('div');
		t1.innerHTML=ans;
		t1.style.width=105+'px';
		k.appendChild(t1);

		var t2 = document.createElement('div');
		t2.innerHTML=document.getElementById("Name").value;
		t2.style.width=200+'px';
		t2.style.textAlign="center";
		k.appendChild(t2);
       
		var t3 = document.createElement('div');
		t3.innerHTML=document.getElementById("Email").value;
		t3.style.width=160+'px';
		t3.style.textAlign="center";
		k.appendChild(t3);
		
		var t4 = document.createElement('div');
		t4.innerHTML=col;
		t4.style.textAlign="center";
		t4.style.width=180+'px';
		k.appendChild(t4);
		
		var t5 = document.createElement('div');
		t5.innerHTML=document.getElementById("Phone").value;
		t5.style.width=200+'px';
		t5.style.textAlign="center";
		k.appendChild(t5);
		
		var t6 = document.createElement('div');
		t6.innerHTML=document.getElementById("Mode").value;
		t6.style.width=123+'px';
		t6.style.textAlign="center";
		
		k.appendChild(t6);

		t7 = document.createElement("img");
		t7.src = "view.png";
		t7.style.height = 22+'px';
		t7.style.width = 22+'px';
		t7.style.paddingLeft = 70+'px';
		k.appendChild(t7);
		
		


	

		var t8 = document.createElement("img");
		t8.src = "delete.png";
		t8.style.height = 20+'px';
		t8.style.width = 20+'px';
		t8.style.paddingLeft = 12+'px';
		t8.onclick = function() {
   			document.getElementById('udali').style.display='block';
   			da.onclick=function(){
   				document.getElementById('udali').style.display='none';
   				k.style.display='none';
   			}
   			net.onclick=function(){
   				document.getElementById('udali').style.display='none';
   			}

   		};		
   		k.appendChild(t8);


		var t9 = document.createElement("img");
		t9.src = "edit.png";
		t9.style.height = 20+'px';
		t9.style.width = 20+'px';
		t9.style.paddingLeft = 12+'px';
		k.appendChild(t9);

		document.getElementById("dd").appendChild(k);

		
}
