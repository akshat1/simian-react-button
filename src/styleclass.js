'use strict';
/**
Class name for simian button.
*/
const Type     = require('./type.js');
const Size     = require('./size.js');
const Modifier = require('./modifier.js');


const SizeStyleClass = {};
SizeStyleClass[Size.SMALL]  = 'simian-small';
SizeStyleClass[Size.MEDIUM] = 'simian-medium';
SizeStyleClass[Size.LARGE]  = 'simian-large';


const TypeStyleClass = {};
TypeStyleClass[Type.INDICATOR] = 'simian-button-type-indicator';
TypeStyleClass[Type.CLOSE]     = 'simian-button-type-close';


const ModifierStyleClass = {};
ModifierStyleClass[Modifier.PRIMARY] = 'simian-modifier-primary';


const StyleClass = {
  Button   : 'simian-button',
  Modifier : ModifierStyleClass,
  Type     : TypeStyleClass,
  Size     : SizeStyleClass
};

module.exports = StyleClass;
