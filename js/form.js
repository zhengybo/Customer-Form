function Form(options){
  this.formElem = $("#form");//表单元素
  this.contain = $("#contain")//整个控件
  this.formSelect = $("#inputSelect");//表单组件选中区
  this.operFrame = $("#setItem");//操作数据部分
  this.formContain = $("#formContain");//表单部分整体
  this.curFormItem = $("#curFormItem");//操作部分整体
  this.toost = $("#toost");//提示选取控件
  this.formAttr = {
    "name" : $("#attrName"),//字段名称
    "type" : $("#attrType"),//字段类型
    "describe" : $("#attrDescribe"),//描述
    'require' : $("#attrRquire"),//必填
    "visible" : $("#attrVisible"),//可见
    'special' : $("#specialArea")//特殊区域
  };
  this.formHeight = 72;//默认高度
  this.formWidth = 500;//默认宽度
  this.formItem = null;//所有选择控件元素
  this.formElemFlag = 0;//初始化最大标记
  this.order = [];//顺序数组
  this.curY=0;//当前元素顶部未被移动前top值
  this.preActive = null;//上一个选中
  this.curActive = null;//当前选中
  this.curId = -1;//当前元素id
  this.curTarget = null;//当前选中
  this.operTarget = {};//被选中作为操作的固定元素
  this.operSpeic = {};//被选中作为操作的特殊元素
  this.maxHeight = 0;
  this.itemDistance = 5;//控件之间距离
  this.defaultObj = {};//默认控件数据
  this.data =[];//每个form-item数据
  this.dataIndex = null;//指定数据
  this.checkFrame = null;//下拉 多选 单选 控件的选项值
  this.initData = options.data || [];//初始化数据
  this.init();
}

