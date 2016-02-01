# AlertlightJS
AlertlightJS is a combination of sweet alerts with jquery
##Using
    $('#yourID').click(function(){
            lightJS.$swalPost({
                title : "Sweet Alert Tittle",
                text  : "Sweet Alert Text.",
                type  : "warning",
                confirmText:"Yes!",
                cancelText:"No!"
            },{
                url : "yourUrl",
                input   : {
                    name  : "Your Input"
                }
            },function(isConfirm,data,swal){
                if(isConfirm){
                        swal(['title','text']);
                }else{
                    swal(['title','text']);
                }
            });
        });

####post data:
            url : "yourUrl" // your url to post data
            input:{
                "name" : "value" // name and value of input
            }
####alert confirm :
     if(isConfirm){
        // if alert confirm == true
     }else{
       // false
     }
####get data after post:
     data['status'] // get status after your data is submit. return true/false
     data['data'] // obtain raw data
     data['value'] // data have been parse to Json
####show alert after confirm:
    swal(['title','text']); // if isConfirm == true, swal type will be set "success" / false will be set "error"
     
####or
    swal(['title','text','warning']); // type: warning | success | error
    
###Install using Bower 
    bower install alertLightJS -save
###Install using npm
    npm install --save alertlightjs

#Remember
Remember to load boostrap, sweet-alert, and Jquery script 
    