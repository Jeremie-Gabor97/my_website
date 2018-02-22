app.controller('MainController',['$scope',function($scope,$http,$window){
    $scope.timestamp = Date();
    
    $scope.Aboutme = [{"Body":"<br><p>I am a third-year Computer Science and Statistics student at the University of Waterloo with a passion for coding and sports. My dream one day is to combine these two passions and work in the sports analytics industry. In the mean time, I am a competitive ultimate frisbee player and I am always looking for my next big challenge.</p>"
    }];
}]);

    $document.getElementById("contact-button").addEventListener('click',function(){
        scrollTo("#contact")
    })

    $document.getElementById("sports-button").addEventListener('click',function(){
        scrollTo("#sports")
    })

    $document.getElementById("interest-button").addEventListener('click',function(){
        scrollTo("#interests")
    })

    $document.getElementById("project-button").addEventListener('click',function(){
        scrollTo("#projects")
    })