class toastAlertErros {
  validateErro(error, toast) {
    const erro = error.response.data.erros;

    for (var i = 0; i < erro.length; i++) {
      toast.open({
        message: Object.values(erro[i]).toString().replace("id", ""),
        type: "error",
      });
    }
  }

  validateMessage(error, toast) {
    const message = error.response.data.message;

    toast.open({
      message: message,
      type: "error",
    });
  }

  validateErroDoesNotContainFor(error, toast) {
    const erro = error.response.data.erros;

    toast.open({
      message: erro,
      type: "error",
    });
  }
}

export default new toastAlertErros();
