//<![CDATA[

//<a href="index.php" title="Link de Exemplo" rel="externo">

function createExternalLinks(msg) {
    if(document.getElementsByTagName) {
        var a = document.getElementsByTagName('a');
        for(var i=0; i<a.length; i++) {
            if(a[i].getAttribute("href") && a[i].getAttribute('rel')=='externo') {
                a[i].target = '_blank';
                a[i].title += msg;
            }
        }
    }
}

//]]>