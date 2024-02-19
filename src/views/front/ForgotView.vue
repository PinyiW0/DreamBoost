<template>
    <div class="container pt-lg-25">
        <h1 class="text-center fs-lg-3 text-primary mb-lg-1">忘記密碼</h1>
        <p class="text-center fs-lg-6 text-primary-light mb-lg-9">Forget the Password</p>
        <div class="row flex-column align-items-center">
            <div class="col-lg-4">
                <p class="fs-lg-6 mb-lg-1 text-dark">重設密碼</p>
                <p class="fs-lg-6 text-grey600 mb-lg-3">請輸入您的註冊帳號時輸入的電子信箱地址，我們會透過電子郵件向您寄送重設密碼的連結。</p>
                <input type="email" placeholder="電子郵件" class="w-100 mb-lg-12 fs-lg-6 p-lg-3 rounded-3 border-primary-light">
                <div class="d-flex align-items-center justify-content-end">
                    <router-link to="member" class="me-lg-6 text-grey600">返回登入頁面</router-link>
                    <button class="btn btn-primary py-lg-3 px-lg-9 text-white">發送重設連結</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

</script>

<style scope>
.text-grey600{
    color: #475487;
}
</style>
