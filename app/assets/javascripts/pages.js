$(function() {
  var summer_note;
  summer_note = $('#page_body');
  summer_note.summernote({
    height: 300
  });
  summer_note.code(summer_note.val());
  return summer_note.closest('form').submit(function() {
    summer_note.val(summer_note.code());
    return true;
  });
});