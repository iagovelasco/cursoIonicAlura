angular.module('starter')
.controller('ListagemController', function($scope){
	
	$scope.listaDeCarros = [{"nome": "BMW 120i", "preco": 70000}];

	$scope.dataAtual = "01/01/2016";

});

angular.module('starter')
.controller('CarroEscolhidoController', function($stateParams, $scope){
	
	$scope.carroEscolhido = angular.fromJson($stateParams.carro);

	$scope.listaDeAcessorios =[{"nome": "Freio ABS", "preco": 800},
							   {"nome": "Ar Condicionado", "preco": 1000},
							   {"nome": "MP3 Player", "preco": 550}];

	$scope.mudou = function(acessorio, isMarcado){
		if(isMarcado){
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
		}else{
			$scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
		}
	};

});





