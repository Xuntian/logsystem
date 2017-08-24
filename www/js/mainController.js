app_logsystem.controller('mainCtrl', function ($scope, $rootScope, $http, $uibModal) {

	$scope.processList = new Array("p1", "p2", "p3");
    $scope.hostIP = "127.0.0.1";
    $scope.hostPort = "8099";
	$scope.cmdRunResult = "enter your command line script...";
	$scope.nodeList = new Array();
	$scope.currentNode = $scope.nodeList[0];
	$scope.currentNodeInfo = "hello, this is node 127.0.0.1";
	$scope.cmd = "pwd";

    $scope.keywords = "";
    $scope.search_item = "";
    $scope.search_startTime = "";
    $scope.search_endTime = "";
    $scope.search_result_item = [1,2,3];
    $scope.search_result = [[11,12,13],[21,22,23],[31,32,33]];
    $scope.count_item = "";
    $scope.count_startTime = "";
    $scope.count_endTime = "";
    $scope.givenTableItems = [11,12,13];
    $scope.givenTableContent = [[11,12,13],[21,22,23],[31,32,33]];
    $scope.Tables = [1,2,3];
    $scope.dbList = ["db_1","db_2","db_3"];
    $scope.tableList = ["asd1", "asd2", "asd2"];
    $scope.givenTableName = "qwe";

    $scope.dbPath = "database/";

    $scope.showCurrentTableList = function () {
        var node = document.getElementById(id);
        if(node.style.display == "none")
            node.style.display = "block";
        else
            node.style.display = "none";
        return false;
    }

    $scope.getDBList = function ($dbPath) {

        $scope.dbList = ["db_4","db_5","db_6"];
    }

	$scope.getProcessList = function(){
		var url = "http://localhost:8099/api/process/list";
		$http.get(url).then(function (response) {
            $scope.processList = response.data.result.split("\n");
        });
	}
	$scope.getProcessList();

    $scope.killGivenProcess = function($event){
	var givenProcessInfo = $event.target.innerHTML;
	var givenPid = givenProcessInfo.split("  ")[11];

	var killProcessConfirm = confirm("Sure to kill process " + givenPid + " ?");
	if(killProcessConfirm){
		var url = "http://localhost:8099/api/process/kill";
		$http.put(url, {ToKillPid : givenPid}).then(function (response) {
			if(response){
				alert("Process " + givenPid + " has closed!");
				$scope.getProcessList();
			}
		});
	}
        
    }

    $scope.runCmdScript = function(){
        var url = "http://localhost:8099/api/process/cmd";
        $http.put(url, {cmd : $scope.cmd}).then(function (response) {
            $scope.cmdRunResult = response.data.result;
        });
    }

    $scope.newProcess = function(){
		var url = "http://localhost:8099/api/process/new";
        $http.get(url).then(function (response) {
		    if(response){
				alert("New process success ");
				$scope.getProcessList();
			}
        });
    }

    $scope.getNodeList = function(){
        var url = "http://localhost:8099/api/node/list";
        $http.get(url).then(function (response) {
            $scope.nodeList = response.data.result;
			$scope.nodeList.splice(0, $scope.nodelist.length);
            for (var i = 0; i < response.data.result.length; i++) {
                $scope.nodeList.push(response.data.result[i]);
            }

        });
    }
	$scope.getNodeList();

    $scope.addNode = function(){
        $uibModal.open({
            templateUrl: "addNode.html",
            controller: "addNodeCtrl",

        });
    }

    $scope.getGivenNodeInfo = function(){
        var url = "http://localhost:8099/api/node/info";
        $http.get(url).then(function (response) {
            $scope.currentNodeInfo =response.data.result;
			//alert($scope.currentNodeInfo.split(" "));
        });
    }


});

app_cluster.controller('testCtrl', function ($scope, $rootScope, $http) {
	$scope.remoteProcessResult = "asd";

	$scope.fun = function(){
		var url = "http://localhost:8099/api/process/list";
		$http.get(url).then(function (response){
			$scope.remoteProcessResult = response.data;
		});
	}
	$scope.fun();
});

app_cluster.controller('addNodeCtrl', function ($scope, $uibModalInstance, $http) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    }

    $scope.newIP = "";
    $scope.AddNodeProgressText = "Enter new node IP address";
    $scope.test = function () {
        alert(123);
    }

    $scope.addNodeSubmit = function () {
        if ($scope.newIP == "") {
            alert("IP address can not be null");
        }else{
        	var url = "";
            $http.get(url).then(function (response){
                $scope.remoteProcessResult = response.data;
            });
        }

    }
});


