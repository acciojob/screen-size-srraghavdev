//your JS code here. If required.
const widthref= document.querySelector("h1:first-child")
const heightref= document.querySelector("h1:last-child")
addEventListener("resize",(event)=>{
	let width=event.target.innerWidth
	let height=event.target.innerHeight
	widthref.innerText="Width:"+width
	heightref.innerText="Height:"+height


})