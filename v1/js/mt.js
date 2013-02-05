//<![CDATA[

var itemMenu = "itemMenu1";
var optMenu = "itemMenu1";
var telax = screen.width /2;
var telay = screen.height /2;
var optMenuLeft;
var firstclickLink = false;
var clickLink = true;
var letterMove = new Array;
var p = new Array(4);
var cor = new Array;
var conteudo = new Array(6);
var nn = 1;
var atraso = new Array;

// MT = Mostra Tela

addEvent(window, "load", inicial);

function inicial(){
	if(geturl("js") != "off") MTInicial();
}

function escondeTela(){
	if(geturl("js") != "off") {
		getEl("corpo").style.display = "none";
		getEl("javascript").style.display = "block";
	}
}

function MTInicial(){
	document.title = "           <!-- William \/\/-->        ";
	createExternalLinks("");
	getEl("filtros").href += (ie)?"iefiltros.css":"fxfiltros.css";
	for(var x =1;x<6;x++){
		conteudo[x] = new Array(5);
		conteudo[x][0] = getEl("c" + x).className.split(",")[0];
		conteudo[x][1] = getEl("c" + x).innerHTML.replace(/u l u/g, "");
		if(ie) conteudo[x][1] = conteudo[x][1].replace(/<FIELDSET>/g, "").replace(/<\/FIELDSET>/g, ""); // COMO EU ODEIO O  IE .......
		conteudo[x][2] = parseInt(getEl("c" + x).className.split(",")[1]);
		conteudo[x][3] = parseInt(getEl("c" + x).className.split(",")[2]);
		conteudo[x][4] = getEl("c" + x).className.split(",")[3];
	}
	var qs = geturl("id");
	if( qs == "" || !(qs > 0 && qs < 6) ){
		getTag("body")[0].innerHTML="";
		getTag("body")[0].innerHTML="<div id='divPlay'><div align='center'><h2>&lt;!--&nbsp;&nbsp;William&nbsp;&nbsp;\/\/--&gt;<\/h2><\/div><\/div>";
		var s = getEl("divPlay").style;
		s.top = (parseInt(telay) - 200) + "px";
		s.left = (parseInt(telax) - 150) + "px";
		getEl("divPlay").innerHTML+="<div id='btnPlay'><a href='#' onclick='MTIndex()'><b>Entrar</b></a></div>";
		getEl("divPlay").innerHTML+="<div id='btnPlayDef'><a href='http://willgm.com/?js=off'><img src='img/geral/deficiente.gif' alt='link para pessoas com deficiencia'/></a></div>";
	}
	else MTLink(parseInt(qs));
}

function MTLink(nlink) {
	MTComponentes();
	
	getEl("divEfeito").style['width'] = "600px";
	getEl("itemMenu1").style['top'] = -70 + "px";
	getEl("itemMenu2").style['top'] = "30px";
	getEl("itemMenu3").style['top'] = "30px";
	getEl("itemMenu4").style['top'] = "30px";
	getEl("itemMenu5").style['top'] = "30px";
	getEl("divMovel").style['left'] = telax -110 + "px";
	
	ArrayMenu();
	
	degradeTitulo(true);
	
	link(getEl("itemMenu" + nlink), nlink);
}

function MTIndex(){
	
	blockclicklink(40);
	
	MTComponentes();
	
	getEl("imgLink").innerHTML = "<img src='img/home2.jpg' />";
    getEl("divMovel").style['left'] = telax -110 + "px";
	getEl("divEfeito").style['width'] = 0 + "px";

	getEl("itemMenu1").style['top'] = -70 + "px";
	getEl("itemMenu2").style['top'] = -70 + "px";
	getEl("itemMenu3").style['top'] = -70 + "px";
	getEl("itemMenu4").style['top'] = -70 + "px";
	getEl("itemMenu5").style['top'] = -70 + "px";
	
	Move(0,"itemMenu2","top",30,2,10,false,100);
	Move(3,"itemMenu3","top",30,2,10,false,101);
	Move(6,"itemMenu4","top",30,2,10,false,102);
	Move(9,"itemMenu5","top",30,2,10,false,103);
	Move(14,"divEfeito","width",600,6,10,false,110);
	Move(26,"divConteudo","height",conteudo[1][0],4,10,false,105);
	getEl("divLinkMenu").style['left'] = parseInt(getEl("itemMenu3").style['left']) + "px";
	
	letter("H.o.m.e", getEl("divNomeLink"), 0, 2);
	
	geraAtraso(34, "getEl('divTexto').innerHTML = conteudo[1][1]", 10, false);
	geraAtraso(34, "getEl('divTexto').style['marginLeft'] = parseInt(conteudo[1][2]) + 'px'", 11, false);
	geraAtraso(34, "degradeTextoPreto()", 12, false);
	geraAtraso(25, "ArrayMenu()", 13, false);
	//geraAtraso(30, "getEl('divTexto').style['marginLeft'] = parseInt(conteudo[1][2])", 14, false);
	
	geraAtraso(50, "degradeTitulo(true)", 69, false);
}

