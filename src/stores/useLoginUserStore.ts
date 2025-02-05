import { defineStore } from 'pinia'
import { ref } from 'vue'
import {getLoginUserUsingGet} from "@/api/userController.ts";

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })


  async function fetchLoginUser() {
    //通过openapi直接生成的代码直接使用，拿到返回的值
    const res = await getLoginUserUsingGet();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }
    //开发前暂时使用的代码
    // setTimeout(()=>{
    //   loginUser.value = {username:"测试用户",id:1}
    // },2000)
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, setLoginUser, fetchLoginUser }
})
