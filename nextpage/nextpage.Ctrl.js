angular.module('mainApp')
.controller('nextCtrl',function($routeParams,appService){
    var vm = this;
    vm.title="This is the editable page";
    
    vm.post = {};
    vm.id=null;
    vm.reset=reset;
   // vm.update=update;
    vm.list={};
    activate();
     function activate(){
         vm.id = $routeParams.id;
         console.log('The editable id is',vm.id);
         if(vm.id){ appService.getpostById(vm.id).then(function(res){vm.post= res.data;console.log('the object is',vm.post)});}
        
   
        
     }
   function reset(){
       vm.post.title='';
       vm.post.body='';
       vm.post.id=0;
   }
    
   /* function update()
    {   vm.list={
        title:vm.post.title,
        body:vm.post.body,
        id:vm.post.id
    };
        vm.id = $routeParams.id;
        if(vm.id){appService.putpost( vm.id,vm.list).then(function(){console.log('successfully updated');})}
    }
*/





});