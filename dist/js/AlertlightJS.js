var alertlightJS = {
    $setup :function(data,callback){
        this.data=data;
        if(callback!=null){
            callback(this);
        }
    },
    data:{
        json :true
    },
    $post:function(url,input,callback){
        $(function(){
            $.post(url,input,
                function(data,status){
                    if(alertlightJS.data.json){
                        var value= jQuery.parseJSON(data);
                        callback(value,status);
                    }else{
                        callback(data,status);
                    }
                });
        });
    },
    $swalPost:function(swalOpt,postOpt,callback){
        swal({
                title: swalOpt['title'] || "title",
                text: swalOpt['text'] || "text",
                type: swalOpt['type'] || "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: swalOpt['confirmText'] || "Yes",
                cancelButtonText: swalOpt['cancelText'] ||  "No",
                closeOnConfirm: false,
                closeOnCancel: false
            },function(isConfirm){
                if (isConfirm) {
                    $.post(postOpt['url'],postOpt['input'],
                        function(data,status){
                            if(alertlightJS.data.json){
                                var value= jQuery.parseJSON(data);
                                callback(true,{value:value,status:status},function(opt){
                                    swal(opt[0], opt[1], opt[2] || "success");
                                });
                            }else{
                                callback(true,{value:data,status:status},function(opt){
                                    swal(opt[0], opt[1], opt[2] || "success");
                                });
                            }
                        });
                }else{
                    callback(false,{},function(msg){
                        alertify.error(msg);
                    });
                }
            }
        );
    },
    $swalGet:function(swalOpt,postOpt,callback){
        swal({
                title: swalOpt['title'] || "title",
                text: swalOpt['text'] || "text",
                type: swalOpt['type'] || "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: swalOpt['confirmText'] || "Yes",
                cancelButtonText: swalOpt['cancelText'] ||  "No",
                closeOnConfirm: false,
                closeOnCancel: false
            },function(isConfirm){
                if (isConfirm) {
                    $.get(postOpt['url'],postOpt['input'],
                        function(data,status){
                            if(alertlightJS.data.json){
                                var value= jQuery.parseJSON(data);
                                callback(true,{value:value,status:status},function(opt){
                                    swal(opt[0], opt[1], opt[2] || "success");
                                });
                            }else{
                                callback(true,{value:data,status:status},function(opt){
                                    swal(opt[0], opt[1], opt[2] || "success");
                                });
                            }
                        });
                }else{
                    callback(false,{},function(opt){
                        swal(opt[0], opt[1], opt[2] || "error");
                    });
                }
            }
        );
    },
    swalPost:function(id,swalOpt,postOpt,callback){
        $(function(){
            var $post="";
            $post=postOpt;
            $(id).click(function(){
                swal({
                        title: swalOpt['title'] || "title",
                        text: swalOpt['text'] || "text",
                        type: swalOpt['type'] || "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: swalOpt['confirmText'] || "Yes",
                        cancelButtonText: swalOpt['cancelText'] ||  "No",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },function(isConfirm){
                        if (isConfirm) {
                            $.post($post['url'],$post['input'],
                                function(data,status){
                                    if(alertlightJS.data.json){
                                        var value= jQuery.parseJSON(data);
                                        callback(true,{value:value,status:status},function(opt){
                                            swal(opt[0], opt[1], opt[2] || "success");
                                        });
                                    }else{
                                        callback(true,{value:data,status:status},function(opt){
                                            swal(opt[0], opt[1], opt[2] || "success");
                                        });
                                    }
                                });
                        }else{
                            callback(false,{},function(opt){
                                swal(opt[0], opt[1], opt[2] || "error");
                            });
                        }
                    }
                );
            });
        });
    }
};
