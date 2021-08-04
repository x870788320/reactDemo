
//单例模式
export const singvGradeInfo = function(fn) {
    let result;
    return function() {
        return result || (result = fn.apply(this, arguments)); //作用是arguments是参数
    }
  }




  //获得一个数字数组
export const getNumArr = ( end, start = 1 ) =>  Array.apply(null, { length: (end - start + 1) }).map((m,index)=> String(index + start));

//冻结数据
export const freezeObj = obj => {
    Object.seal(obj)
    Object.freeze(obj)
    Object.keys(obj).map(key => (typeof obj[key] === "object") && freezeObj(Object(obj[key])))
    return obj
}












