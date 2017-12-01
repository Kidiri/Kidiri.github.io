function RemoveUnwantedScript(){
    var head=document.getElementsByTagName("script");
    for (var i = head.length; i--; ) {
        var script=head[i];
        if (script.id==="") {
            script.parentNode.removeChild(script);
        }
    }
    var element = document.getElementById("pExecArea");
    if (document.contains(element)) {
        element.parentNode.removeChild(element);
    }
}
