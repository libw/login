1.该页面是一个响应式页面，阈值为750px，适应大部分终端；<br/>
2.此网页使用了css3语法，所以仅兼容到ie11，但是在head里对浏览器内核进行优先级的提升；<br/>
3.登录分为账号登录和电话登录，电话登录暂时没有写相应的json数据，账号登录写了相应的json数据，但是由于form标签没有定义action属性，所以每次点击提交后，页面会进行一次刷新，但是暂时没有提交的地址，所以阻止了浏览器默认事件，阻止其进行跳转；<br/>
4.数据在用户输入后判断了两次，一次在账号input失去焦点后，一次在用户点下登录按钮后，当用户数据与json数据不符时，会对用户进行提示；<br/>
5.打开需要服务器环境。