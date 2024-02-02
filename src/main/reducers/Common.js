import moment from 'moment';
const dateFormat = localStorage.getItem('dateFormat') || "DD MMM, YYYY";
const timeFormat = localStorage.getItem('timeFormat') || "hh:mm:ss";
const initialState = {
  menu: [],
  loading: true,
  pageLoader: true,
  collapsed: false,
  url: process.env.NODE_ENV === "development" ?
    "http://localhost/appointments/Apis/Home" :
    "http://localhost/appointments/Apis/Home",
  postData: {
    page: 0,
    limit: 50,
  },
  data: {}, // used for send and get request
  startDate: localStorage.getItem('startDate') || moment().format(`${dateFormat} ${timeFormat}`),
  endDate: localStorage.getItem('endDate') || moment().subtract(29, "days").format(`${dateFormat} ${timeFormat}`),
  dateFormat,
  timeFormat,
  settings: localStorage.getItem('settings'),
  externalSystemId: localStorage.getItem('externalSystemId') || 1
};

try {
  let defaultSetting = {
    theme: 'light',
    color: {
      colorBlack: '#001529',
      colorWhite: '#f0f2f5',
      colorPrimary: '#1890ff',
      colorWarning: '#fc9258',
      colorSuccess: '#7adbaa',
      colorDanger: '#ff4d57',
      colorPurple: '#673ab7',
      colorPink: '#E91E63',
      colorYellow: '#ffeb3b',
      colorSecondary: '#3b3b3b',
    }
  };
  initialState.settings = initialState.settings ? JSON.parse(initialState.settings) : defaultSetting;
} catch (e) {
  console.log(e);
}

export const common = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MENU':
      return { ...state, menu: action.menu }
    case 'TOGGLE_LOADER':
      return { ...state, loading: !state.loading }
    case 'TOGGLE_COLLAPSE':
      return { ...state, collapsed: !state.collapsed }
    case 'SET_POSTDATA':
      return { ...state, postData: { ...action.postData } }
    case 'SET_PAGELOADER':
      return { ...state, pageLoader: action.pageLoader }
    case 'SET_DATEFORMAT':
      return { ...state, dateFormat: action.dateFormat }
    case 'SET_TIMEFORMAT':
      return { ...state, timeFormat: action.timeFormat }
    case 'SET_STARTDATE':
      return { ...state, startDate: action.startDate }
    case 'SET_ENDDATE':
      return { ...state, endDate: action.endDate }
    case 'SET_SETTINGS':
      return { ...state, settings: action.settings }
    case 'SET_EXTERNALSYSTEMID':
      return { ...state, externalSystemId: action.externalSystemId }
    // requred for redux saga ###################################
    case 'GET_REQUESTED_DATA':
      return { ...state, pageLoader: true }
    case 'GET_REQUESTED_SUCCESS':
      return { ...state, pageLoader: false, data: action.data }
    case 'GET_REQUESTED_FAILURE':
      return { ...state, pageLoader: false, data: action.data }
    default:
      return state
  }
}
