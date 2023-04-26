import axios from 'axios';
import { getRole, getAccessToken, getOwnerID } from '../auth/auth';

const url = 'http://localhost:8006/api';

const headers = async () => {
  return { Authorization: `${await getAccessToken()}` };
};
export const login = async (data) => {
  return await axios
    .post(`${url}/login`, data)
    .then(async (res) => {
      const token = {
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      };
      await localStorage.setItem('userToken', JSON.stringify(token));
      let role;
      await getRole().then((user) => {
        role = user;
      });
      return role;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addCategory = async (data) => {
  return await axios
    .post(`${url}/addCategory`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListCategory = async (data) => {
  return await axios
    .get(`${url}/listsCategory`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateCategory = async (data) => {
  return await axios
    .post(`${url}/updateCategory`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const deleteCategory = async (id) => {
  return await axios
    .delete(`${url}/category/${id}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const register = async (data) => {
  return await axios
    .post(`${url}/register`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListsProduct = async (category) => {
  return await axios
    .get(`${url}/listsProduct/${category}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addProduct = async (data) => {
  const formData = new FormData();
  for (let item of data.image) {
    formData.append('image', item.image);
  }

  formData.append('categoryID', data.categoryID);
  formData.append('name', data.name);
  formData.append('price', data.price);
  formData.append('code', data.code);
  formData.append('size', data.size);
  formData.append('sale', data.sale);
  formData.append('description', data.description);

  return await axios
    .post(`${url}/addProduct`, formData)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};


export const getListUser = async () => {
  return await axios
    .get(`${url}/listUser`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};



export const getListsProductCategory = async (category) => {
  return await axios
    .get(`${url}/listsProduct/${category}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListsProductType = async (category, type) => {
  return await axios
    .get(`${url}/listProductNewSale/${category}/${type}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getDetailsProduct = async (productID) => {
  return await axios
    .get(`${url}/details-product/${productID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const getProfile = async (ownerID) => {
  return await axios
    .get(`${url}/profile/${ownerID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};



export const changeProfile = async (data) => {
  return await axios
    .post(`${url}/profile`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const addToCart = async (data) => {
  return await axios
    .post(`${url}/cart/add`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListCart = async (ownerID) => {
  return await axios
    .get(`${url}/cart/list/${ownerID}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const removeToCart = async (id) => {
  return await axios
    .delete(`${url}/cart/delete/${id}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const addOrder = async (data) => {
  return await axios
    .post(`${url}/order/add`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListProductFilter = async (categoryID, min, max) => {
  return await axios
    .get(`${url}/listProductFilter/${categoryID}/${min}/${max}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const deleteProduct = async (id) => {
  return await axios
    .delete(`${url}/product/delete/${id}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const getListsContact = async () => {
  return await axios
    .get(`${url}/contact/lists`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const addContact = async (data) => {
  return await axios
    .post(`${url}/contact/add`, data)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};


export const searchProduct = async (q) => {
  return await axios
    .get(`${url}/product/search/${q}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};



export const orderHistory = async (q) => {
  return await axios
    .get(`${url}/order/history/${getOwnerID()}`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};

export const updateProduct = async (data) => {
  const formData = new FormData();

  for (let item of data.image) {
    if (item.image) {
      formData.append("image", item.image);
    } else {
      formData.append("image", JSON.stringify(item));
    }
  }
  formData.append('productID', data.productID);
  formData.append('name', data.name);
  formData.append('price', data.price);
  formData.append('code', data.code);
  formData.append('size', data.size);
  formData.append('sale', data.sale);
  formData.append('description', data.description);

  return await axios
    .post(`${url}/product/update`, formData, {
      headers: await headers(),
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response;
    });
};


export const getAllOrder = async () => {
  return await axios
    .get(`${url}/order/lists`)
    .then(async (res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response;
    });
};