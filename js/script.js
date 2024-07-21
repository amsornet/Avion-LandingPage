const noticeEl = document.querySelector('.notice');
const stepperEls = document.querySelectorAll('.stepper');
const burgerEl = document.querySelector('.burger');
const headerListEl = document.querySelector('.header__list');

if (headerListEl) {
    new TransferElements(
        {
            sourceElement: headerListEl,
            breakpoints: {
                767.98: {
                    targetElement: document.querySelector('.header__bottom'),
                    targetPosition: 1
                }
            }
        }
    );
}

if (burgerEl) {
    const body = document.body;
    const menuEl = document.querySelector(".header__bottom");

    burgerEl.addEventListener('click', () => {
        burgerEl.classList.toggle('burger_active');
        menuEl.classList.toggle('header__bottom_active');
        body.classList.toggle('stop-scroll');
        });
        

} 

if (noticeEl) {
    const noticeCloseEl = noticeEl.querySelector('.notice__close');
    noticeCloseEl.addEventListener('click', () => {
        noticeEl.classList.add('notice_hidden');
    });
}

if (stepperEls) {
    stepperEls.forEach(stepperEl=> {
        const stepperInputEl = stepperEl.querySelector('.stepper__input');
        const stepperBtnMinusEl = stepperEl.querySelector('.stepper__btn_minus');
        const stepperBtnPlusEl = stepperEl.querySelector('.stepper__btn_plus');

        const stepperMin = Number(stepperInputEl.getAttribute('min'));
        const stepperMax = Number(stepperInputEl.getAttribute('max'));

        let count = Number(stepperInputEl.value);

        stepperInputEl.addEventListener('change', () => {
            stepperBtnMinusEl.classList.remove('.stepper__btn_disabled');
            stepperBtnPlusEl.classList.remove('stepper__btn_disabled');

            if (stepperInputEl.value < stepperMin) {
                stepperInputEl.value = stepperMin;
                stepperBtnMinusEl.classList.add('.stepper__btn_disabled');
            }

            if (stepperInputEl.value > stepperMax) {
                stepperInputEl.value = stepperMax;
                stepperBtnPlusEl.classList.add('stepper__btn_disabled');
            }
        });


        stepperBtnPlusEl.addEventListener('.click', () => {
            if (count < stepperMax) {
                let count = Number(stepperInputEl.value);
                stepperBtnMinusEl.classList.remove('.stepper__btn_disabled');
                stepperBtnPlusEl.classList.remove('stepper__btn_disabled');
                count++;
                stepperInputEl.value = count;
            }

            if (count === stepperMax){
                stepperBtnPlusEl.classList.add('stepper__btn_disabled');
            }
        });

        stepperBtnMinusEl.addEventListener('.click', () => {
            if (count > stepperMin) {
                let count = Number(stepperInputEl.value);
                stepperBtnMinusEl.classList.remove('.stepper__btn_disabled');
                stepperBtnPlusEl.classList.remove('stepper__btn_disabled');
                count--;
                stepperInputEl.value = count;
            }

            if (count === stepperMin){
                stepperBtnMinusEl.classList.add('.stepper__btn_disabled');
            }
        });

    });


}