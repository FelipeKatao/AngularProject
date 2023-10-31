var listagem_usuarios = angular.module("listagem_usuarios",["ngRoute"])
var Routeparam = 0
listagem_usuarios.controller("Usuarios",function($scope, $routeParams){




    $scope.RemoverUsuario = function(Nome){
       document.getElementById(Nome).remove()
       $scope.usuarios = $scope.usuarios.filter(function(item){
        return item.Nome !== Nome;
      });
    }
    $scope.pdfUrl = 'p.pdf';
    console.log($routeParams)
    $scope.Tema = "green"
    $scope.usuarios = [
        {
            "Nome":"Felipe",
            "Sobrenome":"Catao",
            "Profissão":"Professor",
            "UsuarioId":456,
            "UltimoAcesso": Date.now()
        },
        {
            "Nome":"FelipeA",
            "Sobrenome":"Catao",
            "Profissão":"Professor",
            "UsuarioId":456,
            "UltimoAcesso": Date.now()
        },
        {
            "Nome":"FelipeB",
            "Sobrenome":"Catao",
            "Profissão":"Professor",
            "UsuarioId":456,
            "UltimoAcesso": Date.now()
        },
        {
            "Nome":"FelipeC",
            "Sobrenome":"Catao",
            "Profissão":"Professor",
            "UsuarioId":456,
            "UltimoAcesso": Date.now()
        },
        {
            "Nome":"FelipeD",
            "Sobrenome":"Catao",
            "Profissão":"Professor",
            "UsuarioId":456,
            "UltimoAcesso": Date.now()
        }
    ]
})

listagem_usuarios.controller("mainControlle",function($scope){
    $scope.tema = "colors"
    $scope.Artigos = {"Tipo":"Calçado","Produto":"Tenis"}
})

listagem_usuarios.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./templates/main.htm",
      controller: "mainControlle"
    })
    .when("/usuarios", {
        templateUrl : "./templates/usuario.htm",
        controller:"Usuarios"
      })
      .when("/sobre", {
        templateUrl : "./templates/sobre.htm",
        controller:"Usuarios"
      })
    .otherwise({
        templateUrl : "./templates/notFound.htm"
        
      });
  });