//your JS code here. If required.
addEventListener("resize",(event)=>{
	const fg = document.getElementById("hf")
	const children= fg.children
	children[1].innerText=(event.target.innerHeight)
	children[0].innerText=(event.target.innerWidth)


})