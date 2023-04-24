$(document).ready(function () {
  let showingCards = false
  let $cards = $('.flipper-card')
  $cards.on('click', function () {
    $(this).toggleClass('flipper-is-flipped')
  })
  $('.flipper-xl').on('click', function () {
    $cards.removeClass('flipper-is-flipped')
    if (!showingCards) {
      $cards.addClass('flipper-is-flipped')
      showingCards = true
    } else {
      $cards.removeClass('flipper-is-flipped')
      showingCards = false
    }
  })
})
