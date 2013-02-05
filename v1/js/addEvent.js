//<![CDATA[

function addEvent(obj, evType, fn){
	//if(obj != window) obj = document.getElementById(obj);
	//alert(obj);
	
    if(obj.addEventListener){
        obj.addEventListener(evType, fn, false);
        return true;
    }
	else
		if (obj.attachEvent)
			return r = obj.attachEvent('on'+evType, fn);
		else {
			try{
				eval(obj.id + ".on" + evType + " = function(e) { " + fn + " }");
				return true;
			}catch(e){
				return false;
			}
		}
}

//]]>