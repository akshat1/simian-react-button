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
      StyleClass.Button
    ];
    let icon = null;
    let {
      type: buttonType = ButtonType.NORMAL,
      size: buttonSize = ButtonSize.DEFAULT,
      disabled,
      label,
      onClick = _.noop,
      faIconName,
      className,
      primary,
      style = {}
    } = props;
    if (buttonType === ButtonType.INDICATOR)
      classNames.push(StyleClass.Type.INDICATOR);

    else if (buttonType === ButtonType.CLOSE) {
      faIconName = 'close';
      buttonSize = ButtonSize.Small;
      classNames.push(StyleClass.Type.CLOSE);
    }

    if (className)
      classNames.push(className);

    if (primary)
      classNames.push(StyleClass.Modifier.PRIMARY);

    classNames.push(StyleClass.Size[buttonSize]);

    if (faIconName) {
      icon = <div className = {`fa fa-${faIconName.toLowerCase()}`}/>
    }

    return (
      <button
        className = {`${classNames.join(' ')}`}
        disabled  = {disabled}
        onClick   = {onClick}
        style     = {style}
        >
        {icon}
        {props.children}
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
  label      : React.PropTypes.string,
  onClick    : React.PropTypes.func,
  faIconName : React.PropTypes.string,
  primary    : React.PropTypes.bool,
  style      : React.PropTypes.object
};


module.exports = {
  Button,
  ButtonType,
  ButtonSize
};
