/**
 * @param {Array：参加游戏人员的名字} nameList
 * @param {number：数到这个数字的人就淘汰} number
 */
function passGame(nameList, number) {
	let queue = []

	for (let i = 0; i < nameList.length; i++) {
		queue.push(nameList[i])
	}

	while (queue.length > 1) {
		for (let i = 0; i < number - 1; i++) {
			queue.push(queue.shift())
		}
		queue.shift()
	}
	return {
		name: queue[0],
		index: nameList.indexOf(queue[0]) + 1
	}
}

//	创建玩游戏的人
const stus = [
	"胡一菲",
	"曾小贤",
	"吕子乔",
	"陈美嘉",
	"关谷神奇",
	"唐悠悠",
	"陆展博",
	"林宛瑜",
	"张伟",
	"诸葛大力",
	"咖喱将",
	"赵海棠"
]

const result = passGame(stus, 3)
console.log(result)
