import httpPost from "../requests/httpPost";

export async function getAppointments(baseUrl, params) {
  try {
    const url = `${baseUrl}/getAppointments`;
    return httpPost(url, params);
  } catch (err) {
    console.error(err);
  }
}
