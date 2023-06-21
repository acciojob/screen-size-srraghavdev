//your JS code here. If required.
const widthref= document.getElementsByTagName("h1")[0]
const heightref= document.getElementsByTagName("h1")[1]
addEventListener("resize",(event)=>{
	let width=event.target.innerWidth
	let height=event.target.innerHeight
	widthref.innerText="Width:"+width
	console.log(widthref)
	heightref.innerText="Height:"+height
})