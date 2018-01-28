import React from 'react'
import animationLogo from './logoAnimation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

require('./index.scss')

class Logo extends React.Component {
  constructor () {
    super()
    this.svgDOM = null
  }
  componentDidMount () {
    if (this.props.routing.locationBeforeTransitions.pathname === '/') {
    // set sizes of svg
      let scale = 0.5
      let elHeight = this.svgDOM.getBBox().height

      // set position of svg
      let bottomOffset = this.svgDOM ? this.svgDOM.getBBox().height / 2 : ''
      let rightOffset = this.svgDOM ? this.svgDOM.getBBox().width / 2 : ''
      let top = window.innerHeight / 2 - bottomOffset
      let left = window.innerWidth / 2 - rightOffset
      this.svgDOM.style.top = `${top}px`
      this.svgDOM.style.left = `${left}px`

      animationLogo(-left, (-top - elHeight * scale / 2), scale)
    } else {
      this.svgDOM.style.display = 'none'
    }
  }
  render () {
    return (
      <svg
        viewBox="0 0 270 99"
        version="1.1"
        id='logo-svg'
        ref={(el) => { this.svgDOM = el }}
      >
        <defs>
          <linearGradient x1="52.5988646%" y1="81.3150565%"
            x2="42.7768045%" y2="9.51102229%"
            id="linearGradient-1">
            <stop stopColor="#125D9E" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="79.0396981%" y1="86.16491%" x2="19.508528%"
            y2="8.69499544%" id="linearGradient-2">
            <stop stopColor="#0070B6" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="25.6959944%" y1="-5.95869899%"
            x2="48.2146752%" y2="43.973632%"
            id="linearGradient-3">
            <stop stopColor="#105FA1" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="54.1879975%" y1="89.4943124%"
            x2="30.0509392%" y2="8.08876534%"
            id="linearGradient-4">
            <stop stopColor="#0070B6" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="18.9578272%" y1="-35.6591446%"
            x2="45.9781711%" y2="41.2563299%"
            id="linearGradient-5">
            <stop stopColor="#105FA1" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0.00075334296%" y1="49.996416%"
            x2="99.9989328%" y2="49.996416%"
            id="linearGradient-6">
            <stop stopColor="#3C5AA6" offset="0%"></stop>
            <stop stopColor="#2B73B9" offset="93.31%"></stop>
            <stop stopColor="#2A75BB" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="38.8569566%" y1="65.3383439%"
            x2="94.123658%" y2="7.48713376%"
            id="linearGradient-7">
            <stop stopColor="#0070B6" offset="0%"></stop>
            <stop stopColor="#1D2C5E" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="0.000252123292%" y1="49.9998016%"
            x2="100.000339%" y2="49.9998016%"
            id="linearGradient-8">
            <stop stopColor="#3C5AA6" offset="0%"></stop>
            <stop stopColor="#2B73B9" offset="93.31%"></stop>
            <stop stopColor="#2A75BB" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none"
          fillRule="evenodd">
          <g id="logo" transform="translate(0.000000, -1.000000)"
            fillRule="nonzero">
            <g id="N" transform="translate(214.000000, 23.000000)">
              <polygon id="polygon27" fill="#1D2C5E"
                points="30.056 9.345 34.599 6.924 33.301 18.3"></polygon>
              <polygon id="polygon29" fill="#1D2C5E"
                points="1.82 16.64 5.858 17.467 11.012 14.965 6.539 13.296"></polygon>
              <polygon id="polygon43" fill="url(#linearGradient-1)"
                points="6.19 0.627 1.654 3.075 1.82 16.64 6.386 14.3 7.819 7.734"></polygon>
              <polygon id="polygon45" fill="#312370"
                points="5.567 17.505 0.572 61.875 8.557 60.3 10.121 15.112"></polygon>
              <polygon id="polygon47" fill="#21386E"
                points="15.345 64.002 15.487 70.019 30.815 74.904 35.377 72.486 20.337 60.834 5.102 59.496 0.572 61.875"></polygon>
              <polygon id="polygon146" fill="#C7A008"
                points="31.178 66.464 32.619 67.428 50.207 14.643 37.044 11.601 36.879 14.693 47.497 17.049"></polygon>
              <polygon id="polygon148" fill="#C7A008"
                points="10.291 5.943 10.406 8.891 24.401 11.702 29.789 37.255 31.97 35.057 26.837 9.241"></polygon>
              <polygon id="polygon150" fill="#C7A008"
                points="21.061 35.062 17.208 56.854 19.427 57.573 23.252 32.916"></polygon>
            </g>
            <g id="P" transform="translate(0.000000, 24.000000)">
              <polygon id="polygon16" fill="url(#linearGradient-2)"
                points="0 13.557 12.026 33.858 16.827 29.279 3.738 9.76"></polygon>
              <polygon id="polygon78" fill="url(#linearGradient-3)"
                points="16.55 31.916 35.906 75.814 54.295 69.882 58.785 66.864 20.617 26.929 15.841 29.791 12.026 33.858"></polygon>
              <path
                d="M61.785,11.235 C46.849,-6.96 19.936,2.82 10.263,11.331 L10.641,11.984 C12.865,10.708 15.21,9.554 17.677,8.519 C27.285,4.415 36.445,3.212 43.789,4.497 C46.385,4.795 49.135,5.565 51.528,7.167 C54.841,9.022 57.352,11.661 58.82,15.043 C61.425,21.033 59.13,28.998 52.995,35.666 C60.69,28.605 65.955,21.849 61.785,11.235 Z"
                id="path106" fill="#C7A008"></path>
              <polygon id="polygon152" fill="#C7A008"
                points="53.445 63.85 46.899 40.117 44.503 41.793 50.57 64.53"></polygon>
              <path
                d="M51.746,28.162 C50.236,29.764 46.889,32.877 44.982,34.105 L43.824,30.387 L41.288,22.235 L39.676,16.716 L38.103,18.735 L39.709,24.262 L42.245,32.408 L43.398,36.137 C46.009,34.455 49.807,31.298 51.746,28.162"
                id="path154" fill="#C7A008"></path>
              <path
                d="M49.857,21.493 C49.625,20.273 48.43,19.304 47.844,19.035 C46.796,18.529 44.983,18.45 43.659,18.691 C43.897,19.513 44.17,20.477 44.286,20.872 C44.823,20.947 45.705,21.107 46.168,21.318 C46.749,21.598 47.765,22.258 48.001,23.486 C48.317,25.125 48.234,26.657 47.551,27.901 C49.424,26.063 50.333,24.064 49.857,21.493"
                id="path158" fill="#7D7F68"></path>
              <g id="g160" transform="translate(39.549000, 15.314000)"
                fill="#3C5AA6">
                <g id="g162">
                  <path
                    d="M13.588,6.145 C12.689,1.321 6.381,-1.338 0.127,2.073 L1.739,7.594 L4.275,15.753 L5.432,19.469 C10.124,16.452 14.84,12.827 13.588,6.145 Z M7.376,13.563 C6.693,11.334 5.195,6.521 5.195,6.521 C5.202,6.543 4.9,5.491 4.542,4.287 C5.868,4.05 7.142,4.146 8.19,4.65 C8.776,4.929 9.806,5.58 10.031,6.814 C10.549,9.588 9.614,11.568 7.376,13.563 Z"
                    id="path164"></path>
                </g>
              </g>
            </g>
            <g id="K" transform="translate(76.000000, 16.000000)">
              <polygon id="polygon36" fill="url(#linearGradient-4)"
                points="0.598 11.561 1.244 24.744 6.88 22.467 5.193 9.096"></polygon>
              <polygon id="polygon60" fill="#21386E"
                points="63.506 70.272 27.166 52.271 31.728 48.822 68.028 67.83"></polygon>
              <polygon id="polygon62" fill="#1D2C5E"
                points="30.581 3.277 25.074 13.72 30.893 11.958 35.092 0.83"></polygon>
              <polygon id="polygon71" fill="#1D2C5E"
                points="5.496 23.669 9.736 70.445 27.06 67.882 31.695 65.453 10.196 20.865 5.773 22.355 1.244 24.744"></polygon>
              <polygon id="polygon100" fill="#C7A008"
                points="25.678 23.499 34.919 10.513 34.544 10.167 25.628 22.691"></polygon>
              <polygon id="polygon118" fill="#C7A008"
                points="9.781 12.511 9.836 14.017 22.589 10.22 23.534 26.46 25.662 23.478 25.208 7.181"></polygon>
              <polygon id="polygon120" fill="#C7A008"
                points="48.332 18.326 36.353 7.332 34.919 10.513 45.462 20.418"></polygon>
              <path
                d="M46.511,38.814 L32.447,34.164 L30.398,36.328 L44.409,41.935 C45.998,44.929 48.406,47.494 51.438,49.369 C54.373,51.164 57.727,52.239 61.279,52.58 L61.279,59.5 L63.451,60.584 L64.138,50.188 L46.511,38.814 Z"
                id="path122" fill="#C7A008"></path>
              <polygon id="polygon116" fill="#C7A008"
                points="25.227 44.791 25.284 61.746 27.975 61.9 27.443 42.572"></polygon>
            </g>
            <g id="M" transform="translate(152.000000, 19.000000)">
              <polygon id="polygon18" fill="#0071B9"
                points="26.558 2.602 26.093 5.278 31.845 3.422 31.128 0.144"></polygon>
              <polygon id="polygon49" fill="#21386E"
                points="20.483 57.419 24.25 55.39 26.651 59.826 30.201 57.875 30.908 63.723 53.192 67.675 57.645 65.226 26.917 46.503 5.119 50.239 0.867 54.28"></polygon>
              <polygon id="polygon92" fill="#7D7F68"
                points="6.351 23.555 9.563 26.445 10.793 18.819 9.776 19.901"></polygon>
              <path
                d="M51.938,56.418 C42.991,49.064 43.526,33.295 47.918,28.292 L43.976,3.577 L35.354,4.69 L34.97,6.867 L41.494,6.867 L44.949,29.291 C40.553,34.31 38.429,41.034 39.898,47.19 C41.035,51.947 43.957,55.797 48.163,58.024 C48.586,58.256 49.023,58.458 49.47,58.649 L49.526,58.978 L52.091,59.383 C52.091,59.382 52.358,56.632 51.938,56.418 Z"
                id="path130" fill="#C7A008"></path>
              <polygon id="polygon132" fill="#C7A008"
                points="17.55 7.214 17.179 9.392 27.013 9.392 29.91 25.273 32.092 23.069 29.798 6.304"></polygon>
              <polygon id="polygon134" fill="#C7A008"
                points="34.385 38.044 31.21 46.246 31.996 48.38 36.537 35.889"></polygon>
              <polygon id="polygon136" fill="#C7A008"
                points="24.956 32.878 22.77 35.061 20.427 49.875 22.671 50.732"></polygon>
            </g>
            <g id="O-bottom" transform="translate(51.000000, 62.000000)"
              fill="url(#linearGradient-5)">
              <path
                d="M5.633,0.419 L0.987,3.608 C0.987,3.608 1.973,8.792 3.244,12.398 C4.522,16.017 7.564,18.924 7.564,18.924 C9.518,20.834 11.913,22.224 14.585,23.004 C19.724,24.483 25.524,23.519 30.503,20.344 C31.805,19.52 33.572,18.201 34.658,17.16 C29.764,20.13 5.633,0.419 5.633,0.419 Z"
                id="o-shadow"></path>
            </g>
            <g id="yellow-fill" transform="translate(4.549000, 2.314000)"
              fill="#FFCB05">
              <path
                d="M36.389,93.338 L34.952,90.145 L16.6,49.186 L16.223,48.346 L15.389,48.731 L14.832,48.987 L11.565,50.591 C11.083,49.783 10.283,48.429 9.727,47.49 L2.34,35.006 L0.408,31.747 L3.604,29.722 C6.627,27.794 10.041,26.013 13.755,24.427 C21.15,21.277 28.698,19.611 35.581,19.611 C37.845,19.611 40.036,19.794 42.094,20.152 C45.525,20.543 48.698,21.669 51.319,23.415 C55.225,25.599 58.3,28.987 60.037,32.995 C61.463,36.289 61.741,40.147 60.835,44.149 L60.303,46.5 L62.256,45.084 C63.572,44.129 65.002,43.313 66.506,42.658 C69.106,41.559 71.796,40.998 74.491,40.998 C77.042,40.998 79.454,41.503 81.661,42.496 L83.084,43.134 L82.941,41.581 L82.322,34.87 L82.222,33.806 L81.186,34.075 L78.077,34.881 L77.532,23.454 L100.306,16.178 L100.122,25.059 L101.837,25.499 L106.811,15.967 L121.708,29.179 L122.329,29.732 L122.935,29.162 C124.976,27.244 127.395,25.705 130.124,24.588 L131.264,24.122 L130.483,23.169 L127.797,19.895 L144.9,0.181 L153.857,13.546 L140.146,20.916 L137.101,22.554 L140.558,22.627 C147.058,22.764 152.814,25.514 156.763,30.369 L158.191,32.13 L159.111,33.261 L157.583,34.883 L156.564,35.965 L153.138,39.619 L152.501,40.298 L153.19,40.92 L156.401,43.811 L157.643,44.928 L157.909,43.28 L159.141,35.653 L159.456,33.695 L159.466,33.706 L159.79,31.706 L161.629,20.446 L178.047,20.446 L178.817,20.446 L178.947,19.687 L179.268,17.759 L194.053,17.759 L197.635,40.38 L197.868,41.845 L199.068,40.974 C200.519,39.92 202.122,39.053 203.834,38.398 C206.113,37.538 208.459,37.099 210.801,37.099 C213.589,37.099 216.296,37.743 218.637,38.96 C218.699,39.005 218.787,39.063 218.907,39.111 L220.018,39.557 L220.149,38.365 L220.417,35.9 L220.505,35.092 L219.71,34.915 L216.712,34.245 L216.566,22.453 L239.423,27.484 L241.14,35.969 L242.915,36.004 L244.686,28.702 L263.746,33.337 L244.268,92.04 L230.33,87.663 L230.231,82.256 L230.217,81.481 L229.448,81.373 L215.54,79.41 L216.327,72.341 L216.514,70.659 L215.009,71.43 C214.296,71.793 213.606,72.098 212.954,72.338 C210.68,73.198 208.351,73.633 206.032,73.633 C205.361,73.633 204.687,73.596 204.031,73.522 L202.843,73.389 L203.029,74.569 L204.008,80.786 L183.717,77.207 L182.654,67.981 L182.312,65.024 L180.945,67.667 L178.609,72.172 L174.308,64.232 L173.015,61.847 L172.607,64.527 L171.67,70.673 L153.886,67.874 L155.265,59.439 L155.58,57.505 L153.899,58.51 C150.988,60.255 147.645,61.568 143.682,62.525 C142.297,62.863 140.85,63.097 139.377,63.219 L138.543,63.289 L138.543,64.126 L138.543,80.044 L103.52,62.735 L102.204,62.086 L102.205,63.553 L102.229,78.357 L86.57,80.664 L85.912,73.555 L85.734,71.653 L84.369,72.991 C82.3,75.016 79.969,76.586 77.442,77.658 C74.857,78.757 72.19,79.313 69.517,79.313 C66.848,79.313 64.34,78.755 62.062,77.664 C57.842,75.634 54.798,71.951 53.492,67.304 C52.87,65.121 52.701,62.816 52.99,60.45 L53.299,57.93 L51.461,59.68 C50.165,60.91 48.769,62.085 47.309,63.164 L46.814,63.529 L46.97,64.124 L52.245,84.372 L53.177,87.965 L49.645,89.088 L39.713,92.268 L36.389,93.338 Z M40.847,38.982 C40.335,38.982 39.806,39.029 39.273,39.125 L38.597,39.255 L37.599,39.447 L37.9,40.419 L38.096,41.051 L40.936,50.344 L41.22,51.237 L41.642,52.577 L42.692,51.643 L43.389,51.022 C46.142,48.548 47.107,46.036 46.526,42.868 C46.16,40.967 44.688,40.02 43.842,39.624 C42.958,39.198 41.946,38.982 40.847,38.982 Z M116.982,39.287 L115.207,41.015 L110.532,45.558 L109.514,46.547 L110.839,47.059 L115.853,48.994 L117.393,49.587 L117.075,47.969 C116.661,45.879 116.553,43.787 116.747,41.752 L116.982,39.287 Z M137.398,34.12 C135.459,34.12 133.583,34.954 132.25,36.406 C130.228,38.614 129.835,41.871 131.273,44.509 L131.654,45.224 L132.267,46.367 L133.13,45.401 L133.685,44.786 L140.543,36.956 L141.082,36.336 L141.947,35.342 L140.713,34.885 L139.944,34.601 C139.137,34.285 138.273,34.12 137.398,34.12 Z"
                id="path86"></path>
            </g>
            <g id="O-2" transform="translate(202.000000, 42.000000)">
              <path
                d="M6.381,34.627 L6.641,36.782 C8.225,36.604 9.889,36.399 11.313,35.892 C12.973,35.324 16.579,33.718 17.95,32.535 C17.436,32.722 8.987,34.912 6.381,34.627"
                id="path80" fill="#1D2C5E"></path>
              <path
                d="M19.123,5.146 C20.41,6.065 21.508,7.228 22.334,8.611 C22.986,9.672 23.479,10.86 23.794,12.164 C24.865,16.617 23.584,21.433 20.753,25.297 C20.468,25.689 20.154,26.068 19.854,26.44 C21.004,25.451 34.972,15.148 21.325,1.616 C6.315,-3.332 0.633,6.461 0.102,7.082 C1.688,5.734 3.518,4.619 5.5,3.861 C10.58,1.937 15.578,2.604 19.123,5.146"
                id="path138" fill="#C7A008"></path>
              <path
                d="M11.556,6.122 C11.598,6.217 13.711,3.92 13.754,3.92 C11.083,4.03 9.8,5.319 9.932,5.914 C9.772,6.145 9.642,6.374 9.54,6.627 C10.11,6.343 11.164,6.125 11.556,6.122"
                id="path140" fill="#C7A008"></path>
              <path
                d="M16.578,9.479 C16.674,9.837 16.72,10.212 16.712,10.615 C16.688,11.131 16.554,11.604 16.358,12.045 C16.764,11.862 20.001,10.857 18.765,7.295 C18.797,7.396 16.543,9.481 16.578,9.479"
                id="path142" fill="#C7A008"></path>
              <path
                d="M9.487,20.789 C12.508,20.918 15.849,19.062 18.245,15.782 C12.097,17.043 5.634,6.805 6.282,5.803 C3.959,7.487 1.903,10.735 1.809,13.005 C1.649,17.214 5.076,20.613 9.487,20.789"
                id="path144" fill="#C7A008"></path>
              <path
                d="M18.748,7.295 C18.843,7.674 18.892,8.049 18.88,8.448 C18.776,10.834 16.533,12.676 13.859,12.551 C11.187,12.459 9.088,10.431 9.193,8.051 C9.283,5.82 11.271,4.054 13.726,3.941 C13.26,3.836 12.773,3.781 12.265,3.763 C7.792,3.57 4.136,6.738 3.982,10.682 C3.81,14.9 7.191,18.339 11.593,18.53 C16.072,18.709 19.726,15.53 19.904,11.332 C19.956,9.877 19.526,8.482 18.748,7.295"
                id="path174" fill="#3466AF"></path>
            </g>
            <g id="O" transform="translate(65.000000, 46.000000)">
              <path
                d="M27.257,10.433 C27.187,10.103 27.117,9.768 27.01,9.445 C26.169,6.42 24.362,4.005 21.993,2.398 C18.159,-0.206 12.807,-0.741 7.473,1.511 C4.667,2.724 2.227,4.591 0.298,6.821 C1.781,5.545 3.476,4.482 5.307,3.69 C10.629,1.431 15.981,1.965 19.828,4.566 C22.197,6.175 23.989,8.589 24.848,11.61 C24.943,11.934 25.017,12.274 25.091,12.615 C25.319,13.765 25.425,14.928 25.381,16.119 C25.27,19.601 23.979,23.107 21.832,26.101 C21.486,26.575 21.122,27.017 20.745,27.455 C21.967,26.4 23.058,25.233 23.99,23.926 C26.146,20.951 27.434,17.438 27.548,13.935 C27.596,12.766 27.499,11.584 27.257,10.433"
                id="path108" fill="#C7A008"></path>
              <path
                d="M12.55,5.992 C12.529,6.025 14.717,3.824 14.692,3.824 C11.955,3.72 10.798,6.301 10.703,6.504 C11.265,6.232 11.885,6.055 12.55,5.992"
                id="path110" fill="#C7A008"></path>
              <path
                d="M17.705,9.147 C17.816,9.518 17.874,9.887 17.874,10.291 C17.874,10.861 17.747,11.408 17.516,11.912 C17.954,11.683 21.119,10.148 19.892,6.896 C19.958,6.996 17.626,9.137 17.705,9.147"
                id="path112" fill="#C7A008"></path>
              <path
                d="M5.255,10.957 C5.255,9.619 7.546,6.373 8.26,5.29 C4.642,7.59 3.084,10.694 3.084,13.139 C3.084,17.328 6.765,20.697 11.166,20.697 C13.248,20.697 17.061,19.596 19.555,15.56 C18.248,16.42 14.926,18.478 13.183,18.478 C8.783,18.477 5.255,15.169 5.255,10.957"
                id="path114" fill="#C7A008"></path>
              <path
                d="M20.053,8.112 C20.053,10.508 17.874,12.428 15.205,12.428 C12.529,12.428 10.358,10.507 10.358,8.112 C10.358,5.879 12.268,4.038 14.716,3.824 C14.247,3.739 13.759,3.69 13.255,3.69 C8.783,3.69 5.255,7.007 5.255,10.957 C5.255,15.172 8.784,18.478 13.183,18.478 C17.659,18.478 21.184,15.17 21.184,10.957 C21.184,9.498 20.702,8.123 19.873,6.991 C19.985,7.332 20.053,7.71 20.053,8.112"
                id="path183" fill="url(#linearGradient-6)"></path>
            </g>
            <g id="E" transform="translate(122.000000, 1.000000)">
              <path
                d="M30.438,47.032 C30.372,47.09 30.311,47.164 30.259,47.24 C30.328,47.177 30.395,47.122 30.466,47.064 L30.438,47.032 Z"
                id="path88" fill="#7D7F68"></path>
              <polygon id="polygon90" fill="#7D7F68"
                points="36.351 41.555 39.776 37.901 38.604 39.145 38.638 38.988 37.602 40.081 34.18 43.724 37.386 46.608 37.967 43.016 39.563 44.445"></polygon>
              <path
                d="M12.677,50.694 C12.951,50.971 12.698,50.772 13.005,50.982 L15.1,49.505 C14.789,49.285 14.481,49.049 14.198,48.785 C11.158,46.015 11.948,39.785 13.92,36.375 C8.729,40.563 8.999,47.01 12.677,50.694"
                id="path96" fill="#C7A008"></path>
              <path
                d="M37.967,54.182 C34.507,57.044 30.563,58.91 25.352,60.169 C24.213,60.43 23.097,60.62 22.005,60.716 C13.734,61.529 6.795,57.731 4.162,51.571 C3.834,50.825 3.581,50.07 3.39,49.264 C2.172,44.076 3.212,39.44 5.775,35.806 C6.029,35.454 6.296,35.117 6.576,34.774 C6.445,34.886 6.311,34.982 6.202,35.087 C5.217,35.964 4.345,36.925 3.604,37.975 C1.038,41.609 -0.002,46.248 1.227,51.428 C1.415,52.234 1.664,53 1.985,53.729 C4.619,59.903 11.56,63.699 19.824,62.892 C20.925,62.786 22.037,62.604 23.177,62.329 C28.394,61.07 32.335,59.212 35.795,56.35 C36.64,55.655 37.455,54.897 38.246,54.068 L38.173,53.998 C38.094,54.066 38.035,54.125 37.967,54.182"
                id="path98" fill="#C7A008"></path>
              <polygon id="polygon102" fill="#C7A008"
                points="40.793 36.819 39.563 44.445 37.967 43.016 37.386 46.608 34.18 43.724 37.602 40.081 38.638 38.988 38.604 39.145 39.776 37.901"></polygon>
              <polygon id="polygon104" fill="#C7A008"
                points="29.374 15.429 32.61 14.041 26.695 6.45 24.757 9.157"></polygon>
              <path
                d="M23.095,51.858 C26.549,51.025 28.541,49.223 30.256,47.24 C28.969,48.296 22.517,49.702 21.433,50.069 L19.308,52.332 C20.279,52.418 21.903,52.156 23.095,51.858"
                id="path124" fill="#C7A008"></path>
              <path
                d="M16.813,27.943 C10.444,28.777 7.125,34.124 6.576,34.775 C8.928,32.788 11.876,31.313 15.196,30.527 C23.077,28.621 30.026,31.024 34.321,36.334 L36.979,34.084 C32.725,28.866 24.692,26.043 16.813,27.943"
                id="path126" fill="#C7A008"></path>
              <path
                d="M38.174,53.998 C38.942,53.352 40.307,52.699 41.033,51.938 L32.505,44.318 C31.852,45.099 31.26,46.386 30.463,47.063 L38.174,53.998 Z"
                id="path128" fill="#C7A008"></path>
              <path
                d="M22.498,37.129 C20.432,36.334 17.506,36.573 15.926,38.302 C15.559,38.703 14.845,39.726 14.619,40.183 C16.148,38.967 18.871,38.704 20.656,39.348 L22.498,37.129 Z"
                id="path156" fill="#7D7F68"></path>
              <g id="g166" transform="translate(10.549000, 34.314000)"
                fill="#3567B0">
                <g id="g168">
                  <path
                    d="M15.223,2.491 C11.727,-0.716 6.293,-0.467 3.104,3.026 C-0.104,6.513 0.148,11.95 3.649,15.144 C3.934,15.419 4.242,15.644 4.552,15.865 L15.829,3.094 C15.63,2.886 15.43,2.679 15.223,2.491 Z M4.575,11.474 C3.472,9.449 3.695,6.878 5.344,5.076 C6.93,3.348 9.36,2.856 11.432,3.655 L4.575,11.474 Z"
                    id="path170"></path>
                </g>
              </g>
              <path
                d="M21.322,64.418 L22.012,67.888 C25.734,67.334 28.929,65.957 32.07,64.069 C34.041,62.895 36.205,61.124 36.888,60.652 C36.406,60.96 21.322,64.418 21.322,64.418 Z"
                id="path82" fill="#1D2C5E"></path>
              <polygon id="polygon25" fill="url(#linearGradient-7)"
                points="23.044 2.326 4.536 23.55 9.922 22.001 27.543 0"></polygon>
              <polygon id="polygon172" fill="#1E2D5F"
                points="40.84 35.403 34.595 41.42 40.528 46.748"></polygon>
              <polygon id="polygon58" fill="#1D2C5E"
                points="7.789 27.395 4.235 29.288 4.534 30.473 12.992 25.1 9.296 21.134 4.536 23.55"></polygon>
            </g>
            <g id="blue-contour" transform="translate(3.549000, 0.314000)"
              fill="url(#linearGradient-8)">
              <g id="g187">
                <path
                  d="M245.02,29.598 L243.034,37.783 L241.2,28.72 L216.641,23.314 L216.813,36.97 L220.514,37.8 L220.247,40.263 C220.199,40.244 220.169,40.215 220.143,40.194 C215.555,37.773 209.867,37.525 204.514,39.547 C202.718,40.234 201.051,41.137 199.539,42.235 L195.834,18.847 L179.501,18.847 L179.051,21.536 L161.86,21.536 L159.897,33.559 L158.471,31.798 C154.305,26.68 148.266,23.861 141.576,23.721 L156.172,15.876 L145.994,0.687 L127.605,21.876 L130.779,25.746 C127.904,26.921 125.392,28.541 123.311,30.498 L107.544,16.509 L102.031,27.075 L102.243,16.921 L77.592,24.796 L78.224,38.04 L82.418,36.952 L83.038,43.664 C78.246,41.512 72.486,41.565 67.144,43.822 C65.561,44.512 64.085,45.36 62.725,46.346 C63.649,42.257 63.43,38.226 61.872,34.631 C60.032,30.383 56.794,26.872 52.824,24.657 C50.041,22.803 46.724,21.648 43.253,21.255 C34.723,19.764 24.48,21.295 14.399,25.59 C10.693,27.171 7.236,28.965 4.118,30.951 L0.177,33.45 L2.557,37.469 L9.943,49.952 C9.943,49.952 12.203,53.777 12.218,53.775 L16.212,51.812 L16.769,51.556 L35.122,92.517 L36.892,96.454 L40.99,95.134 L50.92,91.953 L55.272,90.57 L54.124,86.14 L48.85,65.895 C50.367,64.772 51.783,63.581 53.09,62.334 C52.795,64.753 52.95,67.202 53.616,69.546 C54.995,74.454 58.209,78.331 62.669,80.479 C67.486,82.794 73.363,82.8 78.8,80.494 C81.527,79.337 83.952,77.649 86.007,75.64 L86.756,83.703 L104.146,81.142 L104.119,65.549 L140.456,83.508 L140.456,66.119 C141.914,65.997 143.402,65.767 144.898,65.4 C148.9,64.433 152.325,63.107 155.368,61.284 L153.842,70.623 L173.434,73.706 L174.509,66.656 L179.626,76.109 L182.754,70.082 L183.897,79.978 L206.11,83.894 L204.932,76.421 C207.973,76.765 211.178,76.357 214.274,75.189 C215.007,74.918 215.731,74.588 216.424,74.234 L215.539,82.185 L230.323,84.271 L230.433,90.334 L245.849,95.173 L265.92,34.678 L245.02,29.598 Z M158.227,38.588 L159.246,37.505 L158.015,45.132 L154.804,42.24 L158.227,38.588 Z M145.209,7.432 L150.591,14.743 L135.204,22.371 L134.141,20.756 L145.209,7.432 Z M43.32,63.809 L49.459,87.364 L39.523,90.538 L19.134,45.004 C18.025,45.587 15.977,46.565 14.096,47.487 L6.713,35.015 C9.649,33.14 12.869,31.478 16.294,30.031 C25.906,25.943 35.077,24.723 42.412,26.019 C45.007,26.311 47.754,27.076 50.16,28.673 C53.461,30.532 55.986,33.178 57.442,36.548 C60.993,44.754 55.061,56.563 43.32,63.809 Z M89.001,59.617 C88.887,63.124 87.599,66.638 85.443,69.611 C83.392,72.486 80.527,74.859 77.156,76.31 C68.536,79.962 59.916,76.31 57.613,68.126 C55.382,60.213 60.573,50.793 68.925,47.195 C74.259,44.943 79.611,45.477 83.445,48.082 C85.813,49.688 87.619,52.103 88.462,55.129 C88.568,55.45 88.638,55.787 88.709,56.117 C88.95,57.27 89.047,58.452 89.001,59.617 Z M135.902,76.27 L99.847,58.237 L99.911,77.131 L90.584,78.403 L89.934,70.615 C92.814,65.677 93.867,59.858 92.364,54.522 C91.539,51.589 90.015,49.043 87.944,47.003 L86.606,31.124 L82.418,32.21 L82.233,28.195 L97.211,23.735 L98.129,39.183 L109.163,23.68 L119.95,33.953 L104.865,49.845 L119.037,55.451 C120.62,58.451 123.035,61 126.065,62.878 C128.994,64.686 132.35,65.755 135.9,66.106 L135.902,76.27 Z M117.181,50.144 L112.166,48.209 L116.841,43.665 C116.641,45.751 116.744,47.932 117.181,50.144 Z M156.418,54.868 C152.958,57.73 149.014,59.596 143.803,60.855 C142.664,61.116 141.548,61.306 140.456,61.402 C132.185,62.215 125.246,58.417 122.613,52.257 C122.285,51.511 122.032,50.756 121.841,49.95 C120.623,44.762 121.663,40.125 124.226,36.492 C124.964,35.432 125.84,34.466 126.824,33.596 C129.238,31.442 132.32,29.876 135.824,29.034 C143.703,27.134 150.642,29.539 154.896,34.759 L139.882,50.74 C140.9,50.932 142.519,50.665 143.714,50.379 C147.29,49.507 149.291,47.609 151.054,45.541 L157.054,50.939 L158.872,52.581 C158.084,53.396 157.256,54.165 156.418,54.868 Z M188.271,76.195 L185.005,54.56 L180.386,66.495 L173.47,51.578 L173.392,51.578 L170.659,68.853 L159.132,66.847 L160.753,57.207 C161.188,56.798 161.616,56.388 162.037,55.955 L165.773,52.108 L162.142,48.856 L166,25.899 L177.63,25.899 L180.541,41.791 L183.803,23.374 L192.122,23.374 L195.574,45.812 C191.181,50.816 189.047,57.543 190.515,63.697 C191.65,68.468 194.582,72.31 198.785,74.554 C199.208,74.767 199.646,74.978 200.098,75.16 L200.538,78.069 L188.271,76.195 Z M216.996,69.146 C215.725,70.051 214.326,70.82 212.822,71.375 C209.853,72.506 206.9,72.741 204.269,72.218 C202.435,71.856 200.763,71.141 199.308,70.106 C196.994,68.432 195.29,65.96 194.539,62.856 C193.663,59.127 194.47,55.145 196.476,51.657 C197.476,49.952 198.759,48.35 200.277,46.969 C201.97,45.451 203.933,44.208 206.117,43.368 C211.2,41.472 216.213,42.126 219.742,44.663 C221.04,45.583 222.117,46.754 222.966,48.115 C223.61,49.19 224.11,50.375 224.413,51.669 C225.494,56.147 224.207,60.943 221.382,64.807 C220.172,66.454 218.697,67.934 216.996,69.146 Z M242.951,89.538 L234.427,86.999 L233.684,55.573 L229.397,79.816 L220.098,78.332 L220.764,71.352 C226.836,66.221 230.055,58.127 228.291,50.792 C227.516,47.544 225.846,44.716 223.492,42.566 L224.277,34.334 L220.761,33.398 L220.996,29.003 L237.017,32.223 L242.404,57.769 L247.929,34.866 L260.117,37.559 L242.951,89.538 Z"
                  id="path196"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}

Logo.propTypes = {
  routing: PropTypes.object
}

function mapStateToProps (store, ownProps) {
  const {routing} = store
  return {
    routing
  }
}

export default connect(mapStateToProps)(Logo)
