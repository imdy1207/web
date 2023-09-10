const API_REQUEST_TIME = 500;

export const placeOrder = (formData) =>
  new Promise((resolve, reject) => {
    const { email, address } = formData;

    setTimeout(() => {
      if (!email || !address || email.length < 1 || address.length < 1) {
        return reject(new Error("email, address 정보를 정확히 입력해주세요."));
      }

      resolve({ email, address });
    }, API_REQUEST_TIME);
  });
