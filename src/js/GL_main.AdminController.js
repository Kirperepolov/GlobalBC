(function() {
  'use strict';

  angular.module('GLApp')
  .controller('AdminController',AdminController);

  AdminController.$inject=['sessions', 'LoadService'];
  function AdminController(sessions,LoadService){
    var adminka = this;
    adminka.sessions = sessions;


    // Add a new session information
    $('#add-session').click(function(e){
      e.preventDefault();

      let session = {};
      session.id = $('#session-id').val();
      session.name = $('#session-short-name').val();
      session.title = $('#session-title').val();

      session.lecture = [];
      let lectureList = $('.lecture-form .lecture');
      for (var i=0;i<lectureList.length;i++){
        let lecture = {};
        lecture.name = lectureList.find('[name="lecture-name"]')[i].value;
        lecture.url = lectureList.find('[name="lecture-url"]')[i].value;
        session.lecture.push(lecture);
      };

      session.hometask=[];
      let hometaskList = $('.hometask-form .hometask');
      for (var i=0;i<hometaskList.length;i++){
        let hometask = {};
        hometask.name = hometaskList.find('[name="hometask-name"]')[i].value;
        hometask.taskUrl = hometaskList
                                .find('[name="hometask-taskUrl"]')[i].value;

        hometask.url = hometaskList.find('[name="hometask-url"]')[i].value;

        session.hometask.push(hometask);
        LoadService.lecturesList.push(session);
        $('form#session-control').trigger("reset");
        $('#save-sessions').removeClass('hidden');
        // http://google.com/
      };

    });
    $('#save-sessions').click(function(e){
      e.preventDefault();

      fetch("src/session_list.json",
      {
        method: "PATCH",
        contenType: 'application/json',
        dataType:"json",
        body: JSON.stringify({lectures:LoadService.lecturesList})
      })
      .then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) })

      $(this).addClass('hidden');
    });

  }

}());
