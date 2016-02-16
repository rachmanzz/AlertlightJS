var alertlightJS = {
    $setup :function(data,callback){
        $.extend(this.data,data);
        if(callback!=null){
            callback(this);
        }else{
            return this;
        }
    },
    data:{
        json :true,
        symbol : "(["
    },
    store:{},
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
                    callback(false,{},function(opt){
                        swal(opt[0], opt[1], opt[2] || "error");
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
    },
    $table : function(table,value,callback){
        $.each(value, function(key,value){
            var data;
            callback({key:key,value:value},function(value){
                $.each(value, function(key,value){
                    data += '<td>'+value+'</td>';
                });
            });
            $('table'+table+' > tbody:last').append('<tr>'+data+'</tr>');
        });
    },
    $foreach : function(reff,value){
        var regex_i,regex;
        if(alertlightJS.data.symbol==="{{"){
            regex_i =/{{([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)}}/gi;
            regex   =/{{([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)}}/;
        }
        else if(alertlightJS.data.symbol==="(["){
            regex_i =/\(\[([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\]\)/gi;
            regex   =/\(\[([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\]\)/;
        }
        else if(alertlightJS.data.symbol==="@("){
            regex_i =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/gi;
            regex   =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/;
        }
        else{
            regex_i =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/gi;
            regex   =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/;
        }
        var text    =$(reff).html();
        if($(reff).data('live-cache')!=undefined||$(reff).data('live-cache')!=""){
            var cache   =$(reff).data('live-cache');
            if(alertlightJS.store[cache]!==undefined){
                text = alertlightJS.store[cache];
            }else{
                alertlightJS.store[cache] = text;
            }
        }

        $(reff).html("");
        var num=1;
        var numSet=false;
        var matches = text.match(regex_i);
        function replace_str(test,txt,values){
            var string=txt;
            $.each(test, function(key,value){
                var data=(value.match(regex))[1];
                if(data==='num++'){
                    string =string.replace(value,num++);
                }
                else if((/[a-z.]+\[\d+\]\+/).test(data)){
                    if(numSet===false){
                        num=(data.match(/num\[(\d+)\]\+/))[1];
                        numSet=true;
                    }
                    string =string.replace(value,num++);
                }
                else if(values[data]===undefined){}
                else{
                    string =string.replace(value,values[data]);
                }
            });
            return string;
        }
        $.each(value, function(keys,values){
            var html;
            html +=replace_str(matches,text,values);
            $(reff).append(html);
        });
    }
};
