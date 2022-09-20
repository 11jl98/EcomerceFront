import api from './axios'

class ServiceCustomer {
  async getCustomersForSelectBox(){
    const { data } = await api.get('/customers/combobox')
    return data
  }
}

export default new ServiceCustomer
