import { axios } from '@bundled-es-modules/axios'

// Hidden data and other variables that Zoho web forms is sending
const hiddenFormData = {
  xnQsjsdp: '6a0445a9ff00e12d39b7c1ecac528f6b64acc9fe7ffe51d943558a76885d3d7c',
  zc_gad: '',
  xmIwtLD: '96951512c85ceb8ecd5cd63ce9bf9205cf7fea1033f905e746d8435c018e727e',
  actionType: 'TGVhZHM=',
  returnURL: 'https://beta.upgrade-hub.com',
  eo: 'c4408f450319003e0c12e54df63a8632',
  te: true,
  privacyTool: true
}

// Specific mapping of our form field names into Zoho fields for Leads module
const fieldsMap = {
  bootcamp: 'LEADCF26',
  option: 'LEADCF25',
  legal: 'privacyTool',
  organization: 'LEADCF32',
  role: 'LEADCF28',
  name: 'First Name',
  lname: 'Last Name',
  email: 'Email',
  tel: 'Phone'
}

function translate (object, map) {
  for (const name in object) {
    if (name in map) {
      object[map[name]] = object[name]
      delete object[name]
    }
  }
  return object
}

export const submitForm = async (formData) => {
  const formDataWithHiddenValues = { ...formData, ...hiddenFormData }
  const formDataWithMappedKeys = translate(formDataWithHiddenValues, fieldsMap)

  const request = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams(formDataWithMappedKeys).toString(),
    url: 'https://crm.zoho.eu/crm/WebToLeadForm'
  }

  try {
    await axios(request)
  } catch (error) {
    console.log(error)
  }
}
