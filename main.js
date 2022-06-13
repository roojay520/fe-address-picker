import './src/style.css'
import { createAddressPicker } from './src/addressPicker.js'

createAddressPicker('#address-picker', {
  province: '江苏省',
  city: '南京市',
  district: '江宁区'
})
