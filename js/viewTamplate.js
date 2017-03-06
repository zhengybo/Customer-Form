$(function(){

  var data = JSON.parse(localStorage.getItem("form"));
  template.config("escape", false);
  template.helper("rate",rate);
  template.helper("getTime",getTime);
  var html=template("view",{'data':data});
  $("#shopsArea").html(html)
  // console.log(html);
  new UpFile({
    file : $(".upfile"),
    showFile : $(".filePath"),
    _csrf :"3456456",
    url : "./index.html"
  });
  new UpPictrue({
    file : $("#upfile"),
    showFile : $(".viewPictrue"),
    _csrf :"3456456",
    url : "./index.html"
  })

  function rate(value){
    return ((1/value)*100).toFixed(2) +"%";
  }

  function getTime(value){
    var html = ''
    for(var i = 0;i<value;i++){
      html += "<option value="+i+">"+getzf(i)+"</option>";
    }
    return html;
  }

  function getzf(num){
      if(parseInt(num) < 10){
          num = '0'+num;
      }
      return num;
  }
})
