//your JS code here. If required.
const widthref= document.getElementsByTagName("h1")[0]
const heightref= document.getElementsByTagName("h1")[1]
let width=window.innerWidth
let height=window.innerHeight
widthref.innerText="Width:"+width
heightref.innerText="Height:"+height
addEventListener("resize",()=>{
	let width=window.innerWidth
	let height=window.innerHeight
	widthref.innerText="Width:"+width
	console.log(widthref)
	heightref.innerText="Height:"+height
})