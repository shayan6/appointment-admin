
// ######################################################################
// Wizard Actions #######################################################
// ######################################################################
export const setConnector = (connector) => {
  return {
    type: 'SET_CONNECTOR',
    connector
  }
}

export const setExternalSystemConfigId = (externalSystemConfigId) => {
  return {
    type: 'SET_EXTERNALSYSTEM_ID',
    externalSystemConfigId
  }
}

// ######################################################################
// Turbo Log Actions ####################################################
// ######################################################################
export const setScriptId = (scriptId) => {
  return {
    type: 'SET_SCRIPTID',
    scriptId
  }
}

// ######################################################################
// Common Actions #######################################################
// ######################################################################
export const setMenu = (menu) => {
  return {
    type: 'SET_MENU',
    menu
  }
}

export const toggleLoader = () => {
  return {
    type: 'TOGGLE_LOADER'
  }
}

export const toggleCollapse = () => {
  return {
    type: 'TOGGLE_COLLAPSE'
  }
}

export const setPageLoader = (pageLoader) => {
  return {
    type: 'SET_PAGELOADER',
    pageLoader
  }
}

export const setSettings = (settings) => {
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: 'SET_SETTINGS',
    settings
  }
}


export const setDateformat = (dateFormat) => {
  localStorage.setItem("dateFormat", dateFormat);
  return {
    type: 'SET_DATEFORMAT',
    dateFormat
  }
}

export const setTimeformat = (timeFormat) => {
  localStorage.setItem("timeFormat", timeFormat);
  return {
    type: 'SET_TIMEFORMAT',
    timeFormat
  }
}
export const setStartDate = (startDate) => {
  localStorage.setItem("startDate", startDate);
  return {
    type: 'SET_STARTDATE',
    startDate
  }
}

export const setEndDate = (endDate) => {
  localStorage.setItem("endDate", endDate);
  return {
    type: 'SET_ENDDATE',
    endDate
  }
}

export const setExternalSystemId = (externalSystemId) => {
  localStorage.setItem("externalSystemId", +externalSystemId);
  return {
    type: 'SET_EXTERNALSYSTEMID',
    externalSystemId
  }
}

export const sethttpRequestData = (postData) => {
  return {
    type: 'SET_POSTDATA',
    postData
  }
}
// test
export const gethttpRequestData = (httpRequestData) => {
  return {
    type: 'GET_REQUESTED_DATA',
    httpRequestData
  }
}