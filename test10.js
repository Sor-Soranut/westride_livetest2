function tomorrow(today, tomorrow) {
  let year = today[3];
  let month = today[2];
  let date = today[1];
  let day = today[0];
  let calendar = {
    day: {
      0: "SUN",
      1: "MON",
      2: "TUE",
      3: "WED",
      4: "THU",
      5: "FRI",
      6: "SAT",
    },
    months: {
      1: 31,
      2: 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    },
  };
  function day_check(today, tomorrow) {
    let next_day = tomorrow % 7;
    if (next_day == 0) {
      return calendar["day"][today];
    } else if (today + next_day >= 7) {
      return calendar["day"][today + next_day - 7];
    } else if (today + next_day < 7) {
      return calendar["day"][today + next_day];
    }
  }
  day = day_check(today[0], tomorrow);

  if (tomorrow <= 31) {
    if (date + tomorrow <= calendar["months"][month]) {
      date = date + tomorrow;
    } else {
      tomorrow -= calendar["months"][month] - date;
      month++;
      date = tomorrow;
    }
  } else {
    tomorrow -= calendar["months"][month] - date;
    let value = month + 1;
    while (tomorrow > 28) {
      if (year % 4 == 0) {
        calendar["months"][2] = 29;
      } else {
        calendar["months"][2] = 28;
      }
      if (tomorrow >= calendar["months"][value]) {
        tomorrow -= calendar["months"][value];
        if (tomorrow == 0) {
          tomorrow = calendar["months"][value];
        }
        month++;
        date = tomorrow;
      } else {
        console.log(tomorrow);
        date = tomorrow;
        console.log(date);
        tomorrow = 0;
        month++;
      }
      value++;
      if (value == 13) {
        month = 1;
        value = 1;
        year++;
      }
      //console.log(calendar["months"][2] + ":" + month+":"+year);
    }
  }
  return console.log(day + ":" + date + "/" + month + "/" + year);
}
tomorrow([5, 28, 4, 2023], 300000000);