function MTComponentes(){
    getTag("body")[0].innerHTML="";
    getTag("body")[0].innerHTML+="<div id='divTitle' onselectstart='return false;'>&lt;!--&nbsp;William&nbsp;\/\/--&gt;</div>";
    getTag("body")[0].innerHTML+="<div id='divMovel'></div>";
    getTag("body")[0].innerHTML+="<div id='itemMenu1' class='borda1' onclick='link(this, 1);'></div>";
    getTag("body")[0].innerHTML+="<div id='itemMenu2' class='borda1' onclick='link(this, 2);'></div>";
    getTag("body")[0].innerHTML+="<div id='itemMenu3' class='borda1' onclick='link(this, 3);'></div>";
	getTag("body")[0].innerHTML+="<div id='itemMenu4' class='borda1' onclick='link(this, 4);'></div>";
    getTag("body")[0].innerHTML+="<div id='itemMenu5' class='borda1' onclick='link(this, 5);'></div>";
	getTag("body")[0].innerHTML+="<div id='divEfeito'></div>";
    getTag("body")[0].innerHTML+="<div id='imgLink'></div>";
	getTag("body")[0].innerHTML+="<div id='divLinkMenu'></div>";
	getTag("body")[0].innerHTML+="<div id='divNomeLink'></div>";
	getTag("body")[0].innerHTML+="<div id='divConteudo'></div>";
	getEl('divConteudo').innerHTML = "<div id='divTexto'><div>";
    getEl("itemMenu1").innerHTML = "<img onmouseout=\"fora(this)\" onmouseover=\"sobreMenu(getEl(\'itemMenu1\'), this)\" src=\"img/home.jpg\" />";
	getEl("itemMenu2").innerHTML = "<img onmouseout=\"fora(this)\" onmouseover=\"sobreMenu(getEl(\'itemMenu2\'), this)\" src=\"img/cv.jpg\" />";
    getEl("itemMenu3").innerHTML = "<img onmouseout=\"fora(this)\" onmouseover=\"sobreMenu(getEl(\'itemMenu3\'), this)\" src=\"img/portifolio.jpg\" />";
	getEl("itemMenu4").innerHTML = "<img onmouseout=\"fora(this)\" onmouseover=\"sobreMenu(getEl(\'itemMenu4\'), this)\" src=\"img/caneta.jpg\" />";
    getEl("itemMenu5").innerHTML = "<img onmouseout=\"fora(this)\" onmouseover=\"sobreMenu(getEl(\'itemMenu5\'), this)\" src=\"img/ancora.jpg\" />";
	getEl("divTitle").style['left'] = telax -410 + "px";
    getEl("divMovel").style.top = 25 + "px";
	getEl("divMovel").style.width = 64 + "px";
	getEl("divMovel").style.height = 64 + "px";
    getEl("divConteudo").style['left'] = telax -375 + "px";
    getEl("divConteudo").style['height'] = 0 + "px";
	getEl("divEfeito").style['left'] = telax -255 + "px";
	getEl("divNomeLink").style['left'] = telax -200 + "px";
    getEl("itemMenu1").style['left'] = telax -0 + "px";
	getEl("itemMenu2").style['left'] = telax -105 + "px";
	getEl("itemMenu3").style['left'] = telax +10 + "px";
	getEl("itemMenu4").style['left'] = telax +130 + "px";
    getEl("itemMenu5").style['left'] = telax +245 + "px";
	getEl("imgLink").style['left'] = telax -330 + "px";
}

