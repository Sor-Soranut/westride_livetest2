function tomorow(today, tomorow) {
  let year_366 = 0;
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
    month: {
      0: 31,
      1: 28,
      2: 31,
      3: 30,
      4: 31,
      5: 30,
      6: 31,
      7: 31,
      8: 30,
      9: 31,
      10: 30,
      11: 31,
    },
  };
  function day_check(today, tomorow) {
    let next_day = tomorow % 7;
    if (next_day == 0) {
      return calendar["day"][today];
    } else if (today + next_day >= 7) {
      return calendar["day"][today + next_day - 7];
    } else if (today + next_day < 7) {
      return calendar["day"][today + next_day];
    }
  }

  function tomorow_yaer_check(year_now, tomorow) {
    year_366 = (year_now % 4) + 1;
    while (tomorow >= 365) {
      year_366++;
      if (year_366 < 4) {
        tomorow -= 365;
        year_now++;
      } else {
        year_366 = 1;
        tomorow -= 366;
      }
    }
    // year_now = yaer tomorow
    return [tomorow, year_now];
  }

  let year_now = today[3];
  let month_now = today[2];
  let date_now = today[1];
  let day_now = today[0];

  function tomorow_month_check(
    day_now,
    date_now,
    year_now,
    month_now,
    tomorow
  ) {
    let tomorow_day = day_check(day_now, tomorow);
    let tomorow_date = tomorow_yaer_check(year_now, tomorow)[0];
    let tomorow_yaer = tomorow_yaer_check(year_now, tomorow)[1];
    if (tomorow_yaer % 4 == 0) {
      calendar["month"][1] = 29;
    }
    tomorow_date = tomorow_date - (calendar["month"][month_now - 1] - date_now);
    let i = month_now;
    do {
      tomorow_date -= calendar["month"][i];
      i++;
    } while (tomorow_date > 31);
    return tomorow_day + ":" + tomorow_date + "/" + i + "/" + tomorow_yaer;
  }

  return tomorow_month_check(day_now, date_now, year_now, month_now, tomorow);
  // return month_now;
  //tomorow_yaer_check(year_now,tomorow);
}

console.log(tomorow([3, 20, 3, 2000], 100001));
