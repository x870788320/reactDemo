
import { getNumArr, freezeObj } from '../common/utils'


/*
allRoles 所有角色数据，数据冻结
showAuth 控制角色显示权限，可以重新定义
*/
export const allRoles = freezeObj({
    normal: {
      name: "normal",
      showAuth: getNumArr(1)
    },
    v1: {
      name: "VIP1",
      showAuth: getNumArr(1)
    },
    v2: {
      name: "VIP2",
      showAuth: getNumArr(2)
    },
    v3: {
      name: "VIP3",
      showAuth: getNumArr(3)
    },
    v4: {
      name: "VIP4",
      showAuth: getNumArr(4)
    },
    v5: {
      name: "VIP5",
      showAuth: getNumArr(5)
    }
})