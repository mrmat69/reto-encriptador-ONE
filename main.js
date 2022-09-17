const codes = { a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
const decodes = { ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u" };

function encriptar(str){
	let mistr = str.toLowerCase();
	try{
		if(mistr.length === 0) return ""
		let res = "";
		for(const letter of mistr){
			if (letter in codes) res += codes[letter];
			if (!(letter in codes)) res += letter;
		}
		return res;
	}catch(err){
		console.error(err);
	}
}

function desencriptar(str){
	
	try{
		let res = str.toLowerCase();
		if(res.length === 0) return ""

			res = res.replace(/ai/g, decodes["ai"])
			res = res.replace(/enter/g, decodes["enter"])
			res = res.replace(/imes/g, decodes["imes"])
			res = res.replace(/ober/g, decodes["ober"])
			res = res.replace(/ufat/g, decodes["ufat"])

		return res;
	}catch(err){
		console.error(err);
	}
}
function cubierta(){
	let bol = true;
	if(bol ){
		document.getElementById("shadow-img").style.visibility= "hidden";		
		bol = false;
	}else{
		document.getElementById("shadow-img").style.visibility= "visible";
		bol = true;
	}
}
function mostrarEncriptado(){
	let str = document.getElementById("input-txt").value
	let encriptado = encriptar(str);
	if(encriptado.length != 0) cubierta();
	document.getElementById("output-txt").innerHTML = encriptado
}
function mostrarDesencriptado(){
	let str = document.getElementById("input-txt").value
	let desencriptado = desencriptar(str);
	document.getElementById("output-txt").innerHTML = desencriptado
}
function copy(){
	let text = document.getElementById("output-txt").value;
    navigator.clipboard.writeText(text)
        .then(() => {
          alert('Text copied to clipboard');
        })
        .catch(err => {
          alert('Error in copying text: ', err);
        });
}


