//<![CDATA[

// geturl(nome);

function geturl(nome) {

	var qs = window.location.search;
	if(qs.indexOf("?") != -1){
		if(qs.indexOf(nome) != -1)
			if(qs.indexOf("&",qs.indexOf(nome)) != -1)
				return qs.slice(qs.indexOf(nome) + nome.length +1,qs.indexOf("&",qs.indexOf(nome)));
			else
				return qs.slice(qs.indexOf(nome) + nome.length +1);
	}
	return "";

}

//]]>