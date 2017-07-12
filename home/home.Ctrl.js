angular.module('mainApp')
.controller('homeCtrl',function(appService,$location){
    var vm = this;
    vm.title="list of items";
    vm.pagelist=[];
    vm.itemposts=[];
    vm.pageSize=5;
    vm.totalpage=0;
    vm.totallistitem=0;
    vm.edit=edit;
    vm.pagechange=pagechange;
    vm.currentpage=1;
    vm.pagedpost=[];
    vm.currentpost=null;
    var index=0;
    
    
    function activate(){
        appService.getpost().then(function(res){
            vm.itemposts=res.data;
            console.log('the  incoming data is',vm.itemposts);
            vm.totallistitem=vm.itemposts.length;
            console.log('the total length of the array itemposts is',vm.totallistitem);
            vm.totalpage=Math.ceil(vm.totallistitem/vm.pageSize);
            console.log('total no of page is',vm.totalpage);
            for( var i=1; i<=vm.totalpage; i++)
                {vm.pagelist.push(i);
                
                }
            console.log(vm.pagelist);
             pagechange(vm.pagelist[--vm.currentpage]);
        });
        
    }
    activate();
   
    
   
    function pagechange(page){
        console.log('the page pased is',page);
        vm.currentpage=page;
        index=(page-1)*vm.pageSize;
        console.log('index is',index);
        var trackIndex=0;
        for(var i=index; i<=vm.itemposts.length; i++)
            { vm.pagedpost.push(vm.itemposts[i]);
                trackIndex++;
             if(trackIndex == vm.pageSize)
                 {break;}
            }
       
    }
   
      
        
    
    
    console.log('current post is',vm.pagedpost);
     function edit(id){
        console.log(id);
        $location.url('nextpage');
    }
    
    
});