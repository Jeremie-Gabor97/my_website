app.controller('MainController',['$scope',function($scope,$http,$window){
    $scope.timestamp = Date();
    
    $scope.Aboutme = [{"Body":"<br><p>I am a third-year Computer Science and Statistics student at the University of Waterloo with a passion for coding and sports. My dream one day is to combine these two passions and work in the sports analytics industry. In the mean time, I am a competitive ultimate frisbee player and I am always looking for my next big challenge.</p>"
    }];

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

    $scope.Articles = [{"Title":"Amazing Museums", "Body":"<p>While most museums are a collection of old artifacts and stuff that no one is really interested in seeing, our museums area the best of the best.</p><p>You won't find anything like these any where else in the world. Our museums rival that of our closest competitors including the Museum of Bad Art, the Paris Sewers Museum and the Museum of Broken Relationships.</p><p>Come check them out...the fun is waiting for you.</p>","Image":"http://lorempixel.com/200/100/city/1"},
    {"Title":"SplashAnyone Waterpark","Body":"<p>Our waterpark is the biggest and best park in the Western World. Just south of interstate 2015, you'll find a sweet mix of Super Slides and lazy rivers.</p><p>If that wasn't enough, we have 376 of the best food trucks in the state serving everything from fried gummy bears to lemonade and pizza. Don't forget if you buy our collectors edition souvenir water park keepsake, you get free refills all year.</p><p>And we wouldn't be SplashAnyone without the rules about splashing... wait there are no rules.</p>","Image":"http://lorempixel.com/200/100/city/2"},
    {"Title":"Best Zoo in Town","Body":"<p>Our zoo is the biggest and best zoo in the whole region. Located right in the downtown area, it is easily accesible and makes for a perfect day in the city.</p><p>We have animals from all around the glob, but of course, we make sure that they are all kept in approprite habitats.  In addition, we make sure to get all our animals from either other zoos or shelters to not hinder those that live in the wild</p><p>Come visit us...We hope to see you soon!</p>","Image":"http://lorempixel.com/200/100/city/3"}
];
}]);
