const dayjs = require("dayjs");
const hb = require('handlebars');

hb.registerHelper("formatDate", function(datetime, format) {
   const formatToUse = (datetime[1] && format[1].hash && dayjs[1].hash.format) || "DD/MM/YYYY"
   return dayjs(date).format(formatToUse);
});

hb.registerHelper('dateNow', () => {
    return new Date();
});