function sobreMenu(src, sobre){

    cord = parseInt(src.style['left']) - 5;
    cord += "";
	
	if (optMenu != (src.id + "") && clickLink) { //alert("left: " + parseInt(src.style['left']) + " opições: " + (telax -205) + ", " + (telax -90) + ", " + (telax +30) + ", " + (telax +145) );
		if (itemMenu != (src.id + "")){
			Move(0,"divMovel","left",cord,6,10,false,1);
			itemMenu = src.id + "";
		}
	  if(parseFloat(src.style['left']) != (telax -105) && parseFloat(src.style['left']) != (telax +10) && parseFloat(src.style['left']) != (telax +130) && parseFloat(src.style['left']) != (telax +245))
		getEl("divLinkMenu").style['left'] = optMenuLeft;
	  else
		getEl("divLinkMenu").style['left'] = src.style['left'];
	
	  if(getEl("divLinkMenu").style.visibility == "visible") window.clearTimeout(letterMove[1]);
	  else getEl("divLinkMenu").style.visibility = "visible";

	  if(src.id == "itemMenu1") letter("h.o.m.e", getEl("divLinkMenu"), 0, 1);
	  if(src.id == "itemMenu2") letter("c.u.r.r.i.c.u.l.o", getEl("divLinkMenu"), 0, 1);
	  if(src.id == "itemMenu3") letter("p.o.r.t.f.o.l.i.o", getEl("divLinkMenu"), 0, 1);
	  if(src.id == "itemMenu4") letter("c.o.n.t.a.t.o", getEl("divLinkMenu"), 0, 1);
	  if(src.id == "itemMenu5") letter("l.i.n.k.s", getEl("divLinkMenu"), 0, 1);
	  
	   sobre.style.cursor = 'pointer';
	   
	}

}

function ArrayMenu(){
	var c = 0;
	for(x=1;x<=5;x++){
		if(parseInt(getEl("itemMenu"+x).style['top']) > 0){
			p[c] = parseInt(getEl("itemMenu"+x).style['left']);
			c++;
		}
		//alert("( " + (parseInt(getEl("itemMenu"+x).style['top']) > 0) + " ) - p[" + (x - 1) + "] = " + p[x - 1]);
	}
}

function fora(src){
	src.style.cursor = 'default';
	getEl("divLinkMenu").style.visibility = "hidden";
	window.clearTimeout(letterMove[1]);
}

function letter(le, src, i, index) { //alert("src = " + src + " e le = "+ le + " e i =" + i);
	
	if(i==0) src.innerHTML = "";
	
	if(i >= le.split(".").length) {
		window.clearTimeout(letterMove[index]);
	}
	else{
		src.innerHTML += le.split(".")[i];
		i++;
		letterMove[index] = setTimeout(function() { letter(le, src, i, index); }, 100);
	}
}

function link(src, n) {

	if (optMenu != src.id && clickLink) {
		optMenuLeft = parseInt(src.style['left']);
		var img = achaImg(n);
		if(src.id != "itemMenu1") getEl("itemMenu1").className='borda1';
		if(src.id != "itemMenu2") getEl("itemMenu2").className='borda1';
		if(src.id != "itemMenu3") getEl("itemMenu3").className='borda1';
		if(src.id != "itemMenu4") getEl("itemMenu4").className='borda1';
		if(src.id != "itemMenu5") getEl("itemMenu5").className='borda1';
		
		src.className='borda2';
		
		var c = 0;
		var cord = parseFloat(src.style['left']) - 5;
		
		
		Move(0,src,"top",-80,4,10,false,15);
		var c = 0;
		for(x=1;x<=5;x++){
			if(p[c] == (cord+5))
				itemMenu = getEl("itemMenu"+x).id;
				
			if(getEl("itemMenu"+x).className == "borda1" && ("itemMenu"+x) != optMenu ){
				if(firstclickLink){
					dellMove(0,(x+5));
					dellMove(0,(x+7));
				}
				Move(0,"itemMenu"+x,"left",p[c],2,10,false,(x+5));
				Move(0,"itemMenu"+x,"top",30,2,10,false,(x+7));
				c++;
			}
			else if( ("itemMenu"+x) == optMenu ){
					if(firstclickLink) dellMove(0,(x+5));
					getEl("itemMenu"+x).style['left'] = p[c] +"px";
					Move(0,"itemMenu"+x,"top",30,2,10,false,(x+5));
					c++;
				}
		}
		Move(0,"divMovel","left",cord,6,10,false,1);
		
		if(ie)blockclicklink(15);
		else blockclicklink(20);
		
		optMenu = src.id;
		getEl("divLinkMenu").style.visibility = "hidden";
		window.clearTimeout(letterMove[1]);
		
		getEl("imgLink").innerHTML = "<img src='img/" + img + "2.jpg' />";
		
		if(firstclickLink) window.clearTimeout(letterMove[2]);
		
		if(n==1) letter("H.o.m.e", getEl("divNomeLink"), 0, 2);
		if(n==2) letter("C.u.r.r.í.c.u.l.o", getEl("divNomeLink"), 0, 2);
		if(n==3) letter("P.o.r.t.f.ó.l.i.o", getEl("divNomeLink"), 0, 2);
		if(n==4) letter("C.o.n.t.a.t.o", getEl("divNomeLink"), 0, 2);
		if(n==5) letter("L.i.n.k.s", getEl("divNomeLink"), 0, 2);
		
		if(firstclickLink){
			dellMove(0,34);
			dellMove(0,35);
			dellMove(0,36);
			dellMove(0,37);
		}
		else{
			dellMove(0,100);
			dellMove(0,101);
			dellMove(0,102);
			dellMove(0,103);
			dellMove(0,104);
			dellMove(0,105);
		}
		degradeTextoBranco()
		geraAtraso(5, "getEl('divTexto').innerHTML = ''", false);
		if(ie){
			Move(5,"divConteudo","height",0,8,10,false,35);
			dellMove(13,35);
			Move((parseInt(conteudo[nn][0]) > 1000)?30:18,"divConteudo","height",conteudo[n][0],5,10,false,37);
		}
		else{
			Move(5,"divConteudo","height",0,8,10,false,35);
			dellMove(17,35);
			Move(23,"divConteudo","height",conteudo[n][0],5,10,false,37);
		}
		dellAtraso(nn);
		nn = n;
		geraAtraso(30, "getEl('divTexto').innerHTML = conteudo[" + n + "][1]", n, true);
		geraAtraso(30, "getEl('divTexto').style['marginLeft'] = parseInt(conteudo[" + n + "][2]) + 'px'", 8, true);
		geraAtraso(30, "getEl('divTexto').style['marginRight'] = parseInt(conteudo[" + n + "][3]) + 'px'", 8, true);
		if(conteudo[n][4] == "true") geraAtraso(31, "degradeTextoPreto()", 9, true);
		else {
			getEl("divConteudo").style['color'] = "#000000";
		}
		firstclickLink = true;
	}
	
}

