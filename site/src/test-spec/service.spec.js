describe("Testing the LoadService.", function(){
  beforeEach(module('GLApp'));

  var myService;
  var $httpBackend;

  beforeEach(function () {
    inject(function($injector){
      myService = $injector.get('LoadService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  it('Is expected to inject the service correctly',function(){
    $httpBackend.whenGET('site/src/session_list.json').respond({lectures:['val1','val2']});

    myService.getList().then(function(resp){
      expect(resp).toEqual(['val1','val2']);
      expect(myService.lecturesList).toEqual(['val1','val2']);
    });

    $httpBackend.flush();
  });
});
