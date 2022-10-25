import vnode from './vnode.js'
import createElement from './createElement.js'
import patchVnode from './patchVnode.js'
export default function (oldVnode, newVnode) {
	if (oldVnode.sel === '' || oldVnode.sel === undefined) {
		oldVnode = vnode(
			oldVnode.tagName.toLowerCase(),
			{},
			[],
			undefined,
			oldVnode,
		)
	}
	if (oldVnode.key === newVnode.key && oldVnode.sel === newVnode.sel) {
		patchVnode(oldVnode, newVnode)
	} else {
		// 不是同一个节点
		let newVnodeElm = createElement(newVnode)

		if (oldVnode.elm.parentNode && newVnodeElm) {
			oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
			oldVnode.elm.parentNode.removeChild(oldVnode.elm)
		}
	}
}
