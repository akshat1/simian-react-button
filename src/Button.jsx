'use strict';

const React = require('react');
const _     = require('lodash');

const ButtonType = require('./type.js');
const ButtonSize = require('./size.js');
const StyleClass = require('./styleclass.js');


class Button extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let props = this.props;
    let classNames = [
      StyleClass.Modifier.Button
    ];
    let icon = null;
    let {
      type: buttonType = ButtonType.Normal,
      size: buttonSize = ButtonSize.Default,
      disabled,
      label,
      onClick = _.noop,
      faIconName,
      className,
      primary
    } = props;
    if (buttonType === ButtonType.Indicator)
      classNames.push(StyleClass.Type.Indicator);

    else if (buttonType === ButtonType.Close) {
      faIconName = 'close';
      buttonSize = ButtonSize.Small;
      classNames.push(StyleClass.Type.Close);
    }

    if (className)
      classNames.push(className);

    if (primary)
      classNames.push(StyleClass.Modifier.Primary);

    classNames.push(StyleClass.Size[buttonSize]);

    if (faIconName) {
      icon = <div className = {`fa fa-${faIconName.toLowerCase()}`}/>
    }

    return (
      <button
        className = {`${classNames.join(' ')}`}
        disabled  = {disabled}
        onClick   = {onClick}
        >
        {icon}
        {label}
      </button>
    );
  }
}


Button.propTypes = {
  className  : React.PropTypes.string,
  type       : React.PropTypes.oneOf(_.values(ButtonType)),
  size       : React.PropTypes.oneOf(_.values(ButtonSize)),
  disabled   : React.PropTypes.bool,
  label      : React.PropTypes.string.isRequired,
  onClick    : React.PropTypes.func,
  faIconName : React.PropTypes.string,
  primary    : React.PropTypes.bool
};


module.exports = {
  Button,
  ButtonType,
  ButtonSize
};
