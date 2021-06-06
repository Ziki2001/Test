<template>
    <div class="login">
        <p>登录</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="login('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'login',
        data() {
            return {
                ruleForm: {
                    name:'',
                    password:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入用户名', trgger: 'blur' },
                        { min: 3, max: 18, message: '长度在3到18个字符',  trigger: 'blur'}
                    ],
                    password:[
                        { required: true, message: '请输入密码', trgger: 'blur' },
                        { min: 3, max: 18, message: '长度在3到18个字符',  trigger: 'blur'}
                    ]
                }        
            }
        },
        methods: {
            login() {
                let {name,password} = this.ruleForm;
                this.$http({
                    method:'post',
                    url:'/get_login',
                    data:{user:name,password:password}
                }).then(res=>{
                    console.log(res);
                    let {code} =res.data;
                    // 成功就跳转
                    if(code =='200') {
                        sessionStorage.srtItem('username',name);
                        this.$router.push('/home');
                    }
                })
                
            }
        }
    }
</script>