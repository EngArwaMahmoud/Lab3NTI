// Make a function that takes date string as a parameter,
//  and returns the Day name (Saturday, Sunday,) of the given date.

function getDayName(dateString) {

    const MyDate = new Date(dateString);
    const GetDay = MyDate.getDay();
    const GetMonth = MyDate.getMonth();
    const GetYear = MyDate.getFullYear();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[GetDay];
    // return GetMonth;
    // return GetYear;
}

console.log(getDayName("2025-07-08")); 