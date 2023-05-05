"use strict";(self.webpackChunkreact_payments=self.webpackChunkreact_payments||[]).push([[769],{"./src/stories/LoadingAnimation/Loading.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WalkingDog:function(){return Loading_stories_WalkingDog},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Loading_stories}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function WalkingDog(){return(0,jsx_runtime.jsx)(Style.Container,{children:(0,jsx_runtime.jsx)("div",{className:"dog",children:(0,jsx_runtime.jsxs)("div",{className:"torso",children:[(0,jsx_runtime.jsx)("div",{className:"fur",children:(0,jsx_runtime.jsx)("div",{className:"spot"})}),(0,jsx_runtime.jsxs)("div",{className:"neck",children:[(0,jsx_runtime.jsx)("div",{className:"fur"}),(0,jsx_runtime.jsxs)("div",{className:"head",children:[(0,jsx_runtime.jsx)("div",{className:"fur",children:(0,jsx_runtime.jsx)("div",{className:"snout"})}),(0,jsx_runtime.jsxs)("div",{className:"ears",children:[(0,jsx_runtime.jsx)("div",{className:"ear",children:(0,jsx_runtime.jsx)("div",{className:"fur"})}),(0,jsx_runtime.jsx)("div",{className:"ear",children:(0,jsx_runtime.jsx)("div",{className:"fur"})})]}),(0,jsx_runtime.jsx)("div",{className:"eye"})]}),(0,jsx_runtime.jsx)("div",{className:"collar"})]}),(0,jsx_runtime.jsxs)("div",{className:"legs",children:[(0,jsx_runtime.jsxs)("div",{className:"leg",children:[(0,jsx_runtime.jsx)("div",{className:"fur"}),(0,jsx_runtime.jsx)("div",{className:"leg-inner",children:(0,jsx_runtime.jsx)("div",{className:"fur"})})]}),(0,jsx_runtime.jsxs)("div",{className:"leg",children:[(0,jsx_runtime.jsx)("div",{className:"fur"}),(0,jsx_runtime.jsx)("div",{className:"leg-inner",children:(0,jsx_runtime.jsx)("div",{className:"fur"})})]}),(0,jsx_runtime.jsxs)("div",{className:"leg",children:[(0,jsx_runtime.jsx)("div",{className:"fur"}),(0,jsx_runtime.jsx)("div",{className:"leg-inner",children:(0,jsx_runtime.jsx)("div",{className:"fur"})})]}),(0,jsx_runtime.jsxs)("div",{className:"leg",children:[(0,jsx_runtime.jsx)("div",{className:"fur"}),(0,jsx_runtime.jsx)("div",{className:"leg-inner",children:(0,jsx_runtime.jsx)("div",{className:"fur"})})]})]}),(0,jsx_runtime.jsx)("div",{className:"tail",children:(0,jsx_runtime.jsx)("div",{className:"tail",children:(0,jsx_runtime.jsx)("div",{className:"tail",children:(0,jsx_runtime.jsx)("div",{className:"tail -end",children:(0,jsx_runtime.jsx)("div",{className:"tail ",children:(0,jsx_runtime.jsx)("div",{className:"tail",children:(0,jsx_runtime.jsx)("div",{className:"tail",children:(0,jsx_runtime.jsx)("div",{className:"tail"})})})})})})})})]})})})}var Loading_templateObject,_templateObject2,Style={Container:styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    *,\n    *:before,\n    *:after {\n      position: relative;\n      -webkit-animation-timing-function: var(--easing) !important;\n      animation-timing-function: var(--easing) !important;\n    }\n\n    * {\n      --color-fur: #ffb141;\n      --color-fur-dark: #f5832c;\n      --color-spot: #f9584c;\n      --color-snout: #544258;\n      --color-collar: #3eab6c;\n      --duration: 0.7s;\n      --semi-duration: calc(var(--duration) / 2);\n      --easing: cubic-bezier(0.5, 0, 0.5, 1);\n      --stagger: calc(-1 * var(--semi-duration) / 2);\n    }\n\n    width: 100%;\n    height: 100%;\n\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n\n    .dog {\n      z-index: 1;\n      height: 300px;\n      width: 300px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n    }\n\n    .dog * {\n      position: absolute;\n      will-change: transform;\n    }\n\n    .dog:before {\n      content: '';\n      position: absolute;\n      bottom: 13.3333333333%;\n      left: 0;\n      width: 100%;\n      height: 3.3333333333%;\n      background-color: #d3d1d1;\n      border-radius: 2px;\n      -webkit-animation: shadow calc(1 * var(--semi-duration)) infinite;\n      animation: shadow calc(1 * var(--semi-duration)) infinite;\n    }\n\n    .torso {\n      width: 56.6666666667%;\n      height: 33.3333333333%;\n      -webkit-animation: torso var(--semi-duration) both infinite;\n      animation: torso var(--semi-duration) both infinite;\n    }\n\n    .fur {\n      position: absolute;\n      overflow: hidden;\n    }\n\n    .fur:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 150%;\n      top: 0;\n      left: 0;\n      background-color: var(--color, var(--color-fur));\n      -webkit-transform-origin: center bottom;\n      -ms-transform-origin: center bottom;\n      transform-origin: center bottom;\n    }\n\n    .torso > .fur {\n      height: 100%;\n      width: 185px;\n      border-top-left-radius: 40px;\n      -webkit-transform-origin: left center;\n      -ms-transform-origin: left center;\n      transform-origin: left center;\n      -webkit-transform: rotate(-20deg) translateY(10px);\n      -ms-transform: rotate(-20deg) translateY(10px);\n      transform: rotate(-20deg) translateY(10px);\n      z-index: 1;\n    }\n\n    .torso > .fur:after {\n      height: 100%;\n      width: 100%;\n      border-bottom-left-radius: 200px 85px;\n      border-bottom-right-radius: 100px;\n    }\n\n    .torso .spot {\n      width: 120px;\n      height: 120px;\n      bottom: 40px;\n      left: -20px;\n      border-radius: 50%;\n      background-color: var(--color-spot);\n      z-index: 1;\n      -webkit-animation: spot var(--duration) calc(-1 * var(--semi-duration)) both infinite;\n      animation: spot var(--duration) calc(-1 * var(--semi-duration)) both infinite;\n    }\n\n    .torso .spot:after {\n      content: '';\n      height: 20px;\n      width: 20px;\n      border-radius: 50%;\n      background-color: inherit;\n      position: absolute;\n      bottom: -10px;\n      right: 5px;\n    }\n\n    .neck {\n      width: 50%;\n      height: 100px;\n      right: -5px;\n      bottom: calc(100% - 10px);\n      -webkit-transform-origin: center bottom;\n      -ms-transform-origin: center bottom;\n      transform-origin: center bottom;\n      -webkit-transform: rotate(15deg);\n      -ms-transform: rotate(15deg);\n      transform: rotate(15deg);\n      z-index: 2;\n    }\n\n    .neck > .fur {\n      border-bottom-left-radius: 10px;\n      height: 100%;\n      width: 100%;\n    }\n\n    .neck > .fur:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 50px;\n      width: 100%;\n      background-color: var(--color-fur-dark);\n      z-index: 1;\n      -webkit-transform-origin: right bottom;\n      -ms-transform-origin: right bottom;\n      transform-origin: right bottom;\n      -webkit-transform: rotate(15deg);\n      -ms-transform: rotate(15deg);\n      transform: rotate(15deg);\n    }\n\n    .head {\n      height: 80%;\n      width: 145%;\n      left: -2%;\n      bottom: 50%;\n      -webkit-transform-origin: left center;\n      -ms-transform-origin: left center;\n      transform-origin: left center;\n      z-index: 2;\n      -webkit-animation: head var(--semi-duration) calc(var(--semi-duration) / 4) infinite;\n      animation: head var(--semi-duration) calc(var(--semi-duration) / 4) infinite;\n    }\n\n    .head > .fur {\n      height: 100%;\n      width: 100%;\n      border-bottom-right-radius: 80px;\n    }\n\n    .head > .fur:before {\n      content: '';\n      position: absolute;\n      top: -80%;\n      left: -30%;\n      width: 100%;\n      height: 0;\n      padding-top: 100%;\n      background-color: var(--color-spot);\n      z-index: 1;\n      border-radius: 50%;\n    }\n\n    .snout {\n      --color: var(--color-snout);\n      width: 25%;\n      height: 0;\n      padding-top: 25%;\n      background-color: var(--color);\n      top: 0;\n      right: -5px;\n      border-bottom-left-radius: 100%;\n      z-index: 1;\n    }\n\n    .ears {\n      bottom: 40%;\n      height: 100%;\n      width: 30%;\n      left: 0;\n      z-index: -1;\n    }\n\n    .ear {\n      --color: var(--color-spot);\n      width: 100%;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      -webkit-transform-origin: left bottom;\n      -ms-transform-origin: left bottom;\n      transform-origin: left bottom;\n      -webkit-transform: rotate(-10deg);\n      -ms-transform: rotate(-10deg);\n      transform: rotate(-10deg);\n      -webkit-animation: ear-front calc(var(--duration) / 2) infinite;\n      animation: ear-front calc(var(--duration) / 2) infinite;\n    }\n\n    .ear:before {\n      content: '';\n      position: absolute;\n      height: 25px;\n      width: 15px;\n      z-index: 2;\n      top: -2px;\n      right: -7px;\n      border-top-left-radius: 100%;\n      border-width: 2px;\n      border-color: transparent;\n      border-style: solid;\n      border-left: 2px solid var(--color-snout);\n      -webkit-transform-origin: bottom left;\n      -ms-transform-origin: bottom left;\n      transform-origin: bottom left;\n      -webkit-animation: ear-mark var(--semi-duration) calc(-1 * var(--semi-duration)) infinite;\n      animation: ear-mark var(--semi-duration) calc(-1 * var(--semi-duration)) infinite;\n    }\n\n    .ear > .fur {\n      border-top-left-radius: 100%;\n      height: 100%;\n      width: 100%;\n    }\n\n    .ear:nth-child(2) {\n      left: 15px;\n      bottom: 5px;\n      -webkit-transform: rotate(-5deg);\n      -ms-transform: rotate(-5deg);\n      transform: rotate(-5deg);\n      --color: var(--color-fur);\n      z-index: -1;\n      -webkit-animation: ear-back calc(var(--duration) / 2) infinite both;\n      animation: ear-back calc(var(--duration) / 2) infinite both;\n    }\n\n    .eye {\n      --size: 6%;\n      --color: var(--color-snout);\n      width: var(--size);\n      height: 0;\n      padding: var(--size);\n      left: 35%;\n      top: 20%;\n      border-radius: 50%;\n      background-color: var(--color);\n      z-index: 1;\n    }\n\n    .eye:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      background-color: var(--color);\n      z-index: 1;\n    }\n\n    .eye:after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: -50%;\n      top: -50%;\n      border-top-left-radius: 100%;\n      border-width: 2px;\n      border-color: var(--color);\n      border-style: solid;\n      border-bottom-color: var(--color-spot);\n      border-right-color: var(--color-spot);\n      -webkit-transform: scale(1.25);\n      -ms-transform: scale(1.25);\n      transform: scale(1.25);\n      z-index: 0;\n    }\n\n    .collar {\n      width: calc(100% + 10px);\n      height: 15%;\n      background-color: var(--color-collar);\n      left: -5px;\n      bottom: 30px;\n      border-radius: 5px;\n      -webkit-animation: collar var(--semi-duration) calc(var(--semi-duration) / 4) infinite;\n      animation: collar var(--semi-duration) calc(var(--semi-duration) / 4) infinite;\n      z-index: 2;\n    }\n\n    .collar:after {\n      content: '';\n      width: 18%;\n      height: 120%;\n      border-radius: 50%;\n      background: var(--color-snout);\n      position: absolute;\n      right: 0%;\n      top: 110%;\n      -webkit-transform-origin: center top;\n      -ms-transform-origin: center top;\n      transform-origin: center top;\n      -webkit-animation: tag var(--semi-duration) infinite both;\n      animation: tag var(--semi-duration) infinite both;\n    }\n\n    .torso > .legs {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n\n    .leg {\n      position: absolute;\n      height: 65px;\n      width: 45px;\n      background-color: var(--color);\n      -webkit-transform-origin: center 5px;\n      -ms-transform-origin: center 5px;\n      transform-origin: center 5px;\n      -webkit-animation: leg infinite var(--duration) var(--delay, 0s);\n      animation: leg infinite var(--duration) var(--delay, 0s);\n    }\n\n    .leg > .fur {\n      width: 144.4444444444%;\n      height: 100%;\n    }\n\n    .leg > .fur:after {\n      width: 45px;\n      bottom: 0;\n      top: initial;\n      -webkit-transform: rotate(15deg);\n      -ms-transform: rotate(15deg);\n      transform: rotate(15deg);\n    }\n\n    .leg-inner {\n      position: absolute;\n      height: 65%;\n      width: 100%;\n      top: calc(100%);\n      -webkit-transform-origin: center top;\n      -ms-transform-origin: center top;\n      transform-origin: center top;\n    }\n\n    .leg-inner:before {\n      content: '';\n      width: 45px;\n      height: 45px;\n      background-color: var(--color);\n      position: absolute;\n      border-radius: 50%;\n      top: -22.5px;\n    }\n\n    .leg > .leg-inner {\n      -webkit-animation: leg-inner infinite var(--duration) calc(var(--delay));\n      animation: leg-inner infinite var(--duration) calc(var(--delay));\n      -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n      transform: rotate(90deg);\n    }\n\n    .leg-inner > .fur {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow: hidden;\n    }\n\n    .leg-inner > .fur:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      height: 150%;\n      top: 0;\n      left: 0;\n      background-color: var(--color);\n      -webkit-transform-origin: center top;\n      -ms-transform-origin: center top;\n      transform-origin: center top;\n      -webkit-transform: rotate(15deg);\n      -ms-transform: rotate(15deg);\n      transform: rotate(15deg);\n    }\n\n    .legs > .leg {\n      bottom: 5px;\n      --color: var(--color-fur);\n    }\n\n    .legs > .leg:nth-child(1),\n    .legs .leg:nth-child(3) {\n      right: 15px;\n    }\n\n    .legs > .leg:nth-child(3),\n    .legs > .leg:nth-child(4) {\n      --color: var(--color-fur-dark);\n      z-index: -1;\n    }\n\n    .legs > .leg:nth-child(1),\n    .legs .leg:nth-child(4) {\n      --delay: 0s;\n    }\n\n    .legs > .leg:nth-child(2),\n    .legs > .leg:nth-child(3) {\n      --delay: calc(-1 * var(--duration) / 2);\n    }\n\n    .legs > .leg:nth-child(2) {\n      left: 0;\n    }\n\n    .legs > .leg:nth-child(4) {\n      left: 0;\n    }\n\n    .tail {\n      height: 15px;\n      width: 20px;\n      background-color: var(--color);\n      border-top-right-radius: 10px 100%;\n      border-top-left-radius: 10px 100%;\n      -webkit-animation: tail var(--semi-duration) infinite;\n      animation: tail var(--semi-duration) infinite;\n    }\n\n    .torso > .tail {\n      --color: var(--color-spot);\n      bottom: calc(100% - 15px);\n      left: 0;\n      -webkit-transform-origin: center bottom;\n      -ms-transform-origin: center bottom;\n      transform-origin: center bottom;\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n    }\n\n    .tail > .tail {\n      bottom: calc(90%);\n      -webkit-transform-origin: bottom left;\n      -ms-transform-origin: bottom left;\n      transform-origin: bottom left;\n      -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      -ms-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      -webkit-animation: tail-inner var(--semi-duration) var(--stagger) infinite;\n      animation: tail-inner var(--semi-duration) var(--stagger) infinite;\n    }\n\n    @-webkit-keyframes shadow {\n      from,\n      to {\n        -webkit-transform: scaleX(0.75);\n        transform: scaleX(0.75);\n      }\n      45%,\n      55% {\n        -webkit-transform: scaleX(0.5);\n        transform: scaleX(0.5);\n      }\n    }\n\n    @keyframes shadow {\n      from,\n      to {\n        -webkit-transform: scaleX(0.75);\n        transform: scaleX(0.75);\n      }\n      45%,\n      55% {\n        -webkit-transform: scaleX(0.5);\n        transform: scaleX(0.5);\n      }\n    }\n\n    @-webkit-keyframes torso {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      50% {\n        -webkit-transform: translateY(15%);\n        transform: translateY(15%);\n      }\n    }\n\n    @keyframes torso {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      50% {\n        -webkit-transform: translateY(15%);\n        transform: translateY(15%);\n      }\n    }\n\n    @-webkit-keyframes spot {\n      from,\n      66%,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: translateX(10px);\n        transform: translateX(10px);\n      }\n    }\n\n    @keyframes spot {\n      from,\n      66%,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: translateX(10px);\n        transform: translateX(10px);\n      }\n    }\n\n    @-webkit-keyframes head {\n      from,\n      to {\n        -webkit-transform: rotate(-10deg);\n        transform: rotate(-10deg);\n      }\n      50% {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n    }\n\n    @keyframes head {\n      from,\n      to {\n        -webkit-transform: rotate(-10deg);\n        transform: rotate(-10deg);\n      }\n      50% {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n    }\n\n    @-webkit-keyframes ear-front {\n      50% {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n    }\n\n    @keyframes ear-front {\n      50% {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n    }\n\n    @-webkit-keyframes ear-mark {\n      from,\n      to {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      50% {\n        -webkit-transform: rotate(25deg);\n        transform: rotate(25deg);\n      }\n    }\n\n    @keyframes ear-mark {\n      from,\n      to {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      50% {\n        -webkit-transform: rotate(25deg);\n        transform: rotate(25deg);\n      }\n    }\n\n    @-webkit-keyframes ear-back {\n      from,\n      to {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      50% {\n        -webkit-transform: rotate(-10deg);\n        transform: rotate(-10deg);\n      }\n    }\n\n    @keyframes ear-back {\n      from,\n      to {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n      }\n      50% {\n        -webkit-transform: rotate(-10deg);\n        transform: rotate(-10deg);\n      }\n    }\n\n    @-webkit-keyframes collar {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      50% {\n        -webkit-transform: translateY(-25%);\n        transform: translateY(-25%);\n      }\n    }\n\n    @keyframes collar {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      50% {\n        -webkit-transform: translateY(-25%);\n        transform: translateY(-25%);\n      }\n    }\n\n    @-webkit-keyframes tag {\n      from,\n      to {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n      50% {\n        -webkit-transform: rotate(-15deg) scaleY(1.5);\n        transform: rotate(-15deg) scaleY(1.5);\n      }\n    }\n\n    @keyframes tag {\n      from,\n      to {\n        -webkit-transform: rotate(-15deg);\n        transform: rotate(-15deg);\n      }\n      50% {\n        -webkit-transform: rotate(-15deg) scaleY(1.5);\n        transform: rotate(-15deg) scaleY(1.5);\n      }\n    }\n\n    @-webkit-keyframes leg {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: rotate(-55deg);\n        transform: rotate(-55deg);\n      }\n      66% {\n        -webkit-transform: rotate(-20deg);\n        transform: rotate(-20deg);\n      }\n    }\n\n    @keyframes leg {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: rotate(-55deg);\n        transform: rotate(-55deg);\n      }\n      66% {\n        -webkit-transform: rotate(-20deg);\n        transform: rotate(-20deg);\n      }\n    }\n\n    @-webkit-keyframes leg-inner {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: rotate(70deg);\n        transform: rotate(70deg);\n      }\n      76% {\n        -webkit-transform: none;\n        transform: none;\n      }\n    }\n\n    @keyframes leg-inner {\n      from,\n      to {\n        -webkit-transform: none;\n        transform: none;\n      }\n      33% {\n        -webkit-transform: rotate(70deg);\n        transform: rotate(70deg);\n      }\n      76% {\n        -webkit-transform: none;\n        transform: none;\n      }\n    }\n\n    @-webkit-keyframes tail {\n      from,\n      to {\n        -webkit-transform: rotate(-45deg) translateX(-15%);\n        transform: rotate(-45deg) translateX(-15%);\n      }\n      50% {\n        -webkit-transform: rotate(-25deg) translateX(15%);\n        transform: rotate(-25deg) translateX(15%);\n      }\n    }\n\n    @keyframes tail {\n      from,\n      to {\n        -webkit-transform: rotate(-45deg) translateX(-15%);\n        transform: rotate(-45deg) translateX(-15%);\n      }\n      50% {\n        -webkit-transform: rotate(-25deg) translateX(15%);\n        transform: rotate(-25deg) translateX(15%);\n      }\n    }\n\n    @-webkit-keyframes tail-inner {\n      from,\n      to {\n        -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n        transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      }\n      50% {\n        -webkit-transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n        transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      }\n    }\n\n    @keyframes tail-inner {\n      from,\n      to {\n        -webkit-transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n        transform: rotate(-10deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      }\n      50% {\n        -webkit-transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n        transform: rotate(5deg) translateY(50%) scaleX(0.8) scaleY(0.9);\n      }\n    }\n  "])))};function Loading(){return(0,jsx_runtime.jsxs)(Loading_Style.Container,{children:[(0,jsx_runtime.jsx)(WalkingDog,{}),(0,jsx_runtime.jsxs)(Loading_Style.Caption,{children:[(0,jsx_runtime.jsx)("span",{className:"animation",children:"L"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"o"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"a"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"d"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"i"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"n"}),(0,jsx_runtime.jsx)("span",{className:"animation",children:"g"})]})]})}var _WalkingDog$parameter,_WalkingDog$parameter2,_WalkingDog$parameter3,Loading_Style={Container:styled_components_browser_esm.ZP.div(Loading_templateObject||(Loading_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  "]))),Caption:styled_components_browser_esm.ZP.h2(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    width: 100%;\n    margin-top: 20px;\n\n    font-family: monospace;\n    font-size: 35px;\n    font-weight: bold;\n    text-align: center;\n    color: #000000;\n\n    .animation {\n      opacity: 0;\n      animation: loading-text 3s infinite ease-in-out;\n      display: inline-block;\n\n      &:nth-child(1) {\n        animation-delay: 0.2s;\n      }\n      &:nth-child(2) {\n        animation-delay: 0.3s;\n      }\n      &:nth-child(3) {\n        animation-delay: 0.4s;\n      }\n      &:nth-child(4) {\n        animation-delay: 0.5s;\n      }\n      &:nth-child(5) {\n        animation-delay: 0.6s;\n      }\n      &:nth-child(6) {\n        animation-delay: 0.7s;\n      }\n      &:nth-child(7) {\n        animation-delay: 0.8s;\n      }\n\n      @keyframes loading-text {\n        0% {\n          transform: translateY(0%);\n          opacity: 1;\n        }\n        20% {\n          transform: translateY(-60%);\n          opacity: 1;\n        }\n        40% {\n          transform: translateY(-100%);\n          opacity: 0;\n        }\n        60% {\n          opacity: 0;\n        }\n        80% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n    }\n  "])))},Loading_stories={title:"Example/LoadingAnimation",component:Loading,tags:["autodocs"]},Loading_stories_WalkingDog={render:function render(){return(0,jsx_runtime.jsx)(Loading,{})}};Loading_stories_WalkingDog.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Loading_stories_WalkingDog.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_WalkingDog$parameter=Loading_stories_WalkingDog.parameters)||void 0===_WalkingDog$parameter?void 0:_WalkingDog$parameter.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: () => <Loading />\n}"},null===(_WalkingDog$parameter2=Loading_stories_WalkingDog.parameters)||void 0===_WalkingDog$parameter2||null===(_WalkingDog$parameter3=_WalkingDog$parameter2.docs)||void 0===_WalkingDog$parameter3?void 0:_WalkingDog$parameter3.source)})});var __namedExportsOrder=["WalkingDog"]}}]);