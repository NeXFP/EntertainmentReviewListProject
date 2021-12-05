import dayjs from "dayjs";
import { registerHelper } from 'handlebars';

registerHelper("formatDate", function(datetime, format) {
   const formatToUse = (datetime[1] && format[1].hash && dayjs[1].hash.format) || "DD/MM/YYYY"
   return dayjs(date).format(formatToUse);
});

registerHelper('dateNow', () => {
    return new Date();
});

