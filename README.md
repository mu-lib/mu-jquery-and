# mu-jquery-if

jQuery expression for filtering elements.

## Installation

```
npm install mu-jquery-if
```

```
bower install mu-jquery-if
```

## Usage

```javascript
// AMD
require(["jquery", "mu-jquery-if/jquery.if"], function($, $if) {
  $.expr[":"].if = $if($);
});

// CJS
$.expr[":"].if  = require("mu-jquery-if/jquery.if")($);

// Global
$.expr[":"].if  = window["mu-jquery-if/jquery.if"]($);
```

```javascript
// Set the value of last to "Doe" if the value of first is "John" or "Jane"
$("input['name'='last']:if(input[name='first'][value='John'], input[name='first'][value='Jane'])").val("Doe");
```
