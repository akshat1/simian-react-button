'use strict';
/**
Class name for simian button.
*/
const Type     = require('./type.js');
const Size     = require('./size.js');
const Modifier = require('./modifier.js');


const SizeStyleClass = {};
SizeStyleClass[Size.Small]  = 'simian-small';
SizeStyleClass[Size.Medium] = 'simian-medium';
SizeStyleClass[Size.Large]  = 'simian-large';


const TypeStyleClass = {};
TypeStyleClass[Type.Indicator] = 'simian-button-type-indicator';
TypeStyleClass[Type.Close]     = 'simian-button-type-close';


const ModifierStyleClass = {};
ModifierStyleClass[Primary] = 'simian-button-primary';


const StyleClass = {
  Button   : 'simian-button',
  Modifier : ModifierStyleClass,
  Type     : TypeStyleClass,
  Size     : SizeStyleClass
};

module.exports = StyleClass;
