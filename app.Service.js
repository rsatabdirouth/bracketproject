angular.module('mainApp')
.service('appService',function($http){
    var service = this;
    service.getpost=getpost;
    service.getpostById=getpostById;
   // service.putpost=putpost;
    
    function getpost(){
        return $http.get('https://jsonplaceholder.typicode.com/posts/');
    }
    
    function getpostById(id){
        return $http.get('https://jsonplaceholder.typicode.com/posts/'+id);
        
    }
    //function putpost(next.post,id){
        //return $http(method:'put',data:next.post,URL:'https://jsonplaceholder.typicode.com/posts/'+id)
    //}
});