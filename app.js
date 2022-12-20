let burger = document.querySelector('.header__burger'),
  list = document.querySelector('.header__list'),
  logo = document.querySelector('.header__logo'),
  featuresButtons = document.querySelectorAll('.features__item'),
  featuresItems = document.querySelectorAll('.details__item'),
  questions = document.querySelectorAll('.questions__header'),
  answers = document.querySelectorAll('.questions__answer'),
  icons = document.querySelectorAll('.questions__icon'),
  contactButton = document.querySelector('.contact__button'),
  contactInput = document.querySelector('.contact__input'),
  contactSpan = document.querySelector('.contact__span'),
  mediaQuery = window.matchMedia("(min-width: 1000px)")

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

contactButton.addEventListener('click', () => {

  if (validateEmail(contactInput.value) == null) {
    contactButton.classList.add('contact__button_error')
    contactInput.classList.add('contact__input_error')
    contactSpan.classList.add('contact__span_visible')
    return
  }

  contactButton.classList.remove('contact__button_error')
  contactInput.classList.remove('contact__input_error')
  contactSpan.classList.remove('contact__span_visible')

})

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger_active')
  list.classList.toggle('header__list_active')
  logo.classList.toggle('header__logo_active')
})

featuresButtons.forEach((button, i) => {

  button.addEventListener('click', () => {

    featuresButtons.forEach((item, j) => {
      if (i == j) {
        item.classList.add('features__item_active')
      } else {
        item.classList.remove('features__item_active')
      }
    })

    featuresItems.forEach((item, k) => {

      if (i == k) {
        item.classList.add('details__item_active')
      } else {
        item.classList.remove('details__item_active')
      }
    })
  })
})

questions.forEach((question, i) => {

  question.addEventListener('click', () => {
    answers[i].classList.toggle('questions__answer_active')
    icons[i].classList.toggle('questions__icon_active')
  })

})

function changeVisibility() {

  if (mediaQuery.matches) {
    burger.classList.remove('header__burger_active')
    burger.classList.add('header__burger_invisible')
    list.classList.remove('header__list_active')
    logo.classList.remove('header__logo_active')

    return

  }

  burger.classList.remove('header__burger_invisible')

}

mediaQuery.addEventListener("change", () => changeVisibility())
window.addEventListener('DOMContentLoaded', () => changeVisibility())