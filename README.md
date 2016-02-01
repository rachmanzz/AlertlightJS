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
        
#Remember
Remember to load boostrap, sweet-alert, and Jquery script 
    