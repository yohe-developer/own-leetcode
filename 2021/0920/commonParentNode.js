

function commonParentNode(oNode1, oNode2) {
    let parent = oNode1.parentNode
    while (parent){
        if(parent.contains(oNode2)){
            return parent
        }
        parent = oNode1.parentNode
    }
    return false
}