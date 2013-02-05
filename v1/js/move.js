//<![CDATA[
rodando = new Array;
movendo = new Array;

function dellMove(atraso, index){
  if(atraso>0){
    atraso -= 1;
    setTimeout(function() { dellMove(atraso, index); }, 100);
  }
  else window.clearTimeout(movendo[index]);
}

function Move(atraso,src,lado,tf,velo,timer,fixo,index){ //alert(atraso);

//  alert(src.style[lado]);
//  alert("atraso: " + atraso + " src: " + src + " lado: " + lado + " tf: " + tf + " velo: " + velo + " timer: " + timer + " fixo: " + fixo + " index: " + index);
//  alert(rodando[index]);
//  alert(movendo[index]);

  if(rodando[index] == 1) window.clearTimeout(movendo[index]);
  rodando[index] = 0;

  if(atraso>0){
    atraso -= 1;
    setTimeout(function() { Move(atraso,src,lado,tf,velo,timer,fixo,index); }, 100);
  }
  else {
    try{
	tf = parseInt(tf);
	if(!src.id) src = getEl(src);

    if(parseInt(src.style[lado]) < tf) {
      src.style[lado] = parseInt(src.style[lado]) + parseInt(velo) + "px";
      if(parseInt(src.style[lado]) > tf) src.style[lado] = tf + "px";
        else rodando[index] = 1;
      if(fixo && lado == "left") src.style.width = src.style.width - parseInt(velo) + "px";
      if(fixo && lado == "top") src.style.height = src.style.height - parseInt(velo) + "px";
      if(rodando[index] == 1) movendo[index] = setTimeout(function() { Move(atraso,src,lado,tf,velo,timer,fixo,index); }, timer);
      else window.clearTimeout(movendo[index]);
    }
    if(parseInt(src.style[lado]) > tf) {
      src.style[lado] = parseInt(src.style[lado]) - parseInt(velo) + "px";
      if(parseInt(src.style[lado]) < tf) src.style[lado] = tf + "px";
        else rodando[index] = 1;
      if(fixo && lado == "left") src.style.width = src.style.width + parseInt(velo) + "px";
      if(fixo && lado == "top") src.style.height = src.style.height + parseInt(velo) + "px";
      if(rodando[index] == 1) movendo[index] = setTimeout(function() { Move(atraso,src,lado,tf,velo,timer,fixo,index); }, timer);
      else window.clearTimeout(movendo[index]);
    }
    }catch(e){window.clearTimeout(movendo[index]);}
  }
}

//]]>