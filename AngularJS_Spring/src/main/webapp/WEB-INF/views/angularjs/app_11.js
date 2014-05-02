
//지시어 모듈 : 현재 비어 있음
angular.module('helloWorld.directive', []);
 
//필터 모듈 : 현재 비어 있음
angular.module('helloWorld.filter', []);
 
//서비스 모듈
angular.module('helloWorld.service', []).
    value('greeter', //greeter 라는 이름의 서비스 등록
    {
        salutation: 'ㅋㅋㅋㅋㅋㅋ', //인사말 기본값
         
        //setSalutation 함수 선언
        setSalutation: function(salutation)
        {
            //파라메터로 들어온 인사말을 내부의 인사말에 대입
             
            //즉, greeter 라는 서비스가 있는데 기본적으로는
            //salutation을 사용하지만, setSalutation 함수를
            //사용하면 인사말을 임의로 수정할 수 있다.
            this.salutation = salutation;
        },
    }).
    value('user', //user 라는 이름의 서비스 등록
    {
        name: 'ㅎㅎㅎㅎㅎㅎ', //이름 기본값
         
        //user 라는 서비스 안에는 load 라는 함수가 존재하는데,
        //setName 함수의 파라메터로 전달된 이름을 name 이라는
        //변수에 저장해둔다.
        setName: function(name) 
        {
            this.name = name;
        }
    }).
    value('printHello', //printHello 라는 이름의 서비스 등록
    {
        print : function(salutation, name)
        {
            return salutation + ' ' + name + '!';
        }
    });
 
//어플리케이션 모듈 - 서비스, 지시어, 필터를 포함하고 있다(?).
angular.module('helloWorld',
    ['helloWorld.service', 'helloWorld.directive', 'helloWorld.filter']).
    run(function(greeter, user) //서비스모듈에 등록된 greeter와  user 서비스를 파라메터로 가져옴
    {
        //여기에서 일종의 초기화가 이루어지고 있다.
         
        //어플리케이션 모듈은 이렇게 이 공간을 초기화를 목적으로
        //사용하게 되는 경우가 많은 걸까?
         
     
        //greeter 서비스에 포함된 setSalutation 함수를 사용해,
        //인사말을 Hello로 설정하고 있다.
        greeter.setSalutation('Hello');
         
        //user 서비스 안에 포함된 setName 함수를 사용해
        //이름을 World로 설정하고 있다.
        user.setName('World');
    });
 
 
//어플리케이션의 컨트롤러
function helloWorldController($scope, greeter, user, printHello)
{
    //뷰 상의 {{ greeting }} 부분에 출력될 모델을 결정해준다.
    $scope.greeting = printHello.print(greeter.salutation, user.name);
};
​