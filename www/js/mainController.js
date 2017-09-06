app_logsystem.controller('mainCtrl', function ($scope, $rootScope, $http, $uibModal) {
	
	var urlPrefix = "/wiki/js/mod/admin/js/";
	var tableName = "user";
	$scope.selectMenuItem = "manager";
	$scope.pageSize = 15;
	$scope.managerCurrentPage = 1;
	$scope.operationLogCurrentPage = 1;
	$scope.userCurrentPage = 1;
	$scope.siteCurrentPage = 1;
	$scope.domainCurrentPage = 1;
	$scope.fileCheckCurrentPage = 1;
	$scope.VIPCurrentPage = 1;
	$scope.totalItems = 0;
	$scope.data = [];
	$scope.test = [];
	//$scope.roleId = 10;
	
	$scope.managerSearchById = "";
	$scope.managerSearchByUsername = "";

	// 确保为管理员
	/*
	function ensureAdminAuth() {
		if (!Account.isAuthenticated()) {
			util.go(urlPrefix + "login");
			return;
		}

		var payload = $auth.getPayload();
		$scope.roleId = payload.roleId;
		
		if (!payload.isAdmin) {
			util.go(urlPrefix + "login");
		}
	}*/

	/*
	function init() {
		ensureAdminAuth();
		$scope.getManagerList();
		//$scope.clickMenuItem($scope.selectMenuItem);
	}
	*/
	
	//$scope.$watch('$viewContentLoaded', init);


	$scope.getStyleClass = function (item) {
		if ($scope.selectMenuItem == item) {
			return "panel-primary";
		}
		return;
	}
	
	$scope.modifyPasswd = fucntion(){
		
	}

	/*
	管理员
	*/
	// 获取管理员列表
	$scope.getManagerList = function (){
		//alert("asdasdasdasd");
		$scope.selectMenuItem = "manager";
		$scope.managerSearchById;
		$scope.managerSearchByUsername = "";
		util.post(config.apiUrlPrefix + "admin/getManagerList", {
			page:$scope.managerCurrentPage,
			pageSize:$scope.pageSize,
		}, function (data) {
			data = data || {};
			$scope.managerList = data.managerList || [];
			$scope.totalItems = data.total || 0;
		});
	}
	
	// 搜索管理员账号
	$scope.managerSearch = function (){
		//util.post(config.apiUrlPrefix + "tabledb/query", {
		util.post(config.apiUrlPrefix + "admin/managerSearch", {
			_id:$scope.managerSearchById,
			username:$scope.managerSearchByUsername,
		}, function (data) {
			data = data || {};
			$scope.managerList = data.searchManagerList ;
			$scope.totalItems = data.total || 0;
		});
	}
	
	$scope.newManager = function (){
		
	}
	
	/*
	管理员操作日志
	*/
	// 操作日志列表
	$scope.getOperationLogList = function(){
		$scope.selectMenuItem = "operationLog";
	}
	
	/*
		keepwork
	*/
	// 获取用户列表
	$scope.getUserList = function (){
		$scope.selectMenuItem = "user";
		util.post(config.apiUrlPrefix + "admin/getUserList", {
			page:$scope.userCurrentPage,
			pageSize:$scope.pageSize,
		}, function (data) {
			data = data || {};
			$scope.userList = data.userList || [];
			$scope.totalItems = data.total || 0;
		});
	}
	//搜索用户
	$scope.userSearch = function (){
		$scope.query = {
			_id:$scope.userSearchById,
			username:$scope.userSearchByUsername,
		};
		util.post(config.apiUrlPrefix + "tabledb/query", {
			tableName:"user",
			page:$scope.userCurrentPage,
			pageSize:$scope.pageSize,
			query:$scope.query,
		}, function (data) {
			data = data || {};
			$scope.userList = data.data || [];
			$scope.totalItems = data.total || 0;
		});
	}
	
	$scope.getDomainList = function (){
		//alert("asdasdasdasd");
		$scope.selectMenuItem = "domain";
		util.post(config.apiUrlPrefix + "admin/getDomainList", {
			page:$scope.domainCurrentPage,
			pageSize:$scope.pageSize,
		}, function (data) {
			data = data || {};
			$scope.domainList = data.domainList || [];
			$scope.totalItems = data.total || 0;
		});
	}
	//搜索域名
	$scope.domainSearchById;
	$scope.domainSearchByUsername = "";
	$scope.domainSearchByDomain = "";
	$scope.domainSearch = function (){
		var username = $scope.domainSearchByUsername == "" ? undefined : $scope.domainSearchByUsername;
		var domain = $scope.domainSearchByDomain == "" ? undefined : $scope.domainSearchByDomain;
		$scope.query = {
			_id:$scope.domainSearchById,
			username:username,
			domain:domain,
		};
		util.post(config.apiUrlPrefix + "tabledb/query", {
			tableName:"website_domain",
			page:$scope.userCurrentPage,
			pageSize:$scope.pageSize,
			query:$scope.query,
		}, function (data) {
			data = data || {};
			$scope.domainList = data.data || [];
			$scope.totalItems = data.total || 0;
		});
	}
	//获取VIP列表
	$scope.getVIPList = function (){
		//alert("asdasdasdasd");
		$scope.selectMenuItem = "vip";
		util.post(config.apiUrlPrefix + "admin/getVIPList", {
			page:$scope.VIPCurrentPage,
			pageSize:$scope.pageSize,
		}, function (data) {
			data = data || {};
			$scope.VIPList = data.VIPList || [];
			$scope.totalItems = data.total || 0;
		});
	}
	//搜索VIP
	$scope.vipSearchById;
	$scope.vipSearchByUsername = "";
	$scope.vipSearch = function (){
		var username = $scope.vipSearchByUsername == "" ? undefined : $scope.vipSearchByUsername;
		$scope.query = {
			_id:$scope.vipSearchById,
			username:username,
		};
		util.post(config.apiUrlPrefix + "tabledb/query", {
			tableName:"vip",
			page:$scope.VIPCurrentPage,
			pageSize:$scope.pageSize,
			query:$scope.query,
		}, function (data) {
			data = data || {};
			$scope.VIPList = data.data || [];
			$scope.totalItems = data.total || 0;
		});
	}
		
	
	
});


