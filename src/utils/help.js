export function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) {
    return "";
  }

  phoneNumber = phoneNumber.replace(/\D/g, "");
  if (phoneNumber.length < 10) {
    return "";
  }

  const structure = ["(", ") ", "-", "-"];

  const pattern = [3, 3, 2, 2];

  let formattedNumber = "";
  let currentIndex = 0;

  for (let i = 0; i < pattern.length; i++) {
    formattedNumber +=
      structure[i] + phoneNumber.substr(currentIndex, pattern[i]);
    currentIndex += pattern[i];
  }

  return formattedNumber.startsWith("(")
    ? formattedNumber
    : formattedNumber.slice(2);
}

export function hideLastTwoDigits(formattedNumber) {
  // Replace the last two digits with bullets
  return formattedNumber.slice(0, -2) + "••";
}

export function clearFormatPhoneNumber(phoneNumber) {
  // if phoneNumber null & undefined
  if (phoneNumber == null) {
    return "";
  }

  if (phoneNumber.trim() === "") {
    return "";
  }

  let cleaned = phoneNumber.replace(/[^0-9+]/g, "");

  if (cleaned[0] !== "+") {
    cleaned = "%2B90" + cleaned;
  }

  return cleaned;
}
