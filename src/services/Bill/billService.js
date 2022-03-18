class BillService {

  validateBill(error, toast) {
    const message = error.response.data.erros
    
      for(var i = 0; i < message.length; i++){
        toast.open({
          message:  Object.values(message[i]).toString().replace("id", ""),
          type: "warning",
        })
    
    }
  }
}



export default new BillService();
