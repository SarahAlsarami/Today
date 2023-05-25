function UpdateRace(e){
    
    var bg_parent = document.getElementById("pb-parent");
    var k = 0;
    var i= 0;
    var bg_children= bg_parent.children;
    var sortedwidth =[];
    var unsorted =[];
    for (const child of bg_children) {
        sortedwidth.push(child.style.width);
        unsorted.push(child.style.width);
    } 
    sortedwidth.sort(); 

    while (k != bg_children.length) {
        if (unsorted[i] == sortedwidth[k]){

            bg_children[i].style.order = k+1;
            i=0;
            k++;
        } else{
            if(k == bg_children.length){
                k++;
            }
            i++;
        }
    }
}