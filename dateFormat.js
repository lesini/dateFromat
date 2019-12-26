import {
  enWeekList,
  enMonthList,
  chList,
} from "datedata.js"
export const dateFromat = (date, fromat = "YYYY MM DD", splitter = ",") => {
  date = new Date(parseInt(date));
  const dateObj = {
    YYYY: date.getFullYear(),
    YY: date.getFullYear().toString().slice(2),
    chMM: chList[date.getMonth()]+"月",
    MM: enMonthList[date.getMonth()],
    M: enMonthList[date.getMonth()].slice(0, 2),
    DD: date.getDate(),
    hh: date.getHours(),
    mm: date.getMinutes(),
    ss: date.getSeconds(),
    chWe: date.getDay() < 7 ? "星期" + chList[date.getDay()-1] : "星期日",
    We: enWeekList[date.getDay()-1],
    W: enWeekList[date.getDay()].slice(0, 2),
    TT: date.getHours() >= 12 ? "PM" : "AM"
  };


  let result = fromat.split(" ").reduce((dateArr, item)=>{
    return (dateArr.push(dateObj[item] ? dateObj[item] : item), dateArr);
  },[]);

  return result.join(splitter);
}