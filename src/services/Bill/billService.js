class BillService {
  validateBillErro(error, toast) {
    const erro = error.response.data.erros;

    for (var i = 0; i < erro.length; i++) {
      toast.open({
        message: Object.values(erro[i]).toString().replace("id", ""),
        type: "warning",
      });
    }
  }

  validateBillMessage(error, toast) {
    const message = error.response.data.message;

    toast.open({
      message: message,
      type: "warning",
    });
  }
}

export default new BillService();
