//your JS code here. If required.
let circle= document.querySelectorAll(".circle");
let current =0;
function updateCircle() {
	circle.forEach((c,i)=>{
		c.classList.toggle("active",i===current);
	})	
}
document.getElementById("next").addEventListener('click',()=>{
	if(current<circle.length-1){
		current++;
		updateCircle();
	}
})
document.getElementById("prev").addEventListener('click',()=>{
	if(current>0)
	{
		current--;
		updateCircle();
	}
})