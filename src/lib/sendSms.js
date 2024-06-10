const smsApiKey = import.meta.env.VITE_SMS_API_KEY;
const smsSenderId = import.meta.env.VITE_SMS_SENDER_ID;

export const sendSms = async (mobileNo, message) => {
  const url = `http://bulksmsbd.net/api/smsapi?api_key=${smsApiKey}&type=text&number=${mobileNo}&senderid=${smsSenderId}&message=${message}`;

  const response = await fetch(url);

  const result = await response.json();

  return result;
};
