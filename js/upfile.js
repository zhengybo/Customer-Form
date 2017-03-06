function UpPictrue(options){
  this.file = options.file;
  this.showFile = options.showFile;
  this.url = options.url;
  this._csrf = options._csrf;
  this.init();
}

UpPictrue.prototype = {
  constructor : UpFile,

  init(){
    this.up();
  },
  up(){
    var that = this;
    this.file.on("change",function(){
      var file=this.files,
          reader = new FileReader(),
          fileSize = 0;
      if(!that.IsPicture(file[0].name)){
        alert("请上传正确的图片");
        return;
      }
      if(fileSize>1024 * 1024*3){
       alert("图片过大请上传小于3MB的图片");
       return;
      }
      var src = "";
      reader.readAsDataURL(file[0]);
      reader.onload = function(e){
        that.showFile.attr("src",this.result)
        src = this.result;
        that.uploadFile(file[0],src);
      }

  });
  },

  uploadFile(file,src){
    var form = document.createElement("form");
    form.setAttribute("enctype","multipart/form-data");
    form.setAttribute("method","post");
    var fd = new FormData(form);//创建表单数据对象
    fd.append('header', file);
    // fd.append('_csrf', csrf);
    fd.append('_csrf', this.csrf);

    var xhr = new XMLHttpRequest();
    // xhr.open("POST", '/personal/save-img.html');
    xhr.open("POST",this.url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("上传成功");
          that.showFile.attr("src",src)
        }
    };
    xhr.send(fd);
  },

  IsPicture(string)
  {
      //判断是否是图片 - strFilter必须是小写列举
      var strFilter=".jpeg|.gif|.jpg|.png|.bmp|.pic|";
      if(~string.indexOf("."))
      {
          var p = string.lastIndexOf("."),
              strPostfix=string.substring(p,string.length) + '|';
          strPostfix = strPostfix.toLowerCase();
          if(strFilter.indexOf(strPostfix)>-1){return true;}
      }
      return false;
  }
}


function UpFile(options){//上传文件
  this.file = options.file;
  this.showFile = options.showFile;
  this.url = options.url;
  this._csrf = options._csrf;
  this.init();
}

UpFile.prototype = {
  constructor : UpFile,

  init(){
    this.up();
  },
  up(){
    var that = this;
    console.log(this.file);
    this.file.on("change",function(){
      var file=this.files,
          reader = new FileReader(),
          fileSize = file[0].size;
      if(fileSize>1024 * 1024*3){
       alert("文件过大请上传小于3MB的图片");
       return;
      }
      that.showFile.val(file[0].name)
      that.uploadFile(file[0]);
    });
  },
  uploadFile(file){
    var that = this;
    var form = document.createElement("form");
    form.setAttribute("enctype","multipart/form-data");
    form.setAttribute("method","post");
    var fd = new FormData(form);//创建表单数据对象
    fd.append('header', file);
    // fd.append('_csrf', csrf);
    fd.append('_csrf', this.csrf);

    var xhr = new XMLHttpRequest();
    // xhr.open("POST", '/personal/save-img.html');
    console.log(file.name);
    xhr.open("POST",this.url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log("上传成功");
          that.showFile.val(file.name)
        }
    };
    xhr.send(fd);
  }

}
