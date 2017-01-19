(function() {
  // add button snippet
  $(document).on('click', '.btn-add', function(e)
  {
    e.preventDefault();

    var lectureBlock = $(this).parents('.lecture-form, .hometask-form'),
    currentEntry = $(this).parents('.lecture, .hometask'),
    newEntry = $(currentEntry.clone()).appendTo(lectureBlock);

    newEntry.find('input').val('');
    $(this).removeClass('btn-add').addClass('btn-remove').text('-');
  }).on('click', '.btn-remove', function(e)
  {
    $(this).parents('.lecture, .hometask').remove();

    e.preventDefault();
    return false;
  });
}());
