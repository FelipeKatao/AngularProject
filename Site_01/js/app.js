var app = angular.module("myApp", ["ngRoute"]); //Criação de um novo App Angular

//Criação do controlador Angular
app.controller('dados',function($scope){
  $scope.Nome = "Marcos"
  $scope.Sobrenome = "Catao"
})

//Criação do controlador Angular
app.controller('dados_pessoa',function($scope){

  

  $scope._showVar = false
  $scope.ShowFunc =  function(){
    $scope._showVar = !$scope._showVar
  }
  $scope.Nome = "Marcos"
  $scope.Sobrenome = "Machado"
  $scope.MudarNome = function(){
    $scope._showVar = !$scope._showVar
    if($scope.Nome == "Felipe"){
      $scope.Nome = "Marcos"
    }
    else{
      $scope.Nome = "Felipe"
    }
  }
  $scope.records = ["teste","testeA","testeB"]
  $scope.MyObj = {
    "name":"alfred",
    "Pais":"Brasil",
    "teste":0
  }
  $scope.ListRecords = [{
    "Nome":"Felipe",
    "Pais":"Brasil"
  },
{
  "Nome":"Felipe",
    "Pais":"Brasil"
}]
})
//Criação de uma nova Tag Angular Html
app.directive("titulo", function() {
  return {
    template : "<h1>Dados de {{Nome}}</h1>"
  };
});
//Criação de uma nova Tag Angular Html
app.directive("formulario",function(){
  return {
    template : "<h1>Nome: {{Nome}}</h1>"+
    "<h3>Sobrenome: {{Sobrenome}}"+
    "<div ng-switch on='Nome'>"+
    "<div ng-switch-when='Felipe'>"+
        "<div>Felipe</div>"+
        "<h3>Felipe Ok</h3>"+
    "</div>"+
    "<div ng-switch-default>"+
        "<div>Marcos Aqui!!</div>"+
    "</div>"
  };
})

app.directive("card",function(){
  return{
    template: `
    <div class="card">
     <h2> {{Nome}} </h2>
    </div>
    `
  }
})

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "./templates/main.htm"
  })
  .when("/red/:name*", {
    templateUrl : "./templates/red.htm",
    controller:"redCtrl"
  })
  .when("/green", {
    templateUrl : "green.htm"
  })
  .when("/blue", {
    templateUrl : "blue.htm"
  });
});

app.controller("redCtrl",function ($scope){
  $scope.msg = "red page load"
})