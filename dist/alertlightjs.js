(function(global,$,action){
    $==="error"&& action(function(){
        alert('jQuery Undefined');
        return false;
    });
    typeof swal !== "function" && action(function(){
        alert('sweet-alert Undefined');
        return false;
    });
    var setUp={json:true,symbolBegin:"\\(\\[",symbolEnd:"\\]\\)",originalOptSwal:false},store={},swalOpt=function(swalOpt){
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
    }, numberFrom=1;
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
                    var isJsonObject;
                    try{
                        isJsonObject =$.parseJSON(data);
                    }catch (e){
                        isJsonObject = data;
                    }
                    typeof callback === "function" ? callback(isJsonObject,status) : action(function(){
                        typeof input === "function" && input(isJsonObject,status);
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
                    var isJsonObject;
                    try{
                        isJsonObject =$.parseJSON(data);
                    }catch (e){
                        isJsonObject = data;
                    }
                    typeof callback === "function" ? callback(isJsonObject,status) : action(function(){
                        typeof input === "function" && input(isJsonObject,status);
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
        $num : function (num) {
            numberFrom = num;
            return this;
        },
        $foreach: function(reff,value){
            var text=$(reff).html(), num= numberFrom,numSet=false;
            var getMatch = function (str,flags) {
                var symbol = setUp.symbolBegin; symbol +="([_a-zA-Z0-9.]+|[a-z.++]+|[a-z.]+\\[\\d+\\]\\+)"; symbol += setUp.symbolEnd; var Expr;
                typeof flags != "undefined" ? action(function () {
                    Expr = new RegExp(symbol,flags);
                }): action(function () {
                    Expr = new RegExp(symbol);
                });
                if(typeof str != "undefined"){
                    return str.match(Expr);
                }else{
                    return null;
                }
            };

            if(typeof $(reff).data('live-cache')!=="undefined"||$(reff).data('live-cache')!=""){
                var cache   =$(reff).data('live-cache');
                if(store[cache]!==undefined){
                    text = store[cache];
                }else{
                    store[cache] = text;
                }
            }
            $(reff).html("");
            typeof value === "object" ? action(function(){
                function replace_str(matchs,values){
                    var string=text;
                    $.each(matchs, function(key,value){
                        var data=getMatch(value)[1];
                        if(data==='num++'){
                            string =string.replace(value,num++);
                        }
                        else if((/num\[\d+\]\+/).test(data)){
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
                    if(getMatch(text,"gi") === null){
                        console.log(getMatch(text,"gi"));
                        return false;
                    }
                    var html;
                    html +=replace_str(getMatch(text,"gi"),values);
                    $(reff+':last').append(html);
                });
            }) : action(function(){
                console.log("$foreach -> not object, data invalid");
            });
        },
        $id:function(id){
            return {
                click :function(callback){ // jQuery identifier not working event attribute & tag add dynamically
                    $(document).on('click', id, function() { // this (jQuery) method is working
                        callback($(this));
                    });
                },
                dblclick :function(callback){ // jQuery identifier not working event attribute & tag add dynamically
                    $(document).on('dblclick', id, function() { // this (jQuery) method is working
                        callback($(this));
                    });
                },
                mouseenter :function(callback){ // jQuery identifier not working event attribute & tag add dynamically
                    $(document).on('mouseenter', id, function() { // this (jQuery) method is working
                        callback($(this));
                    });
                },
                mouseleave :function(callback){ // jQuery identifier not working event attribute & tag add dynamically
                    $(document).on('mouseleave', id, function() { // this (jQuery) method is working
                        callback($(this));
                    });
                }
            };
        },
        $sync:function(run){
            var timing=2000, looping =function(){
                run();
                setTimeout(looping,timing);
            };
            var identifier={
                    delay : function(delay){
                        timing = delay;
                        return identifier;
                    },
                    inSecond: function () {
                        timing = timing * 1000;
                        return identifier;
                    },
                    inMinute: function () {
                        timing = (timing * 60 ) * 1000;
                        return identifier;
                    },
                    execute:function(){
                        typeof run === "function" ? action(function(){
                            return new looping();
                        }):action(function(){
                            console.log('sync is not function');
                        });

                    }
                };
            return identifier;
        }


    };
    global.alertlightJS= alertlightJS;
    global.$$=new alertlightJS();
    global.$alrt=new alertlightJS();
})(typeof window !== "undefined"? window : this,typeof jQuery !== "undefined"? jQuery : "error",function(action){
    typeof action==="function" && action();
});