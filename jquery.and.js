(function (modules, root, factory) {
  if (typeof define === "function" && define.amd) {
    define(modules, factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory.call(root);
  } else {
    root["mu-jquery-and/jquery.and"] = factory.call(root);
  }
})([], this, function () {
  function and($, element, match) {
    return $(match).length !== 0;
  }

  return function ($) {
    return $.expr.createPseudo
      ? $.expr.createPseudo(function (match) {
        return function (element) {
          return and($, element, match);
        }
      })
      : function (element, index, match) {
        return and($, element, match[3]);
      };
  }
});
