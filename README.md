# alertlightJS V.0.2.3  [(Other Version)](https://github.com/rachmanzz/AlertlightJS/releases)
alertlightJS is a combination of sweet alerts with jquery

refer to branch master for new update, because not all of npm, bower,and composer package has been update.
###Bug fix 0.2.2
    - .$foreach() looping without removing symbols
###Bug fix 0.2.3
    - jsonObject error
    - .$swalGet if canceled, return true
### Adding (+) & deleted (-)
    (+)symbolBegin & symbolEnd
    (-)symbol
###Install
    bower install alertLightJS -save
    npm install --save alertlightjs
    composer require rachmanzz/alertlightjs    
###Initialize the plugin
    <link rel="stylesheet" type="text/css" href="http://t4t5.github.io/sweetalert/dist/sweetalert.css">
    <script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
    <script src="http://t4t5.github.io/sweetalert/dist/sweetalert.min.js"></script>
    <script src="dist/alertlightjs.min.js"></script>
###Online Source    
    <script src="http://rachmanzz.github.io/AlertlightJS/dist/js/alertlightjs-0-2-3.min.js"></script>
##Usage
    $('#yourID').click(function(){
            var myAlert= new alertlightJS();
            myAlert.$swalPost({     // $swalGet for GET Method
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
                        swal('title','text');
                }else{
                    swal('title','text');
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
     data.status // get status after your data is submit. return success/error
     data.value // data have been parse to Json
####obtain raw data
     var myAlert= new alertlightJS({json:false}); //or myAlert.$set({json:false});
     myAlert.$swalPost(
        // alertlightJS script here, data.value to obtain raw data 
     );
####other method
     alertlightJS.$set({json:false},function(alertJS){
        alertJS.$swalPost(
                        // alertlightJS script here 
                     );
     });
####show alert after confirm:
    swal('title','text'); // if isConfirm == true, swal type will be set "success" / false will be set "error"
     
####or
    swal('title','text','warning'); // type: warning | success | error
####All Function
#####.$swalPost | $swalGet
|Method Get|Method Post| 
|---|---|
|.$swalGet(swalOpt,postOpt)|.$swalPost(swalOpt,postOpt)|
|.$swalGet(swalOpt,postOpt,callback)|.$swalPost(swalOpt,postOpt,callback)|

usage [readmore here](https://github.com/rachmanzz/AlertlightJS/wiki/show-alert-&-send)


#####.$Post | $Get
|Post|Get|
|---|---|
|.$post(url,callback)|.$get(url,callback)|
|.$post(url,input,callback)|.$get(url,input,callback)|
usage [readmore here](https://github.com/rachmanzz/AlertlightJS/wiki/send-data)

|other| |
|---|---|
|.$set(opt,callback)|callback is optional |
|.$table(id,object,callback)| |
|.$foreach(id,object)| |
usage [readmore here](https://github.com/rachmanzz/AlertlightJS/wiki/other)




#Remember
Remember to load sweet-alert, and Jquery script 
#other
http://rachmanzz.github.io/alertifylight/