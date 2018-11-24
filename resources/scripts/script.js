var svgDocument
var d1 = 1
var d2 = 1
var red = false

function on_load(evt){
	O=evt.target
	svgDocument=O.ownerDocument
	for (i = 1; i < 7; i++) {
		hide("d1_" + i)
		hide("d2_" + i)
	}
	svgDocument.onclick = roll_dice
	roll_dice()
}
function show(id){
   svgDocument.getElementById(id).style.display = "inline"
}

function hide(id){
   svgDocument.getElementById(id).style.display = "none"
}

function roll_dice(){
	if (red){
		red = false
		hide("red_dot")
	} else {
		red = true
		show("red_dot")
	}

	hide("d1_" + d1)
	hide("d2_" + d2)
	d1 = Math.floor((Math.random() * 6) + 1)
	d2 = Math.floor((Math.random() * 6) + 1)
	show("d1_" + d1)
	show("d2_" + d2)
  console.log(d1,d2)
}
