
export const environment = {
  production: false,
  baseUrl : 'http://localhost:3000/',

  routes: {
    getData:{ endpoint:'user/get-product', method:'GET'},
    postData: { endpoint:"admin/post-product", method:"POST"}
  }
};


