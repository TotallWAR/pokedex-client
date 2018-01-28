import getMuiTheme from 'material-ui/styles/getMuiTheme'
// import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

// theme for MD
export const getTheme = () => {
  let overwrites = {
    palette: {
      primary1Color: '#5bcb94',
      primary2Color: '#5bcb94',
      primary3Color: '#523f84',
      canvasColor: '#f6f6f6',
      textColor: '#202126',
      secondaryTextColor: '#3c3d3d',
      pickerHeaderColor: '#3c3d3d',
      disabledColor: '#adb5bd',
      // color of button background
      alternateTextColor: '#f6f6f6'
      // accent1Color: _colors.pinkA200,
      // accent2Color: _colors.pinkA400,
      // accent3Color: _colors.pinkA100,
      // secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
      // borderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
      // disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
      // pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
      // clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
    }
  }
  return getMuiTheme(null, overwrites)
}
