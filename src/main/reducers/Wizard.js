const initialState = {
  // connector: { "name": "DHL Express", "type": "DHL", "version": "1.0.0", "library_files": [], "is_2x_connector": true, "endpoint": "https://express.api.dhl.com/mydhlapi/test", "classes": { "manager": "DHL", "netsuite_wrapper": "DHL", "external_system_wrapper": "DHL" }, "flows": [{ "name": "Export Item Fulfillments", "short_name": "exp_item_ful", "action": "ExportItemFulfillment", "permissions": ["EXPORT_FULFILLMENTS_TO_EXTERNAL_SYSTEM"], "selective": { "interface_function": "exportItemFulfillments" }, "ondemand": { "interface_function": "exportItemFulfillments" }, "scheduled": { "interface_function": "exportItemFulfillments" }, "consumer": { "interface_function": "exportItemFulfillmentsFromSyncQueue" } }], "extended_modules": [{ "type": "Manager", "file": "f3_dhl_express_manager_ss2.js" }, { "type": "NetsuiteWrapper", "file": "f3_dhl_express_netsuite_wrapper_ss2.js" }, { "type": "ExternalSystemWrapper", "file": "f3_dhl_express_wrapper_ss2.js" }], "configuration": { "itemfulfillment": { "export": { "noOfDays": 1, "fulfillment_status": ["ItemShip:B"], "mark_shipped": false, "account_number": "417877716", "dimension_unit_conversions": { "in": 1 }, "weight_unit_conversions": { "lbs": 1 }, "item_unit_conversions": { "Ea": "KG" } } } } },
  // externalSystemConfigId: 3
  connector: null,
  externalSystemConfigId: null
};

export const wizard = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CONNECTOR':
      return { ...state, connector: { ...action.connector } }
    case 'SET_EXTERNALSYSTEM_ID':
      return { ...state, externalSystemConfigId: action.externalSystemConfigId }
    default:
      return state
  }
}
