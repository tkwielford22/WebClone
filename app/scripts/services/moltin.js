angular.module('storefrontApp.moltin',[])
	.factory('MoltinAuth', function($q){
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'KfqGmiyZ6Z9skiroM4M0U8Dkdf9gdlxBsvS3CcY3'});
		moltin.Authenticate(function(){
			deferred.resolve(moltin);
		});
		return deferred.promise;
	});