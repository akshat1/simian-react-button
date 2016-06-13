# simian-react-button
A button component that helps you standardise your buttons. There is a css file provided, but you are encouraged to use that as a model to write your own.


## Example

```
const {
  Button,
  ButtonType,
  ButtonSize
  } = require('simian-react-button');

.
.
.

<Button
  className  = 'string_class_name'
  type       = {ButtonType.INDICATOR}      // one of the button type enum values. NORMAL by default.
  size       = {ButtonSize.LARGE}          // one of the button size enum values. MEDIUM by default
  disabled   = {false}                     // a boolean
  label      = 'a string label'
  onClick    = {eventHandlerFunction}
  primary    = {true}                      // a boolean
  faIconName = 'string font-awesome icon name'
/>

```


## Motivation
The purpose of this component is to avoid having a multitude of classnames in your code. So instead of something like `<button className = 'button button-primary button-medium'>Blah</button>`, you can instead supply primary, size etc. as attributes with enum values. The output will still be the same.


## Notes
### Button
The react component as described in the example.

### ButtonSize
```
{
  SMALL,
  MEDIUM,
  LARGE
}
```

### ButtonType
```
{
  NORMAL
  INDICATOR,
  CLOSE
}
```

### FontAwesome support
If you want, you can supply the name of a font-awesome icon as faIconName property and this will cause the button to have the following structure...
```
<button>
  <div class = 'fa fa-icon-name'/>
  Label
</button>
```
An icon name like 'eye-slash' will cause the inner div to have the class 'fa fa-eye-slash'. Refer to the Font Awesome documentation to see the list of available icons.


### The class-names
The classnames corresponding to various sizes and modifiers are follows
```
{
  "Button": "simian-button",
  "Modifier": {
    "PRIMARY": "simian-modifier-primary"
  },
  "Type": {
    "NORMAL": "",
    "INDICATOR": "simian-button-type-indicator",
    "CLOSE": "simian-button-type-close"
  },
  "Size": {
    "SMALL": "simian-small",
    "MEDIUM": "simian-medium",
    "LARGE": "simian-large"
  }
}
```
