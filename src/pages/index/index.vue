<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'
import { loginRequest } from '@/services/apis/auth'
import MuiButton from '@/components/mui/MuiButton.vue'
import MuiInput from '@/components/mui/MuiInput.vue'
import Link from '@/components/mui/Link.vue'
import Alert from '@/components/mui/Alert.vue'
import NavigationBar from '@/components/NavigationBar.vue'

let form = reactive({
  studentId: '',
  password: '',
})

let errors = reactive({
  studentId: '',
  password: '',
})

let loading = $ref(false)
let errorData = $ref(false)

const mutation = useMutation(loginRequest, {
  onSuccess(data) {
    console.log(data)
  },
  onError(error) {
    errorData = true
    console.log(error)
  },
  onSettled() {
    loading = false
  },
})

const validate = (validateId = true, validateAll = true) => {
  const validateStudentId = () => {
    if (form.studentId === '') {
      errors.studentId = '学号不能为空'
    } else if (form.studentId?.length !== 10) {
      errors.studentId = '学号长度是10位'
    } else {
      errors.studentId = ''
    }
  }

  const validatePassword = () => {
    if (form.password === '') {
      errors.password = '密码不能为空'
    } else if (form.password?.length < 6) {
      errors.password = '密码长度至少为6位'
    } else {
      errors.password = ''
    }
  }

  if (validateAll) {
    validateStudentId()
    validatePassword()
  } else if (validateId) {
    validateStudentId()
  } else {
    validatePassword()
  }
}

const onSubmit = useDebounceFn(() => {
  validate()
  const isValidated = Object.keys(errors).every(key => !errors[key]?.length)

  if (isValidated) {
    loading = true

    setTimeout(() => {
      mutation.mutate(form)
    }, 1000)
  }
}, 200)
</script>

<template>
  <meta title="登录页面">
  <NavigationBar />
  <div grid gap4 p5>
    <header grid gap4>
      <img src="@/static/logo.png" rounded-full h-100px w-100px>
      <div grid gap3>
        <p font-bold text-xl>
          登录HFUTSpace
        </p>
        <p text-holder text-xs>
          请输入信息门户账号与密码
        </p>
      </div>
      <div gap2>
        <Alert variant="info">
          密码输错太多次是会被教务暂时冻结五分钟的哦
        </Alert>
      </div>
      <div v-if="errorData" gap2>
        <Alert variant="info">
          密码输错太多次是会被教务暂时冻结五分钟的哦
        </Alert>
      </div>
    </header>
    <div grid gap5>
      <MuiInput
        v-model="form.studentId"
        type="number"
        placeholder="请输入你的学号"
        :error="!!errors.studentId?.length"
        :helper-text="errors.studentId"
        @input="validate(true, false)"
      />
      <MuiInput
        v-model="form.password"
        type="password"
        placeholder="请输入你的信息门户密码"
        :error="!!errors.password?.length"
        :helper-text="errors.password"
        @input="validate(false, false)"
      />
      <div flex justify-end>
        <Link underline href="https://cas.hfut.edu.cn/cas/forget?service=https://cas.hfut.edu.cn/cas/oauth2.0/callbackAuthorize?client_id=BsHfutEduPortal&redirect_uri=https%3A%2F%2Fone.hfut.edu.cn%2F&response_type=code&client_name=CasOAuthClient">
          忘记密码了？点我找回
        </Link>
      </div>
      <MuiButton :loading="loading" @click="onSubmit">
        登录
      </MuiButton>
    </div>
  </div>
</template>

<style>
.uni-easyinput__content {
  display: none;
}
</style>
