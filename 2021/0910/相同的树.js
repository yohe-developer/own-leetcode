
function sameTree(tree1, tree2){
    if(tree1===null && tree2===null) return true
    else if(tree1===null && tree2!==null) return false
    else if(tree1!==null && tree2===null ) return  false
    else if(tree1.val !== tree2.val) return false
   return  sameTree(tree1.left, tree2.left) && sameTree(tree1.right, tree2.right)

}