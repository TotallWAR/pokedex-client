import anime from 'animejs'

export default (x, y, scale) => {
  // 160px 59px
  const ids = ['#P', ['#O', '#O-bottom'], '#K', '#E', '#M', '#O-2', '#N']
  const BLUE_CONTOUR_DELAY = 1500
  const BLUE_CONTOUR_DURATION = 1000

  const YELLOW_FILL_DELAY = 300
  const YELLOW_FILL_DURATION = 1000

  const LETTERS_DELAY = 400
  const LETTERS_DURATION = 300

  anime({
    targets: '#blue-contour',
    duration: BLUE_CONTOUR_DURATION,
    delay: BLUE_CONTOUR_DELAY,
    opacity: 1,
    easing: 'linear'
  })
  anime({
    targets: '#yellow-fill',
    duration: YELLOW_FILL_DURATION,
    delay: BLUE_CONTOUR_DELAY + BLUE_CONTOUR_DURATION + YELLOW_FILL_DELAY,
    opacity: 1,
    easing: 'linear'
  })
  ids.forEach((el, index) => {
    anime({
      targets: el,
      duration: LETTERS_DURATION,
      delay: BLUE_CONTOUR_DELAY + BLUE_CONTOUR_DURATION + YELLOW_FILL_DELAY +
      YELLOW_FILL_DURATION + LETTERS_DELAY + LETTERS_DURATION * index,
      opacity: 1,
      easing: 'linear'
    })
  })

  anime({
    targets: '#logo-svg',
    delay: BLUE_CONTOUR_DELAY + BLUE_CONTOUR_DURATION + YELLOW_FILL_DELAY +
    YELLOW_FILL_DURATION + LETTERS_DELAY + LETTERS_DURATION * ids.length + 500,
    duration: 1000,
    translateX: x,
    translateY: y,
    scale: scale,
    easing: 'linear',
    complete: function (anim) {
      anime({
        targets: '#welcome-phrase',
        duration: 1000,
        easing: 'linear',
        opacity: 0.7
      })
    }
  })

  // anime({
  //   targets: 'div',
  //   translateX: [
  //     { value: 100, duration: 1200 },
  //     { value: 0, duration: 800 }
  //   ],
  //   rotate: '1turn',
  //   backgroundColor: '#FFF',
  //   duration: 2000,
  //   loop: true
  // });
}
