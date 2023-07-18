function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.skills = [];
      this.addSkill = function(skill) {
        $scope.skills.push(skill);
      }
    }
  };
}