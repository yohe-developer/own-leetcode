/**
 * Created by aio on 2023/2/24 19:51
 */

/**
 * 输入：s = "abaccdeff"
 * 输出：'b'
 */
function firstUniqChar(s: string): string {
  let arr: any = [];

  for (let i = 0; i < s.length; i++) {
    const code = s.charCodeAt(i);
    if (arr[code] !== undefined) {
      arr[code] = null;
    } else {
      arr[code] = i;
    }
  }

  let min = Number.MAX_VALUE
  arr.map((item:any, index)=>{
      if(item && min > item){
            min =
      }
  })

  const result = arr.filter((item:any) => !!item);
  console.log(result, "arr");
}
firstUniqChar("abaccdeff");
