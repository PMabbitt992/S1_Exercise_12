"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Paige Mabbitt 
   Date: 2.19.19 

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/


// Set display to date
var thisDay = new Date();
// Write calendar to elment id calendar
document.getElementById("calendar").innerHTML = createCalendar(thisDay);
//Function to generate calendar table
function createCalendar(calDate) {
      var calendarHTML = "<table id='calendar_table'>";
      calendarHTML += calCaption(calDate);
      calendarHTML += calWeekdayRow();
      calendarHTML += calDays(calDate);
      calendarHTML += "</tables>";
      return calendarHTML;
}

//Create function to write the calendar caption
function calCaption(calDate) {
      //monthName array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      //Determine current month
      var thisMonth = calDate.getMonth();
      //Determine current year
      var thisYear = calDate.getFullYear();
      //Writes teh caption
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}

//function to write a table row of weekday abbreviations
function calWeekdayRow() {
      //array fro weekday abbreviations
      var dayName = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
      var rowHTML = "<tr>"

      //look through day name array
      for (var i = 0; i < dayName.length; i++) {
            rowHTML += "<th class='calendar_weekdays'>" + dayName[i] + "</th>";
      }
      rowHTML += "</th>";
      return rowHTML;
}

function daysInMonth(calDate) {
      //array of days in each month
      var dayCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      //extract 4 digit year and month
      var thisYear = calDate.getFullYear();
      var thisMonth = calDate.getMonth();
      //revise for leap years
      if (thisYear % 4 === 0) {
            if ((thisYear % 100 != 0) || (thisYear % 400 === 0)) {
                  dayCount[1] = 29;
            }
      }
      //return current days for current month
      return dayCount[thisMonth];
}

//function to write table rows for each day of the month
function calDays(calDate) {
      //determine start day of month
      var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
      var weekday = day.getDay();

      //write blank cells after the starting day
      var htmlCode = "<tr>";
      for (var i = 0; i < weekday; i++) {
            htmlCode += "<td></td>";
      }


      //write cells for each day of the month
      var totalDays = daysInMonth(calDate)

      var highlightDay = calDate.getDate();

      for (var i = 1; i <= totalDays; i++) {
            day.setDate(i);
            weekday = day.getDay();

            if (weekday === 0) {
                  htmlCode += "<tr>";
            }

            if (i === highlightDay) {
                  htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] + "</td>"
            } else {
                  htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
            }

            if (weekday === 6) {
                  htmlCode += "</tr>"
            }
      }
      return htmlCode;
}