<script setup lang="ts">
import { $ref } from 'vue/macros'
import MuiButton from '@/components/MuiButton.vue'
import MuiInput from '@/components/MuiInput.vue'
import Link from '@/components/Link.vue'
import Alert from '@/components/Alert.vue'
import NavigationBar from '@/components/NavigationBar.vue'

let form = $ref({
  studentId: '',
  password: '',
})

let studentId = $ref('')

watchEffect(() => {
  console.log(studentId)
})
</script>

<template>
  <meta title="登录页面" />
  <NavigationBar />
  <div grid gap4 p5>
    <header grid gap4>
      <img src="@/static/logo.png" rounded-full h-100px w-100px />
      <div grid gap3>
        <p font-bold text-xl>登录HFUTSpace</p>
        <p text-holder text-xs>请输入信息门户账号与密码</p>
      </div>
      <div gap2>
        <Alert>密码输错太多次是会被教务暂时冻结五分钟的哦</Alert>
        <Alert>没有教务系统是不能登入的哦</Alert>
      </div>
    </header>
    <div grid gap5>
      <MuiInput v-model="studentId" type="number" placeholder="请输入你的学号" />
      <MuiInput v-model="form.password" type="password" placeholder="请输入你的信息门户密码" />
      <div flex justify-end>
        <Link href="">忘记密码了？点我找回</Link>
      </div>
      <MuiButton>登录</MuiButton>
    </div>
  </div>
</template>

<style>
.uni-easyinput__content {
  display: none;
}
</style>
