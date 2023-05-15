import httpPost from "../requests/httpPost";

export async function getPanelSettings(baseUrl, params) {
  try {
    const url = `${baseUrl}/getPanelSettings`;
    return httpPost(url, params);
  } catch (err) {
    console.error(err);
  }
}

export async function saveFrontEndPanels(baseUrl, params) {
    try {
      const url = `${baseUrl}/saveFrontEndPanels`;
      return httpPost(url, params);
    } catch (err) {
      console.error(err);
    }
  }
  
