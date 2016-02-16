(function(global,$,action){
    $==="error"&& action(function(){
        alert('jQuey Undefined');
        return false;
    });
    typeof swal !== "function" && action(function(){
        alert('sweet-alert Undefined');
        return false;
    });
    var setUp={json:true,symbol:"([",originalOptSwal:false},store={},swalOpt=function(swalOpt){
        var swal={
            title: swalOpt['title'] || "title",
            text: swalOpt['text'] || "text",
            type: swalOpt['type'] || "warning",
            showCancelButton: swalOpt['cancelButton'] || true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: swalOpt['confirmText'] || "Yes",
            cancelButtonText: swalOpt['cancelText'] ||  "No",
            closeOnConfirm: false,
            closeOnCancel: false
        };
        typeof swalOpt.extra === "object" && action(function(){
            $.extend(swal,swalOpt.extra);
        });
        return swal;
    };
    var alertlightJS=function(set){
        typeof set==="object" && $.extend(setUp,set);
    };
    alertlightJS.prototype={
        $set : function(set,callback){
            typeof set==="object" && $.extend(setUp,set);
            typeof callback==="function" && callback(this);
        },
        $post : function(url,input,callback){
            $.post(url,typeof input==="object"?input:{},function(data,status){
                setUp.json ? action(function(){
                    typeof callback === "function" ? callback(typeof $.parseJSON(data)==="object" ? $.parseJSON(data) : data,status) : action(function(){
                        typeof input === "function" && input(typeof $.parseJSON(data)==="object" ? $.parseJSON(data) : data,status);
                    });
                }):action(function(){
                    typeof callback === "function" ? callback(data,status) : action(function(){
                        typeof input === "function" && input(data,status);
                    });
                });
            });
        },
        $get : function(url,input,callback){
            $.get(url,typeof input==="object"?input:{},function(data,status){
                setUp.json ? action(function(){
                    typeof callback === "function" ? callback(typeof $.parseJSON(data)==="object" ? $.parseJSON(data) : data,status) : action(function(){
                        typeof input === "function" && input(typeof $.parseJSON(data)==="object" ? $.parseJSON(data) : data,status);
                    });
                }):action(function(){
                    typeof callback === "function" ? callback(data,status) : action(function(){
                        typeof input === "function" && input(data,status);
                    });
                });
            });
        },
        $swalPost:function(swalOption,postOpt,callback){
            swal(setUp.originalOptSwal?swalOption:swalOpt(swalOption),function(isConfirm){
                if(swalOption.type === "input"){
                    postOpt(isConfirm,function(postOpt,callback){
                        alertlightJS.prototype.$post(postOpt.url,typeof postOpt.input === "object"? postOpt.input:{},function(data,status){
                            typeof callback === "function" && action(function(){
                                callback(true,{value:data,status:status},function(title,text,type){
                                    typeof title === "string" && typeof text === "string" ? action(function(){
                                        swal(title,text,typeof type === "string"? type : "success");
                                    }):action(function(){
                                        if(typeof title === "string"){
                                            swal(title);
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
                else if(isConfirm){
                    alertlightJS.prototype.$post(postOpt.url,typeof postOpt.input === "object"? postOpt.input:{},function(data,status){
                        typeof callback === "function" && action(function(){
                            callback(true,{value:data,status:status},function(title,text,type){
                                typeof title === "string" && typeof text === "string" ? action(function(){
                                    swal(title,text,typeof type === "string"? type : "success");
                                }):action(function(){
                                    if(typeof title === "string"){
                                        swal(title);
                                    }
                                });
                            });
                        });
                    });
                }else{
                    typeof callback === "function" && action(function(){
                        callback(false,{},function(title,text,type){
                            typeof title === "string" && typeof text === "string" ? action(function(){
                                swal(title,text,typeof type === "string"? type : "error");
                            }):action(function(){
                                if(typeof title === "string"){
                                    swal(title);
                                }
                            });
                        });
                    });
                }
            });
        },
        $swalGet:function(swalOption,postOpt,callback){
            swal(setUp.originalOptSwal?swalOption:swalOpt(swalOption),function(isConfirm){
                if(swalOption.type === "input"){
                    postOpt(isConfirm,function(postOpt,callback){
                        alertlightJS.prototype.$get(postOpt.url,typeof postOpt.input === "object"? postOpt.input:{},function(data,status){
                            typeof callback === "function" && action(function(){
                                callback(true,{value:data,status:status},function(title,text,type){
                                    typeof title === "string" && typeof text === "string" ? action(function(){
                                        swal(title,text,typeof type === "string"? type : "success");
                                    }):action(function(){
                                        if(typeof title === "string"){
                                            swal(title);
                                        }
                                    });
                                });
                            });
                        });
                    });
                }
                else if(isConfirm){
                    return this.$get(postOpt.url,typeof postOpt.input === "object"? postOpt.input:{},function(data,status){
                        typeof callback === "function" && action(function(){
                            callback(true,{value:data,status:status},function(title,text,type){
                                typeof title === "string" && typeof text === "string" ? action(function(){
                                    swal(title,text,typeof type === "string"? type : "success");
                                }):action(function(){
                                    if(typeof title === "string"){
                                        swal(title);
                                    }
                                });
                            });
                        });
                    });
                }else{
                    typeof callback === "function" && action(function(){
                        callback(true,{},function(title,text,type){
                            typeof title === "string" && typeof text === "string" ? action(function(){
                                swal(title,text,typeof type === "string"? type : "error");
                            }):action(function(){
                                if(typeof title === "string"){
                                    swal(title);
                                }
                            });
                        });
                    });
                }
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
        $foreach: function(reff,value){
            var regex_i,regex, text=$(reff).html(), num= 1,numSet=false,matches;
            if(setUp.symbol==="customize"){
                regex_i =setUp.regExp_gi;
                regex   = setUp.regExp;
            }
            else if(setUp.symbol==="{{"){
                regex_i =/{{([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)}}/gi;
                regex   =/{{([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)}}/;
            }
            else if(setUp.symbol==="(["){
                regex_i =/\(\[([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\]\)/gi;
                regex   =/\(\[([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\]\)/;
            }
            else if(setUp.symbol==="@("){
                regex_i =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/gi;
                regex   =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/;
            }
            else{
                regex_i =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/gi;
                regex   =/@\(([a-z.]+|[a-z.++]+|[a-z.]+\[\d+\]\+)\)\)/;
            }
            if(typeof $(reff).data('live-cache')!=="undefined"||$(reff).data('live-cache')!=""){
                var cache   =$(reff).data('live-cache');
                if(store[cache]!==undefined){
                    text = store[cache];
                }else{
                    store[cache] = text;
                }
            }
            $(reff).html("");
            matches=text.match(regex_i);
            typeof value === "object" ? action(function(){
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
                        else if(typeof values[data]==="undefined"){}
                        else{
                            string =string.replace(value,values[data]);
                        }
                    });
                    return string;
                }
                $.each(value, function(keys,values){
                    if(typeof values !== "object"){
                        console.log("$foreach -> not object, data invalid");
                        return false;
                    }
                    var html;
                    html +=replace_str(matches,text,values);
                    $(reff+':last').append(html);
                });
            }) : action(function(){
                console.log("$foreach -> not object, data invalid");
            });

        }
    };
    global.alertlightJS= alertlightJS;
    global.$$=new alertlightJS();
    global.$alrt=new alertlightJS();
})(window !== "undefined"? window : this,jQuery !== "undefined"? jQuery : "error",function(action){
    typeof action==="function" && action();
});