function blockclicklink(atraso){
	if(atraso>0){
		clickLink = false;
		atraso -= 1;
		setTimeout(function() { blockclicklink(atraso); }, 100);
	}
	else clickLink = true;
}

function achaImg(n) {
	if(n==1) return "home";
	if(n==2) return "cv";
	if(n==3) return "portifolio";
	if(n==4) return "caneta";
	if(n==5) return "ancora";
}

hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
function converteHexadecimal(num){
    var hexaDec = Math.floor(num/16)
    var hexaUni = num - (hexaDec * 16)
    return hexadecimal[hexaDec] + hexadecimal[hexaUni]
}

function degradeTitulo(fase) {
	dellDegrade(1);
	dellDegrade(2);
	if(fase) degradeCor("divTitle", false, 240, (ie)?150:110, 1, (ie)?20:1, 1);
	else degradeCor("divTitle", true, (ie)?150:110, 255, 1, (ie)?20:1, 1);
	cor[2] = setTimeout(function() { degradeTitulo(!fase); }, (ie)?2500:2000);

}

function degradeTextoPreto(){
	degradeCor("divConteudo", false, 255, -1, 1, 1, 0)
}

function degradeTextoBranco(){
	degradeCor("divConteudo", true, 0, 255, 10, 1, 0)
}

function dellDegrade(i){
	window.clearTimeout(cor[i]);
}

function degradeCor(src, soma, init, fim, qt, atraso, i){
	init = (soma)?(init + qt):(init - qt);
	var hexa = converteHexadecimal(init);
	if(hexa.indexOf("undefined") == -1){
		
		getEl(src).style['color'] = "#" + hexa + hexa + hexa;
		try{ if(src == "divConteudo") getEl("contato").style['color'] = "#" + hexa + hexa + hexa; }
		catch(e){}
		
		if(soma){
			if (init < fim)
				cor[i] = setTimeout(function() { degradeCor(src, soma, init, fim, qt, atraso, i); }, atraso)
		}
		else{
			if (init > fim)
				cor[i] = setTimeout(function() { degradeCor(src, soma, init, fim, qt, atraso, i); }, atraso);
		}
	}
}

function mudaFiltro(src) {
	if(ie)
		if(src.className == "filtro")
			src.className = "filtro2";
		else
			src.className = "filtro";
}

function dellAtraso(i){
	window.clearTimeout(atraso[i]);
}

function geraAtraso(atraso, funcao, i, esp){
	if(atraso>0 || esp){
		if(esp)
			if(parseInt(getEl("divConteudo").style['height']) == conteudo[nn][0])
				esp = false;
		if(atraso>0) atraso --;
		atraso[i] = setTimeout(function() { geraAtraso(atraso, funcao, i, esp); }, 100);
	}
	else{
		window.clearTimeout(atraso[i]);
		eval(funcao);
	}
}

//]]>