import Swal from "sweetalert2";


var HOST_URL = "http://localhost:8020/";

export const global = {
  
  showLoading() {
    Swal.fire({
      title: 'loading ...',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
    Swal.showLoading();
  },

  hideLoading() {
    Swal.close();
  },
  requestToken : 'a745jasd8k45kasd95k43jads2g',
  authCheck: HOST_URL + 'auth/getuser'
}




