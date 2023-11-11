function padLeft(chr) {
  return chr < 10 ? `0${chr}` : chr;
}

export const dateSlices = (date) => {
  const d = new Date(date);
  const dd = padLeft(d.getDate());
  const MM = padLeft(d.getMonth() + 1);
  const yyyy = padLeft(d.getFullYear());
  const HH = padLeft(d.getHours());
  const mm = padLeft(d.getMinutes());
  const ddMMyy = `${dd}.${MM}.${yyyy}`;
  const HHmm = `${HH}:${mm}`;

  return {
    dd,
    MM,
    yyyy,
    HH,
    mm,
    ddMMyy,
    HHmm,
  };
};

export const formatDate = (date, time = false) => {
  const d = new Date(date);
  if (!d.getDate()) {
    let name = date.split(" ")[0];
    name = name.replace("-", ".");
    name = name.replace("-", ".");
    return name;
  }
  const { ddMMyy, HHmm } = dateSlices(date);
  return time ? `${ddMMyy} ${HHmm}` : ddMMyy;
};

export const timeAgo = (time) => {
  const date = new Date(time || "");
  const { ddMMyy, HHmm } = dateSlices(date);
  const diff = (new Date().getTime() - date.getTime()) / 1000;
  const dayDiff = Math.floor(diff / 86400);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(dayDiff) || dayDiff < 0) return;

  if (dayDiff === 0) {
    // eslint-disable-next-line consistent-return
    return (
      (diff < 60 && "Just now") ||
      (diff < 120 && "1 minute ago") ||
      (diff < 3600 && `${Math.floor(diff / 60)} minutes ago`) ||
      (diff < 7200 && "1 hour ago") ||
      (diff >= 7200 && HHmm)
    );
  }
  if (dayDiff === 1) {
    // eslint-disable-next-line consistent-return
    return `Yesterday ${HHmm}`;
  }
  // eslint-disable-next-line consistent-return
  return `${ddMMyy} ${HHmm}`;
};

export const convertDate = (date, { time } = {}) => {
  const d = new Date(date);
  const { dd, MM, yyyy, HH, mm } = dateSlices(d);
  return time ? `${yyyy}-${MM}-${dd}T${HH}:${mm}` : `${yyyy}-${MM}-${dd}`;
};

export const months = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};
