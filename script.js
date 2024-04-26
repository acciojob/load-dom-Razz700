//your JS code here. If required.
document.addEventListener("DOMContentLoaded",()=>{
	let a=document.createElement("p");
	a.textContent="DOM load success";
	document.querySelector("body").appendChild(a);
})