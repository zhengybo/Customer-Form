import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "height": "100%"
    },
    "pointer": {
        "cursor": "pointer",
        "userSelect": "none"
    },
    "contain": {
        "minWidth": 1150,
        "height": 600
    },
    "formContain": {
        "height": 625,
        "minWidth": 500,
        "marginLeft": 30,
        "border": "1px solid #f2f2f2",
        "float": "left",
        "position": "relative"
    },
    "toost": {
        "position": "absolute",
        "top": 40,
        "zIndex": -1,
        "textAlign": "center",
        "fontSize": 20,
        "lineHeight": 30,
        "width": "100%",
        "fontWeight": "bold",
        "display": "none"
    },
    "formContain formTitle": {
        "height": 40,
        "backgroundColor": "#f2f2f2"
    },
    "contain formTitleName": {
        "height": 36,
        "color": "#464646",
        "backgroundColor": "#f2f2f2",
        "textAlign": "center",
        "lineHeight": 36,
        "fontSize": 15,
        "fontWeight": "bold"
    },
    "formContain blank": {
        "height": 4,
        "backgroundColor": "white"
    },
    "form": {
        "height": 580,
        "boxSizing": "content-box",
        "overflow": "auto",
        "position": "relative",
        "userSelect": "none"
    },
    "form form-item": {
        "width": "99%",
        "position": "absolute",
        "border": "1px solid transparent",
        "marginLeft": 2,
        "cursor": "pointer",
        "overflow": "hidden",
        "backgroundColor": "white"
    },
    "form form-item:hover": {
        "border": "1px dashed #d4d4d4"
    },
    "form block": {
        "height": 5
    },
    "standCompoent": {
        "overflow": "hidden"
    },
    "usuaCompoent": {
        "overflow": "hidden",
        "marginTop": 16
    },
    "inputSelect": {
        "float": "left",
        "width": 290,
        "height": 625,
        "overflow": "auto",
        "border": "1px solid #f2f2f2"
    },
    "compoentTit": {
        "textIndent": 20,
        "fontSize": 14,
        "fontWeight": "bold",
        "marginTop": 8,
        "marginBottom": 10
    },
    "inputSelect elem": {
        "width": 108,
        "height": 28,
        "float": "left",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 15,
        "marginLeft": 20,
        "border": "1px dashed #ccc",
        "textAlign": "center",
        "lineHeight": 28,
        "fontSize": 14,
        "userSelect": "none",
        "cursor": "pointer"
    },
    "form form-content": {
        "float": "left",
        "width": "60%",
        "height": "100%"
    },
    "form form-describe": {
        "marginTop": 7,
        "float": "left",
        "width": "30%",
        "height": 65,
        "wordBreak": "break-all",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "display": "-webkit-box",
        "WebkitLineClamp": 4,
        "WebkitBoxOrient": "vertical"
    },
    "form close": {
        "position": "absolute",
        "width": 20,
        "height": 20,
        "right": 3,
        "top": 3,
        "fontSize": 20,
        "display": "none",
        "background": "url('./../img/act.png') no-repeat -50px 4px"
    },
    "form visibleIcon": {
        "position": "absolute",
        "width": 20,
        "height": 20,
        "right": 3,
        "top": "50%",
        "marginTop": -10,
        "background": "url('./../img/locksmall.png') no-repeat center center",
        "display": "none"
    },
    "form focus close": {
        "display": "block"
    },
    "form focus": {
        "backgroundColor": "#f5fafd"
    },
    "form formValue": {
        "height": 32,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "form formstyle": {
        "overflow": "hidden",
        "marginLeft": 10,
        "paddingBottom": 5
    },
    "form text": {
        "height": 32,
        "width": 200,
        "border": "1px solid #ccc",
        "cursor": "pointer"
    },
    "form move": {
        "zIndex": 999
    },
    "form requireFrame": {
        "color": "red",
        "lineHeight": 32,
        "marginLeft": 10,
        "width": 10,
        "fontSize": 16,
        "height": 32,
        "float": "left"
    },
    "form require": {
        "display": "none",
        "lineHeight": 32
    },
    "form formValueDeatail": {
        "lineHeight": 32
    },
    "moreText": {
        "width": 200,
        "height": 60,
        "border": "1px solid #ccc",
        "resize": "none",
        "borderRadius": 5,
        "cursor": "pointer"
    },
    "form select": {
        "width": "80%!important",
        "height": 30,
        "border": "1px solid #ccc",
        "color": "#666",
        "resize": "none",
        "borderRadius": 5,
        "cursor": "pointer",
        "textIndent": 10,
        "userSelect": "none"
    },
    "form rocheck": {
        "float": "left",
        "marginTop": 4
    },
    "form rocheckName": {
        "float": "left",
        "marginLeft": 8,
        "lineHeight": 20,
        "maxWidth": "80%",
        "wordBreak": "break-all",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "form checkItem": {
        "overflow": "hidden",
        "width": "100%",
        "float": "left"
    },
    "form input": {
        "cursor": "pointer",
        "textIndent": 10,
        "userSelect": "none"
    },
    "form textarea": {
        "cursor": "pointer",
        "textIndent": 10,
        "userSelect": "none",
        "width": "80%!important"
    },
    "form input[type=\"text\"]": {
        "width": "80%!important"
    },
    "form hms": {
        "overflow": "hidden"
    },
    "form hsmBlock": {
        "float": "left",
        "textAlign": "center",
        "width": 50
    },
    "form hor": {
        "width": 10,
        "lineHeight": 30,
        "float": "left",
        "textAlign": "center"
    },
    "form dateInput": {
        "width": 48,
        "height": 30,
        "border": "1px solid #ccc"
    },
    "form timeSelect": {
        "width": 48,
        "height": 30,
        "border": "1px solid #ccc",
        "color": "#666"
    },
    "form dividLine": {
        "borderTop": "1px dashed #ccc"
    },
    "form smallTitle": {
        "fontSize": 18,
        "fontWeight": "bold"
    },
    "form picture": {
        "width": "80%",
        "height": 100
    },
    "form file": {
        "width": "70%",
        "height": 30,
        "border": "1px solid #ccc",
        "float": "left"
    },
    "form scan": {
        "width": "15%",
        "height": 30,
        "textAlign": "center",
        "lineHeight": 30,
        "float": "left",
        "border": "1px solid #ccc",
        "marginLeft": 10,
        "backgroundColor": "#eaeaea",
        "color": "#999"
    },
    "save": {
        "width": 50,
        "height": 30,
        "textAlign": "center",
        "lineHeight": 30,
        "fontSize": 16,
        "position": "absolute",
        "right": 0,
        "border": "1px solid #ccc",
        "userSelect": "none",
        "cursor": "pointer"
    },
    "curFormItem": {
        "float": "left",
        "width": 286,
        "height": 625,
        "overflow": "auto",
        "marginLeft": 20,
        "position": "relative",
        "border": "1px solid #f2f2f2"
    },
    "setItem": {
        "position": "absolute",
        "left": 12,
        "top": 36,
        "paddingTop": 30,
        "backgroundColor": "white",
        "display": "none"
    },
    "noChooseForm": {
        "textAlign": "center",
        "fontSize": 16,
        "paddingTop": 30
    },
    "curFormItem attributeItem": {
        "marginBottom": 10,
        "overflow": "hidden"
    },
    "curFormItem attributeName": {
        "fontSize": 14,
        "fontWeight": "bold",
        "textIndent": 10,
        "lineHeight": 26
    },
    "curFormItem control-itemName": {
        "width": 244,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "resize": "none",
        "border": "1px solid #ccc"
    },
    "curFormItem control-describe": {
        "width": 244,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "resize": "none",
        "border": "1px solid #ccc"
    },
    "curFormItem control-require": {
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "cursor": "pointer"
    },
    "curFormItem control-visible": {
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "cursor": "pointer"
    },
    "curFormItem attributeCon": {
        "overflow": "hidden"
    },
    "curFormItem requireTag": {
        "paddingLeft": 5,
        "lineHeight": 30
    },
    "curFormItem visibleTag": {
        "paddingLeft": 5,
        "lineHeight": 30
    },
    "attrType": {
        "width": 100,
        "height": 26,
        "marginLeft": 10,
        "border": "1px solid #ccc",
        "lineHeight": 26,
        "textAlign": "center",
        "fontSize": 14,
        "color": "#999",
        "userSelect": "none",
        "cursor": "default"
    },
    "specialArea operCheckItem": {
        "overflow": "hidden",
        "marginTop": 8
    },
    "specialArea operCheck": {
        "marginTop": 9,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "float": "left",
        "cursor": "pointer"
    },
    "specialArea operInput": {
        "float": "left",
        "width": 142,
        "height": 28,
        "marginLeft": 8,
        "paddingTop": 0,
        "paddingRight": 8,
        "paddingBottom": 0,
        "paddingLeft": 8,
        "border": "1px solid #ccc"
    },
    "specialArea": {
        "position": "relative"
    },
    "specialArea addChoose": {
        "position": "absolute",
        "bottom": 2,
        "right": 5,
        "width": 20,
        "height": 28,
        "lineHeight": 28,
        "cursor": "pointer",
        "userSelect": "none",
        "background": "url('./../img/act.png') no-repeat 0 5px"
    },
    "specialArea remove": {
        "width": 20,
        "height": 28,
        "marginLeft": 15,
        "lineHeight": 28,
        "float": "left",
        "cursor": "pointer",
        "userSelect": "none",
        "background": "url('./../img/act.png') no-repeat -25px 5px"
    },
    "specialArea cols": {
        "lineHeight": 20,
        "fontSize": 14,
        "overflow": "hidden"
    },
    "specialArea  colsName": {
        "lineHeight": 24
    },
    "specialArea colsValue": {
        "width": 100,
        "height": 24,
        "border": "1px solid #ccc"
    }
});