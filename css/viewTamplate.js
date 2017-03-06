import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "viewTamp": {
        "textAlign": "center",
        "width": 800,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "viewTamp areaTitle": {
        "height": 36,
        "textAlign": "center",
        "lineHeight": 36,
        "backgroundColor": "#f2f2f2",
        "color": "#464646"
    },
    "reviewTamp": {
        "marginTop": 30
    },
    "shopsArea tampItem": {
        "overflow": "hidden",
        "marginTop": 15
    },
    "shopsArea tampItemName": {
        "lineHeight": 30,
        "height": 30,
        "float": "left",
        "width": 105,
        "textAlign": "right"
    },
    "shopsArea tampItemCon": {
        "float": "left",
        "width": 450,
        "marginLeft": 25,
        "position": "relative",
        "overflow": "hidden"
    },
    "shopsArea checkItem": {
        "overflow": "hidden",
        "float": "left"
    },
    "shopsArea checkInput": {
        "float": "left",
        "marginTop": 8
    },
    "shopsArea checkName": {
        "paddingLeft": 5,
        "float": "left",
        "lineHeight": 28
    },
    "shopsArea label": {
        "userSelect": "none",
        "cursor": "pointer"
    },
    "shopsArea filePath": {
        "width": "378px!important",
        "float": "left"
    },
    "shopsArea upfile": {
        "position": "absolute",
        "right": 0,
        "top": 0,
        "fontSize": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "opacity": 0,
        "content": "''",
        "cursor": "pointer!important",
        "width": 45,
        "height": 30
    },
    "shopsArea upPictrue": {
        "position": "absolute",
        "right": 0,
        "top": 0,
        "fontSize": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "opacity": 0,
        "content": "''",
        "cursor": "pointer!important",
        "width": 445,
        "height": 120
    },
    "shopsArea viewPictrue": {
        "width": 445,
        "height": 120
    },
    "shopsArea upfile:hover": {
        "cursor": "pointer"
    },
    "viewFile": {
        "float": "left",
        "width": 45,
        "height": 28,
        "marginLeft": 10,
        "border": "1px solid #ccc",
        "textAlign": "center",
        "lineHeight": 28,
        "cursor": "pointer!important"
    },
    "shopsArea input[type='radio']": {
        "cursor": "pointer"
    },
    "shopsArea input[type='checkbox']": {
        "cursor": "pointer"
    },
    "shopsArea input[type='text']": {
        "width": 435,
        "height": 28,
        "border": "1px solid #ccc",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "shopsArea mtext": {
        "width": 435,
        "height": 100,
        "border": "1px solid #ccc",
        "resize": "none",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "shopsArea require": {
        "color": "red"
    },
    "shopsArea line": {
        "borderTop": "1px dashed #ccc",
        "width": 450,
        "marginTop": 15
    },
    "shopsArea describe": {
        "lineHeight": 28,
        "fontSize": 15,
        "fontWeight": "bold"
    },
    "error": {
        "color": "red",
        "float": "left",
        "lineHeight": 30,
        "marginLeft": 10
    },
    "shopsArea date": {
        "width": 445,
        "height": 28,
        "border": "1px solid #ccc"
    },
    "shopsArea hour": {
        "float": "left",
        "width": "48px!important",
        "height": "28px!important",
        "border": "1px solid #ccc",
        "outline": "none"
    },
    "shopsArea second": {
        "float": "left",
        "width": "48px!important",
        "height": "28px!important",
        "border": "1px solid #ccc",
        "outline": "none"
    },
    "shopsArea mao": {
        "lineHeight": 28,
        "fontSize": 16,
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "shopsArea password": {
        "width": 435,
        "height": 28,
        "border": "1px solid #ccc",
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "shopsArea select": {
        "float": "left",
        "width": 120,
        "height": 28,
        "border": "1px solid #ccc"
    },
    "msgToost": {
        "clear": "both",
        "textAlign": "justify",
        "textIndent": 1
    }
});