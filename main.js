var pageCounter = 1;
var animalContainer = document.getElementById("animal-info"); 
var btn=document.getElementById("btn");

 btn.addEventListener("click",function(){
  var
ourRequest = new XMLHttpRequest(); 
ourRequest.open('GET' ,'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json ');
ourRequest.onload= function(){
     var ourData=JSON.parse(ourRequest.responseText);  
        renderData(ourData); };
ourRequest.send();
pageCounter++;
if (pageCounter >3){

	btn.style.display ="none";
} });

function renderData(data){
var htmlString ="";
for (var i=0; i< data.length; i++) {
	htmlString += "<p>" + data[i].name + "is name" + data[i].species + "that likes ";

	for(var m=0 ;m< data[i].foods.likes.length; m++){
		if(m==0){
			htmlString += data[i].foods.likes[m];
		}
		else{
			htmlString += " and " + data[i].foods.likes[m];
		}
	}
	htmlString += "</p>";
}
animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
