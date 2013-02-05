//<![CDATA[

// <form onsubmit="return formVal(this);">

function formVal(form){
	var f = form.elements , msg="Preencha os campos obrigatorios:", ob = true , cont = 0, email = false;
	for(x=0;x<f.length;x++)
		if(f[x].value == "" && ( f[x].className == "ob" || f[x].className == "obemail" )){
			cont++;
			msg += "\n" + cont + ": " + f[x].id;
			ob=false;
		} else if(f[x].className == "obemail") email = true;
	
	if(ob && email) {
		try {
			ER = new RegExp("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]{2,64}(\.[a-z0-9-]{2,64})*\.[a-z]{2,4}$");
			for(x=0;x<f.length;x++)
				if(f[x].className == "obemail")
					if(!ER.exec(f[x].value)){
						email = false;
						msg = f[x].id + " parece estar incorreto";
					}
		} catch(e) { email = true; }
	} else email = true;
	
	if(ob && email) form.submit();
	else { alert(msg); return false; }
}

function on(src){ src.style.cursor = "pointer"; }

function off(src){ src.style.cursor = "default"; }

function getKey(e) {
	return e.which || event.keyCode;
}

function tipoN(e) {
	var key = getKey(e);
	if((key<48 || key>57) && (key<96 || key>105) && key!=8 && key!=37 && key!=39 && key!=46 && key!=9) return false
	return true
}

function mudaOb(cod){
	document.getElementById("nome"+cod).className == "ob" ? document.getElementById("nome"+cod).className = "" : document.getElementById("nome"+cod).className = "ob";
	document.getElementById("ordem"+cod).className == "ob" ? document.getElementById("ordem"+cod).className = "" : document.getElementById("ordem"+cod).className = "ob";
}

function addLink(local) {
	var idNovo = parseInt(document.getElementById("novo").value) + 1;
	if(idNovo > 5) alert("Apenas 5 itens novos podem ser adicionados por vez");
	else {
		var campo1 = document.createElement("td");
		var campo2 = document.createElement("td");
		var campo3 = document.createElement("td");
		var campo4 = document.createElement("td");
		var campo5 = document.createElement("td");
		var campo6 = document.createElement("td");
		var campo7 = document.createElement("td");
		var linha = document.getElementById("tableadm").insertRow(-1);
		if(local == "links") {
			campo1.innerHTML = "<input name=\"ordem" + "N" + idNovo + "\" id=\"ordem" + "N" + idNovo + "\" type=\"text\" size=\"13\" maxlength=\"2\" value=\"\" class=\"ob\" \/>";
			campo2.innerHTML = "<input name=\"nome" + "N" + idNovo + "\" id=\"nome" + "N" + idNovo + "\" type=\"text\" size=\"34\" value=\"\" class=\"ob\" \/>";
			campo3.innerHTML = "<div align=\"center\"><input type=\"checkbox\" name=\"escondido" + "N" + idNovo + "\" id=\"escondido" + "N" + idNovo + "\" value=\"checkbox\" \/><\/div>";
			campo4.innerHTML = "<input type=\"text\" name=\"imagem" + "N" + idNovo + "\" id=\"imagem" + "N" + idNovo + "\" size=\"18\" value=\"\" class=\"ob\" \/>";
		}
		if(local == "sublinks") {
			campo1.innerHTML = "&nbsp;";
			campo1.className = "sBorda";
			campo2.innerHTML = "<input name=\"ordem" + "N" + idNovo + "\" id=\"ordem" + "N" + idNovo + "\" type=\"text\" size=\"13\" maxlength=\"2\" value=\"\" class=\"ob\" \/>";
			campo3.innerHTML = "<input name=\"nome" + "N" + idNovo + "\" id=\"nome" + "N" + idNovo + "\" type=\"text\" size=\"25\" value=\"\" class=\"ob\" \/>";
			campo4.innerHTML = "<div align=\"center\"><input name=\"escondido" + "N" + idNovo + "\" type=\"checkbox\" id=\"escondido" + "N" + idNovo + "\" value=\"checkbox\" \/><\/div>";
			campo5.innerHTML = "<select name=\"tipo" + "N" + idNovo + "\" id=\"tipo" + "N" + idNovo + "\"><option value=\"0\" selected=\"selected\">texto<\/option><option value=\"1\">link<\/option><option value=\"3\">texto pre.<\/option><option value=\"2\">Menu Esq.<\/option><option value=\"4\">Menu Cont. 1<\/option><option value=\"5\">Menu Cont. 2<\/option><\/select>";
			campo6.innerHTML = "<input type=\"text\" name=\"imagem" + "N" + idNovo + "\" id=\"imagem" + "N" + idNovo + "\" size=\"13\" value=\"\" \/>"
			campo7.innerHTML = "&nbsp;";
			campo7.className = "sBorda";
		}
		if(local == "conteudo") {
			campo1.innerHTML = "<input name=\"ordem" + "N" + idNovo + "\" id=\"ordem" + "N" + idNovo + "\" type=\"text\" size=\"14\" maxlength=\"2\" value=\"\" class=\"ob\" \/>";
			campo2.innerHTML = "<input name=\"nome" + "N" + idNovo + "\" id=\"nome" + "N" + idNovo + "\" type=\"text\" size=\"40\" value=\"\" class=\"ob\" \/>";
			campo3.innerHTML = "&nbsp;";
			campo4.innerHTML = "<select name=\"tipo" + "N" + idNovo + "\" id=\"tipo" + "N" + idNovo + "\"><option value=\"0\" selected=\"selected\">texto<\/option><option value=\"1\">link<\/option><option value=\"3\">precarregado<\/option><\/select>";
			campo5.innerHTML = "<td class=\"sBorda\"><\/td>";
			campo5.className = "sBorda"
		}
			
		linha.appendChild(campo1);
		linha.appendChild(campo2);
		linha.appendChild(campo3);
		linha.appendChild(campo4);
		if(local == "sublinks") {
			linha.appendChild(campo5);
			linha.appendChild(campo6);
			linha.appendChild(campo7);
		}
		if(local == "conteudo") {
			linha.appendChild(campo5);
		}
		
		document.getElementById("novo").value = idNovo;
	}
}
function confirmaExcluir(){
	if(confirm("Deseja mesmo Excluir esse item?")){
		document.getElementById("fun").value="dell";
		document.getElementById("adm").submit();
	}
}

//]]>