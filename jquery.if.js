(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root["mu-jquery-if/jquery.if"] = factory();
  }
})(this, function () {
  function $if($, element, match) {
    return $(match).length !== 0;
  }

  return function ($) {
    return $.expr.createPseudo
      ? $.expr.createPseudo(function (match) {
        return function (element) {
          return $if($, element, match);
        }
      })
      : function (element, index, match) {
        return $if($, element, match[3]);
      };
  }
});
