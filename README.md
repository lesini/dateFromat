# dateFromat

## 时间序列化控件

## 参数
  
 #### @param {时间戳} date 
 #### @param {输出格式分割符 默认 ","} splitter 
 #### @param {输出格式，默认 "2019,12,26"} fromat 
 ##### YYYY 2019
 ##### YY 19
 ##### MM December
 ##### chMM  12月
 ##### M Dec 
 ##### DD 26
 ##### hh 09
 ##### mm 12
 ##### ss 56
 ##### chWe 星期一
 ##### We Monday
 ##### W Mon
 ##### TT AM/PM


#### DEMO
```
1、dateFromat(1577366955076,"YYYY MM DD hh mm ss W TT") //"2019,December,26,21,29,15,Fr,PM"
2、dateFromat(1577366955076,"YY M DD hh mm ss W TT") //"19,De,26,21,29,15,Fr,PM"
3、dateFromat(1577366955076,"MM YYYY","-") //"December-2019"
4、dateFromat(1577366955076,"chMM YYYY","-") //"十二月-2019"
5、dateFromat(1577366955076,"chMM YYYY chWe","-") //"十二月-2019-星期六"
6、dateFromat(1577366955076,"M YYYY W","-") //"De-2019-Fr"
7、dateFromat(1577366955076,"YYYY MM We","-") //"2019-December-Friday"
```
