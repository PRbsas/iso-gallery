var $gallery = $('.gallery').isotope({
  // options
  itemSelector: '.photo',
  layoutMode: 'masonry'
});

$gallery.imagesLoaded().progress( function() {
    $gallery.isotope('layout');
})
