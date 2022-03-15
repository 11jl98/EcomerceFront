class BillService {

  validateBill(error, toast) {
    const message = error.response.data.message;
    const message2 = error.response.data.erros
    if (error.response.data.message !== "Validation failed") {
      return toast.open({
        message: message,
        type: "warning",
      })
    } else {
      return toast.open({
        message: message2.replace('id', ''),
        type: "warning",
      })
    }
  }
}



export default new BillService();
