var kingstonMonday = {
    conditions: 'Rainy',
    night : 14,
    POP : 21,
    wind: 10,
    hrsOfSun: "10hr",
    hrRain: "5hr", 
};

var kingstonTuesday = {
    conditions: 'Sunny',
    night : 10,
    POP : 20,
    wind: 15,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var kingstonWednesday = {
    conditions: 'Cloudy',
    night : 14,
    POP : 23,
    wind: 17,
    hrsOfSun: "5hr",
    hrRain: "0hr", 
};

var kingstonThursday = {
    conditions: 'light rain',
    night : 18,
    POP : 26,
    wind: 10,
    hrsOfSun: "4hr",
    hrRain: "7hr", 
};

var kingstonFriday = {
    conditions: 'Sunny',
    night : 5,
    POP : 29,
    wind: 15,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var kingstonSaturday = {
    conditions: 'Heavy rain',
    night : 10,
    POP : 30,
    wind: 10,
    hrsOfSun: "2hr",
    hrRain: "8hr", 
};

var kingstonSunday = {
    conditions: 'light rain',
    night : 19,
    POP : 22,
    wind: 13,
    hrsOfSun: "10hr",
    hrRain: "8hr", 
};

var ottawaSunday = {
    conditions: 'light rain',
    night : 14,
    POP : 20,
    wind: 13,
    hrsOfSun: "5hr",
    hrRain: "8hr", 
};

var ottawaMonday = {
    conditions: 'Sunny',
    night : 12,
    POP : 19,
    wind: 9,
    hrsOfSun: "11hr",
    hrRain: "5hr", 
};

var ottawaTuesday = {
    conditions: 'Thunder and Rain',
    night : 10,
    POP : 29,
    wind: 20,
    hrsOfSun: "4hr",
    hrRain: "8hr", 
};

var ottawaWednesday = {
    conditions: 'Sunny',
    night : 10,
    POP : 21,
    wind: 10,
    hrsOfSun: "10hr",
    hrRain: "4hr", 
};

var ottawaThursday = {
    conditions: 'light rain',
    night : 20,
    POP : 9,
    wind: 11,
    hrsOfSun: "5hr",
    hrRain: "8hr", 
};

var ottawaFriday = {
    conditions: 'light rain',
    night : 14,
    POP : 20,
    wind: 13,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var ottawaSaturday = {
    conditions: 'Sunny',
    night : 20,
    POP : 20,
    wind: 9,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var torontoSunday = {
    conditions: 'Cloudy',
    night : 10,
    POP : 20,
    wind: 11,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var torontoMonday = {
    conditions: 'light rain',
    night : 11,
    POP : 22,
    wind: 11,
    hrsOfSun: "0hr",
    hrRain: "8hr", 
};

var torontoTuesday = {
    conditions: 'Sunny',
    night : 19,
    POP : 20,
    wind: 13,
    hrsOfSun: "0hr",
    hrRain: "8hr", 
};

var torontoWednesday = {
    conditions: 'light rain',
    night : 14,
    POP : 22,
    wind: 11,
    hrsOfSun: "0hr",
    hrRain: "8hr", 
};

var torontoThursday = {
    conditions: 'Sunnay',
    night : 14,
    POP : 21,
    wind: 19,
    hrsOfSun: "10hr",
    hrRain: "0hr", 
};

var torontoFriday = {
    conditions: 'light rain',
    night : 10,
    POP : 28,
    wind: 34,
    hrsOfSun: "2hr",
    hrRain: "8hr", 
};

var torontoSaturday = {
    conditions: 'Sunny',
    night : 7,
    POP : 27,
    wind: 20,
    hrsOfSun: "10hr",
    hrRain: "1hr", 
};

const kingstonWeekly = {};

kingstonWeekly.kingstonMonday = kingstonMonday;
kingstonWeekly.kingstonTuesday = kingstonTuesday;
kingstonWeekly.kingstonWednesday = kingstonWednesday; 
kingstonWeekly.kingstonThursday = kingstonThursday; 
kingstonWeekly.kingstonFriday = kingstonFriday; 
kingstonWeekly.kingstonSaturday = kingstonSaturday; 
kingstonWeekly.kingstonSunday = kingstonSunday; 


const ottawaWeekly = {};

ottawaWeekly.ottawaMonday = ottawaMonday;
ottawaWeekly.ottawaTuesday = ottawaTuesday;
ottawaWeekly.ottawaWednesday = ottawaWednesday; 
ottawaWeekly.ottawaThursday = ottawaThursday; 
ottawaWeekly.ottawaFriday = ottawaFriday; 
ottawaWeekly.ottawaSaturday = ottawaSaturday; 
ottawaWeekly.ottawaSunday = ottawaSunday; 

const torontoWeekly = {};

torontoWeekly.torontoMonday = torontoMonday;
torontoWeekly.torontoTuesday = torontoTuesday;
torontoWeekly.torontoWednesday = torontoWednesday;
torontoWeekly.torontoThursday = torontoThursday;
torontoWeekly.torontoFriday = torontoFriday;
torontoWeekly.torontoSaturday = torontoSaturday;
torontoWeekly.torontoSunday = torontoSunday;

/*
const dailyWeather = {
    monday: [kingstonMonday, ottawaMonday, torontoMonday],
    tuesday: [kingstonTuesday, ottawaTuesday,torontoTuesday],
    wednesday: [kingstonWednesday, ottawaWednesday, torontoWednesday ],
    thursday: [kingstonThursday, ottawaThursday, torontoThursday],
    friday: [kingstonFriday, ottawaFriday, torontoFriday],
    saturday: [kingstonSaturday, ottawaSaturday, torontoSaturday],
    sunday: [kingstonSunday, ottawaSunday, torontoSunday],
}
*/
const cityWeather = {
    kingston: kingstonWeekly,
    ottawa: ottawaWeekly,
    toronto: torontoWeekly,
}


const masterWeather = {
   cityWeather: cityWeather,
}

module.exports = masterWeather;