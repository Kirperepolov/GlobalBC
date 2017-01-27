describe("Administration page controller.",function(){

  beforeEach(module('GLApp'));

  var $controller;
  var adminController;

  beforeEach(function () {
    inject(function($injector){
      myService = $injector.get('LoadService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;

    var sessionsMock=[];


    adminController = $controller('AdminController',
                                      {sessions:sessionsMock,
                                      LoadService: myService});

  }));


  it("Expected saveSessions() returns undefined", function(){
    // test actions
    var x = adminController.saveSessions();
    // test result
    expect(x).toBeUndefined();
  });

  it("check whether 'addSession()' works.", function(){
    adminController.session = {id:5};
    adminController.addSession();
    expect(myService.lecturesList).toEqual({});
  });

});
