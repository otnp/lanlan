function makeSameHeight() {
  var $sameHeightChildren = $(this).find('.same-height');
  $sameHeightChildren.removeAttr("style");
  var maxHeight = 0;

  $sameHeightChildren.each(function() {
      maxHeight = Math.max(maxHeight, $(this).outerHeight());
  });

  $sameHeightChildren.css({ height: maxHeight + 'px' });
}

$(document).ready(function() {

  // Make Panels the same Height
  $('.same-height-parent').each(makeSameHeight);
  
  $(window).resize(function() {

    $('.same-height-parent').each(makeSameHeight);
  });

  $('.group-help').popover()

});
