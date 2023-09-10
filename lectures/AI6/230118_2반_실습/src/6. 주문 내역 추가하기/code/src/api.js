const API_REQUEST_TIME = 500;

const orders = [];

const db = {
  saveOrder: (email, address) => {
    orders.push({ email, address, date: new Date().toLocaleString("kr") });
  },

  getAll: () => orders,
};

export const placeOrder = (formData) =>
  new Promise((resolve, reject) => {
    const { email, address } = formData;

    setTimeout(() => {
      if (!email || !address || email.length < 1 || address.length < 1) {
        return reject(new Error("email, address 정보를 정확히 입력해주세요."));
      }

      db.saveOrder(email, address);
      resolve({ email, address });
    }, API_REQUEST_TIME);
  });

export const getAllOrders = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(db.getAll());
    }, API_REQUEST_TIME);
  });
