/**
 * IntersectionObserve 是一种异步观察目标元素与祖先元素或顶级文档窗口的交叉方法
 * @param node
 * @param src
 */
function lazyImg(node, src){

    let lazyImgObserver = new IntersectionObserver((entries, observe )=> {
        entries.forEach(entry=>{
            let img = entry.target
            if(entry.intersectionRatio){
                img.src = src
                lazyImgObserver.unobserve(node)
            }
        })
    })
}
