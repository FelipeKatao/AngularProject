var ListaApp = angular.module("lista",["ngRoute"])
ListaApp.controller('lista_principal',function($scope){

    $scope.Chama_usuario = function(nome,conteudo,tema){
        $scope.usuario_escolhido = nome
        $scope.Conteudo_dialog = conteudo
        $scope.Tema_usuario = tema
    }

    $scope.Fechar_dialogo = function(){
        $scope.usuario_escolhido = ""
    }

    $scope.Lista_usuarios = [
        {
            "Nome":"Felipe",
            "Tema":"CorAlt",
            "conteudo":"Profesor de back end e front end"
        },
        {
            "Nome":"Marcos",
            "Tema":"CorPadrao",
            "conteudo":"Profesor de Ed fisica"
        },
        {
            "Nome":"Carol",
            "Tema":"CorAlt",
            "conteudo":"Profesora de quimica"
        }

    ]
})

ListaApp.controller('lista_secundaria',function($scope){
    $scope.Lista_usuarios = [6,4,3,5,7]
    $scope.Texto = ""
})

ListaApp.controller('principal',function($scope){
    //Logica da pagina principal 
    $scope.Usuario = "Felipe"
    $scope.sexo = "M"
})

ListaApp.controller('produtos',function($scope,$routeParams){
    $scope.ProdutosDisponiveis = ["tv","camisa","tenis"] 
    $scope.ProdutoEscolhido = $routeParams['prod']
    $scope.ProdutoExistente = false

    $scope.ProdutosDisponiveis.forEach(element => {
        if(element == $scope.ProdutoEscolhido){
            $scope.ProdutoExistente = true
        }
    });
    if( $routeParams['prod'] == undefined ){
        $scope.ProdutoExistente = true
    }
})

ListaApp.config(function($routeProvider){
    $routeProvider
     .when("/", {
     templateUrl : "./template/main.html",
     controller: "principal"
      })
      .when("/produtos", {
        templateUrl : "./template/produtos.html",
        controller: "produtos"
         })
         .when("/produto/:prod*", {
            templateUrl : "./template/produtos.html",
            controller: "produtos"
             })
         .otherwise({
            templateUrl:"./template/naoencontrado.html"
         })
})