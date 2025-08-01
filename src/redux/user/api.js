export const apiLoginUser = async (params) => {
//   let body = new FormData();
//   body.append("username", params.username);
//   body.append("password", params.password);
//   body.append("grant_type", "password");

//   const authorizationString = `Basic ${Base64.encode(
//     `${Configs.client.clientId}:${Configs.client.clientSecret}`
//   )}`;

//   let newUrl = `${Configs.baseUrl}${routesApi.user.login}`;

//   try {
//     let res = await axios.post(newUrl, body, {
//       headers: {
//         Authorization: authorizationString,
//         "Content-Type": "multipart/form-data",
//       }
//     });
//     // !Configs.isProduction && console.log("===apiLoginUser===", res)
//     return res;
//   } catch (error) {
//     // !Configs.isProduction && console.log("===apiLoginUser===", error)
//     return null
//   }
};