Form.prototype = {
  constructor : Form,

  init(){
    this.initParameter();//初始化参数
    this.dataRenderDom(this.initData);//初始化数据
    this.setPosition(this.formItem);//初始化高度
    this.bindMove();//绑定移动事件变化
    this.bindFrom();//绑定表单操作变化
    this.winChange();
  },

  initParameter(){//初始化参数
    this.hash = {//类型对应表映射
      'text' : ['number','stext',"phone","QQ","weixin","email","IDnumber",
                "price","title"],//数字、单文本
      "password" : ["password"],
      'select' : ['select',"server","operator"],//下拉选择
      'radio' : ['scheck'],//单选
      'textarea' : ['mtext'],//文本
      'checkbox' : ['mcheck'],//多选
      "date" : ['date'],//日期
      "time" : ['time'],//时间
      "hr" : ["hr"],//分割线
      "describe" : ['describe'],//描述
      'file' : ['file'],//文件
      "picture" : ["picture"],//图片
      "special" : []//特殊组件
    };
    //特殊控件类型
    this.special = ["mcheck","scheck","select","picture","date","time"]
    // 默认固定参数
    var type = ["stext","mtext","mcheck","scheck","select","picture","hr",
                "describe","date","time","number","file","phone","QQ",
                "weixin","email","IDnumber","password","price","title",
                "server","operator"],
        name = ["单行文本","多行文本","多选","单选","下拉选框","图片","分割线",
                "描述说明","日期","时间","数字输入框","附件","联系手机","联系QQ",
                "微信号","邮箱","身份证号","游戏密码","价格","标题","服务器",
                "运营商"];
    type.forEach(function(value,index){
      this.defaultObj[value] ={
        "type" : value,//类型
        "name" : name[index],//名称
        "describe" : "",//描述
        "require" : false,//必填
        'novisible' : false//可见性
      }
      var  speic =["scheck","mcheck","select"];
      if(~speic.indexOf(value)){
        var checkFrame = this.defaultObj[value].checkFrame = [];//子选项
        value != "select" && (this.defaultObj[value].cols = 1);//列数
        for(var i = 0; i < 3; i++){//默认3个选项
          checkFrame.push({
            "content" : name[index] +(i+1),
            "check" : false
          });
        }
      }
    }.bind(this));
    // console.log(this.defaultObj);
  },

  winChange(){
    var sWidth = this.formSelect.width(),//左边宽度
        cWidth = this.curFormItem.width(),//右边宽度
        dWidth = sWidth + cWidth + 65;//被减宽度
    var curWidth = this.contain.width() - dWidth;
    this.formContain.width(curWidth);//初始化宽度
    window.onresize = function(e){
      var curWidth = this.contain.width() - dWidth;
      this.formContain.width(curWidth);
    }.bind(this);
  },

//------------
  bindMove(){//移动事件绑定
    var that = this;
    //移动处理
    this.formElem.off('mousedown').on("mousedown",".form-item",function(e){
      var ev = e || window.event,
          offsetX = ev.clientX,
          offsetY = ev.clientY;
      ev.preventDefault();//禁止 禁止拖动标记出现
      that.curTarget = $(this);//取得当前目标对象
      var offetTop =that.curTarget.get(0).offsetTop ;
      that.curTarget.addClass('move');
      that.curY =offetTop;//存储当前元素位置
      $(document.body).on("mousemove",function(e){
        var e = e || window.event,
            x = e.clientX,
            y = e.clientY;
      that.curTarget.css({"top":offetTop+y-offsetY});
      that.checkChange();
      });
    });

    this.formElem.on("click",".form-item",function(e){//选择当前编辑对象
      if(that.curActive && this == that.curActive[0])return;//阻止重复渲染

      console.log('开始渲染');
      that.preActive = that.curActive;
      that.preActive && that.preActive.removeClass('focus');
      that.curActive = $(this);
      that.checkSpecic(that.curActive);//检查是否是特殊控件并作出处理
      that.operFrame.show();//展示右边
      that.curActive.addClass('focus');//渲染样式
      that.curId = that.curActive.attr("order");//取得数据位置
      that.focusItem(that.curActive);//获取dom
      that.dataRenderOp();//渲染固定部分右边
    });

    this.formElem.on("mousedown",".close",function(e){//删除
      that.curTarget = $(this).parents('.form-item');
      that._delete(that.curTarget);
    });

    this.formSelect.on("click",".elem",function(){//选择类型
      var _self = $(this),
          type = _self.attr('type');
      that.toost.hide();//提示隐藏
      that.dataRenderDom([that.defaultObj[type]]);
      var lastItem = that.formItem.last();//最后一个子元素
      //设置顶部
      lastItem.attr("order",that.formElemFlag-1).css({"top":that.maxHeight});
      that.maxHeight += lastItem.height() +that.itemDistance;//最大高度增加
      console.log('选择了控件:'+ this.innerHTML);
    });

    $(document.body).on("mouseup",function(){//移除滑动
      if(!that.curTarget)return;
      $(this).off("mousemove");
      that.curTarget.css({"top" : that.curY}).removeClass('move');
      that.curTarget = null;
    });

  },
//-------------移动 - 数据操作部分
  checkChange(){//检查是否交换
    var that = this;
    this.formItem.each(function(index,elem){
      if(that.curTarget.get(0) == elem)return;//同个元素不做判断
      var _elem = $(elem),
          _self = that.curTarget,
          _elemH = _elem.height(),//对比元素高度
          _selfH = _self.height(),//被拖动元素高度
          _elemTop = elem.offsetTop,//对比元素top值
          _selfTop = that.curY;//被拖动元素 拖动前 top值
      var fixDist = (_elemTop + _elemH/2 - _selfTop - _selfH/2)/3,//固定距离
          dynDist = _elemTop + _elemH/2 - _self.get(0).offsetTop - _selfH/2;//动态距离
      (Math.abs(dynDist) < Math.abs(fixDist)) && that.changePosition(_self,_elem);//满足条件触发交换
    });
  },

  _delete(target){//删除操作
    var curId = +target.attr('order'),
        top = target.get(0).offsetTop,
        targetHeight = target.height();
    this.curActive = null;//当前元素制空
    target.remove();//移除元素
    this.operFrame.hide();
    this.formItem = this.formElem.children('.form-item');
    this.data[curId]=null;//删除数据
    this.maxHeight -= (targetHeight+this.itemDistance);//最大位置减小
    this.maxHeight < 0 && (this.maxHeight = 0);//防止最大位置溢出 /可删除/
    this._refresh(-targetHeight-this.itemDistance,top);
    !this.formItem.length && this.toost.show();
  },

  _refresh(height,top){//删减增加高度时刷新高度
    this.formItem.each(function(index,elem){
      var _elem = $(elem),
          elemTop = _elem.get(0).offsetTop;
      if(elemTop > top){//删除完后下半边元素向上移动

        _elem.css({'top':elemTop + height});
      }
    }.bind(this));
  },

  changePosition(current,target){//交换自己和别人位置 数据
    var tap = null,//交换中值
        targetTop = target.get(0).offsetTop;
    //交换位置
    if(this.curY > target.get(0).offsetTop){//self在下边
      target.css({"top" :targetTop + this.itemDistance + current.height()});
      this.curY = targetTop;
    }else{//self在上边
      target.css({"top" : this.curY});
      this.curY += this.itemDistance + target.height();
    }
    //交换数据
    var curId = current.attr('order'),
        tarId = target.attr('order');
    tap = this.data[curId];//交换数据
    this.data[curId] = this.data[tarId];
    this.data[tarId] = tap;
    //交换order
    current.attr('order',tarId);
    target.attr('order',curId);
  },

  setPosition(elems){
    elems.each(function(index,elem){
      elem.style.top = this.maxHeight + "px";
      this.maxHeight += $(elem).height() +this.itemDistance;
    }.bind(this));
  },

  getData(){//获取最后数据
    return this.data.filter(function(value){return !!value;});
  },

  changeArr(list){
    return Array.prototype.slice(list);
  },

  getType(type){//获取控件类型  返回模板
    for (var key in this.hash) {
      if(~this.hash[key].indexOf(type)){
        return key;
      }
    }
  },
  //-------------------

//----------------表单选择填写部分

  bindFrom(){//表单操作事件
    var that = this;
    this.formAttr.name.on("input",function(){//字段名称
      if(!that.curActive){alert("未选择控件，非法操作");return;}
      that.operTarget.name.html(this.value);
      that.data[that.curId]['name'] = this.value;
      console.log('操作名称');
    });

    this.formAttr.describe.on("input",function(){//描述
      if(!that.curActive){alert("未选择控件，非法操作");return;}
      that.operTarget.describe.html(this.value);
      that.data[that.curId]['describe'] = this.value;
      console.log('操作描述');
    });

    this.formAttr.require.on("change",function(){//必填设置
      if(!that.curActive){alert("未选择控件，非法操作");return;}
      var check = $(this).prop("checked"),
          operTarget = that.operTarget;
      check ? operTarget.require.show() : operTarget.require.hide();
      that.data[that.curId]['require'] = check;
      console.log("操作必填性");
    });

    this.formAttr.visible.on("change",function(){//可见性
      if(!that.curActive){alert("未选择控件，非法操作");return;}
      var check = $(this).prop("checked"),
          operTarget = that.operTarget;
      check ? operTarget.visible.show() : operTarget.visible.hide();
      that.data[that.curId]['visible'] = check;
      console.log("操作可见性");
    });

    this.specialClick();
  },

  focusItem(target){//绑定固定操作元素
    this.operTarget = {//绑定固定元素
      "elem" : target,//本生
      "name" : target.find(".formValueDeatail"),//名称
      // "type" : target.find(".attrType"),//类型
      "describe" : target.find(".form-describe"),//描述
      "require" : target.find(".require"),//必填
      'visible' : target.find(".visibleIcon"),//可见
      'formstyle' : target.find(".formstyle")
    }
  },

  dataRenderOp(){//数据渲染右边公共部分操作
    var operTarget = this.operTarget,
        formAttr = this.formAttr;
    formAttr['name'].val(this.operTarget['name'].html());
    formAttr['describe'].val(this.operTarget['describe'].html());
    formAttr['type'].html(this.defaultObj[this.curActive.attr('type')].name);
    formAttr['require'].prop('checked',operTarget.require.is(":visible"));
    formAttr['visible'].prop('checked',operTarget.visible.is(":visible"));
  },

  dataRenderDom(data){//解析数据 渲染dom
    this.data.push.apply(this.data,data);//加入当前数据
    data.forEach(function(value,index){//增加真实类型
      data[index].realType = this.getType(value.type);
    }.bind(this));
    this.formElem.append(template('template', {"data":data}));//引用数据添加模板
    this.formElemFlag = this.data.length;//更新个数
    !this.formElemFlag && this.toost.show();
    this.formItem = this.formElem.children('.form-item');//所有选择控件元素
  },

  checkSpecic(target){//检查该控件是否是特殊处理控件
    var type = target.attr('type'),
        check = ~this.special.indexOf(type),
        special = this.formAttr.special;
    check ? special.show() : special.hide();//展示隐藏特殊区域
    check && this.specialForm(type);//调用特殊区域
  },

  specialForm(type){//特殊控件 ： 单选 多选 下拉  图片 时间 附件 有特殊操作
    switch(type){
      case 'mcheck':
      case 'scheck':
      case 'select':{
        this.specialEvent('mcheck');
        break;
      }
      case 'picture':
      case 'date':
      case 'time':{
        this.specialEvent(type);
        break;
      }
    }
  },
  specialEvent(scheck){//特殊控件事件
    this.dataIndex = this.data[this.curActive.attr("order")];
    this.checkFrame = this.dataIndex.checkFrame;
    return {
      mcheck : function(type){// 单选处理 多选处理 下拉处理 采用数据渲染
        var html = template("special",{"data":[this.dataIndex]});
        this.formAttr['special'].html(html)
      },

      picture : function(type){//图片处理
        this.formAttr['special'].html('');//--临时处理--//
      },

      date : function(type){//日期处理
        this.formAttr['special'].html('');//--临时处理--//
      },

      time : function(type){//时间处理
        this.formAttr['special'].html('');//--临时处理--//
      }
    }[scheck].call(this,scheck);

  },

  specialClick(){//特殊事件点击处理 --> 下拉 多选 单选
    var that = this;
    //改变------------------------
    this.formAttr['special'].on('change',".operCheck",function(){
      var _self = $(this),
          index = _self.parent().index(),//位置
          checkItem = that.operTarget.formstyle.find(".checkItem"),
          flag = _self.prop("checked"),//当前选取状态
          type = _self.attr("type");
      //多选处理
      if(that.dataIndex.realType == "checkbox"){
        checkItem.eq(index).find(".rocheck").prop("checked",//控件对应input样式
                  that.checkFrame[index].check = flag);
        return;
      }

      //单选 下拉 统一处理--
      that.checkFrame.forEach(function(value){value.check = false;});//去除选中
      that.checkFrame[index].check = true;//选中当前

      if(that.dataIndex.realType == "radio"){//单选处理
        checkItem.find(".rocheck").prop("checked",false).eq(index)
                 .prop("checked",true);
        return;
      }
      //下拉处理
      checkItem.prop("selected",false).eq(index).prop("selected",true);
    })

    //输入---------------------------
    this.formAttr['special'].on('input',".operInput",function(){
      var _self = $(this),
          index = _self.parent().index(),//位置
          checkItem = that.operTarget.formstyle.find(".checkItem"),
          value = _self.val();
      that.checkFrame[index].content = value;
      if(that.dataIndex.realType =="select"){//下拉框单独处理
        checkItem.eq(index).html(value).val(value);
        return;
      }
      checkItem.eq(index).find(".rocheckName").html(value);//单选多选处理
    });

    //移除------------------------------
    this.formAttr['special'].on('click',".remove",function(){
      if(that.checkFrame.length == 1){//元素不够
        alert("至少保留一个");
        return;
      }
      var _self = $(this),
          type = that.dataIndex.realType,
          index = _self.parent().index(),//位置
          checkItem = that.operTarget.formstyle.find(".checkItem"),
          top = that.curActive.get(0).offsetTop;
      // console.log(height);
      that.checkFrame.splice(index,1);//移除数据
      var preHeight = that.curActive.height();
      checkItem.eq(index).remove();//移除
      var curHeight = that.curActive.height(),//现在高度
          height = curHeight - preHeight;//高度差
      if(type != "select"){
        that.maxHeight -= height;//最大高度变动
        that._refresh(height,top);//高度变动
      }
      _self.parent().remove();//移除操作区
    });

    //增加-------------------------------
    this.formAttr['special'].on('click',".addChoose",function(){
      var type = that.dataIndex.realType,//类型
          name = that.defaultObj[that.curActive.attr('type')].name,//名字
          attrDom = template("addCheck",{"data":[{"name":name,"type":type}]}),
          formDom = template("addFCheck",{"data":[{"name":name,"type":type}]}),
          formstyle = that.operTarget['formstyle'];
      if(type == "select"){
        formstyle.children(".select").append(formDom);
      }else{
        var preHeight = that.curActive.height();
        formstyle.append(formDom);
        var curHeight = that.curActive.height(),//现在高度
            height = curHeight - preHeight,//高度差
            top = that.curActive.get(0).offsetTop;
        that.maxHeight += height;//最大高度变动
        that._refresh(height,top);//高度变动
      }
      that.formAttr['special'].children().last().before(attrDom);
      that.checkFrame.push({"check":false,"content":name});
    });

    this.formAttr['special'].on('change',".colsValue",function(){
      var item = that.operTarget['formstyle'].children(),
          cols = $(this).val(),//裂数
          rate = ((1/cols)*100).toFixed(2) +"%",//百分比
          preHeight = that.curActive.height(),//变化前高度
          top = that.curActive.get(0).offsetTop;
      that.dataIndex.cols = cols;
      item.css({"width":rate});
      var curHeight = that.curActive.height(),//现在高度
          height = curHeight - preHeight;//高度差
      that.maxHeight += height;//最大高度变动
      that._refresh(height,top);
    });
  }
}
