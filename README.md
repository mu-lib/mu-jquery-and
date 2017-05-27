# mu-jquery-and

jQuery expression for filtering elements.

## Installation

```
npm install mu-jquery-and
```

```
bower install mu-jquery-and
```

## Usage

```javascript
// AMD
require(["jquery", "mu-jquery-and/jquery.and"], function($, and) {
  $.expr[":"].and = and($);
});

// CJS
$.expr[":"].and  = require("mu-jquery-and/jquery.and")($);

// Global
$.expr[":"].and  = window["mu-jquery-and/jquery.and"]($);
```

```javascript
// Set the value of last to "Doe" if the value of first is "John" or "Jane"
$("input['name'='last']:and(input[name='first'][value='John'], input[name='first'][value='Jane'])").val("Doe");
```
