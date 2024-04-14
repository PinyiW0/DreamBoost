<template>
  <main>
    <!-- 指定專案資訊區 -->
    <section class="container pt-19">
      <div class="row gx-0 gx-lg-8 d-flex justify-content-center align-items-center align-items-lg-stretch">
        <div class="col-12 col-lg-4 mb-8 mb-lg-0">
          <img
            src="https://fakeimg.pl/416x234/"
            class="img-fluid h-100 rounded-3"
            alt="頭貼">
        </div>
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-lg-between mt-2">
          <div class="mb-4 mb-lg-0">
            <span class="badge bg-primary rounded-pill mb-2"><p class="fs-5 fw-normal mb-0 py-1 px-1">健康生活</p></span>
            <h1 class="fs-3 text-primary-dark">CodeGuardian - 工程師顧肝必備良品：LiverCare</h1>
            <div class="d-flex align-items-center">
              <img
                src="https://fakeimg.pl/36x36/"
                class="img-fluid rounded-circle me-3"
                alt="頭貼">
              <p class="fs-lg-6 mb-0">發起人：樂樂許願池</p>
            </div>
          </div>
          <div>
            <p class="text-gray-600 mb-2">專案時間：2024.02.14 12 : 00 ~ 2024.03.10 23 : 59</p>
            <div class="d-flex align-items-end">
              <p class="fs-3 fw-bold lh-1 text-danger mb-0 me-3">NT $ 2,250,005</p>
              <p class="text-gray-600 mb-0">/目標 NT$ 100,000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 常見問答區 -->
    <section class="faq py-9 py-md-17" id="faq">
      <div class="container">
        <div class="row d-flex flex-column justify-content-center align-items-center">
          <div class="col-lg-8">
            <div class="p-7 p-xl-13 border border-primary rounded-3">
              <ul class="accordion accordion-flush list-unstyled" id="accordionFlushExample">
                <li class="accordion-item mb-10">
                  <h3 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button border-0 collapsed justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq-one">
                      <span class="fw-medium text-primary">請問如何收到產品呢？</span>
                    </button>
                  </h3>
                  <div id="faq-one" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body text-gray-500">實體產品於實現日後一週內會依序寄出，虛擬產品則是會以 mail 發送通知，屆時會在站內收到通知消息。</div>
                  </div>
                </li>
                <li class="accordion-item mb-10 border-bottom">
                  <h3 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button border-0 collapsed justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq-two">
                      <span class="fw-medium text-primary">請問我對產品有操作上的問題，我該如何聯絡？</span>
                    </button>
                  </h3>
                  <div id="faq-two" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body text-gray-500">請透過站內訊息來聯絡我們，並詳細說明您的問題</div>
                  </div>
                </li>
                <li class="accordion-item mb-1 border-bottom">
                  <h3 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button border-0 collapsed justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#faq-six">
                      <span class="fw-medium text-primary">請問商品有瑕疵，我該怎麼退換貨？</span>
                    </button>
                  </h3>
                  <div id="faq-six" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body text-gray-500">請透過站內訊息來聯絡我們，我們會再提供詳細的退換貨流程供您參考，若有其他問題歡迎留言</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
const faqButton = document.querySelectorAll('.faq__button');
let openedButton = null;

// faq 加減切換
faqButton.forEach((button) => {
  button.addEventListener('click', () => {
    if (button === openedButton) {
      button.querySelector('.faq__button-minus').classList.toggle('d-none');
      button.querySelector('.faq__button-plus').classList.toggle('d-none');
      openedButton = null;
    } else {
      if (openedButton) {
        openedButton.querySelector('.faq__button-minus').classList.toggle('d-none');
        openedButton.querySelector('.faq__button-plus').classList.toggle('d-none');
      }
      button.querySelector('.faq__button-plus').classList.toggle('d-none');
      button.querySelector('.faq__button-minus').classList.toggle('d-none');
      openedButton = button;
    }

    faqButton.disabled = true;

    setTimeout(() => {
      faqButton.disabled = false;
    }, 500);
  });
});

export default {
  components: {
  },
};
</script>
