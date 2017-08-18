/**
 * Created by libw on 2017/8/2.
 */
/*
* 登录方式的切换
* 通过添加类名，去改变样式
* 减少dom操作，优化
* */
var zl=document.querySelector('.zlogin');
var jl=document.querySelector('.jlogin');
var zh=document.querySelector('.zhanghao');
var jn=document.querySelector('.jingnei');
zl.addEventListener('click',function () {
    zl.classList.remove("active");
    zl.classList.add("none");
    jl.classList.remove("none");
    jl.classList.add("active");
    jn.classList.remove("active");
    jn.classList.add("none");
    zh.classList.remove("none");
    zh.classList.add("active");
});
jl.addEventListener('click',function () {
    zl.classList.remove("none");
    zl.classList.add("active");
    jl.classList.remove("active");
    jl.classList.add("none");
    jn.classList.remove("none");
    jn.classList.add("active");
    zh.classList.remove("active");
    zh.classList.add("none");
});

//选择区号
var btn=document.querySelector('.input-btn');
var num=document.querySelector('.phone-num');
var menu=document.querySelector('.phone-menu');
var numlist=document.querySelectorAll('.phone-menu>a');
btn.addEventListener('click',function () {
    if(menu.classList.contains('none')){
        menu.classList.remove("none");
        menu.classList.add("active");
    }else {
        menu.classList.remove("active");
        menu.classList.add("none");
    }
});
Array.from(numlist).forEach(function(v,i){
    v.addEventListener('click',function () {
        num.innerHTML=v.lastChild.previousSibling.innerHTML;
        menu.classList.remove("active");
        menu.classList.add("none");
    });
});




//登录验证
var sub=document.querySelector('.submit');
var zhi=document.querySelector('.zhanghao>input');
var psi=document.querySelector('.pass>input');
var jni=document.querySelector('.jingnei>input');
var pstip=document.querySelector('.pass>span');
var zhtip=document.querySelector('.zhanghao>span');
var jntip=document.querySelector('.jingnei>span');
var sbtip=document.querySelector('.sbtip');


//获取用户数据;
var result;
var xhr=new XMLHttpRequest();
xhr.open('get','person.json');
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4){
        if(xhr.status==200){
            result=xhr.responseText;
            //当账号input失去焦点时的处理
            zhi.addEventListener('blur',function () {
                for(var i=0;i<JSON.parse(result).length;i++){
                    if(JSON.parse(result)[i].per == zhi.value){
                        return
                    }else{
                        zhtip.innerText="该账户不存在";
                    }

                }
            });
            //当用户没有输入东西进行提交时的处理
            sub.addEventListener('click',function (e) {
                e.preventDefault();
                if(jni.value==""){
                    jntip.innerText="请输入手机号";

                }
                if(zhi.value==""){
                    zhtip.innerText="请输入牛牛号/手机/邮箱";

                }
                if(psi.value==""){
                    pstip.innerText="请输入登录密码";

                }
                for(var i=0;i<JSON.parse(result).length;i++) {
                    if (JSON.parse(result)[i].per == zhi.value) {

                        if (JSON.parse(result)[i].pass == psi.value) {
                            alert('登录成功')
                        } else {
                            sbtip.innerText = "密码错误";
                        }
                        return
                    } else {
                        sbtip.innerText = "该账号不存在";
                    }
                }

            })
        }
    }
};







