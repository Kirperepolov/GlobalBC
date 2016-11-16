
function updateStoryComment(id) {
    $.get({
        url: 'get/story/id',
        success: function (story){
            $.get({
                url: 'get/story/comment/:id',
                success: function (comment) {
                    asyncUserDialog(function (updatedText) {
                        $.post({
                            url: 'post/story/comment/id',
                            data: updatedText,
                            success: function () {
                                notifyUser();
                            }
                        });
                    });
                }
            });
        }
    });
}
////////////////////////////////////////////////////////////////

function updateStoryComment(id) {
    fetch('get/story/id')
    .then(function (story) {
        return fetch('get/story/comment/id');
    })
    .then(asyncUserDialog())
    .then(function (updatedText) {
        return fetch('get/story/comment/id', method: 'POST', body: updatedText);
    })
    .then(function () {
        notifyUser();
     })
    .catch(handleErrorDuringUpdating());
}

updateStoryComment(12);
