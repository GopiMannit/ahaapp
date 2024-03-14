import axios from "axios";

const baseUrl = "http://localhost:8080/mannit"; //Replace the CommonService Backend url

const basEUrl = "http://localhost:8081/api"; //Replace the ChatBot Backend url

//In register-mannit user or admin are going to register
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const data = await response.json();
      return { success: false, errorData: data };
    }
  } catch (error) {
    console.error(
      "An error occurred while making the API request",
      error.message
    );
    throw error; // Re-throw the error for the caller to handle
  }
};

//In Login page user or admin can login with the proper credentials
export async function loginUser(username, password, objectId) {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        objectId,
      }),
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error };
    }
  } catch (error) {
    console.error("An error occurred while logging in", error.message);
    return { success: false, error: "Network error" };
  }
}

//In Patient Enquiry page user can able to fetch and see the data using the mobile number
export async function fetchDataByPhoneNumber(
  domain,
  subdomain,
  objectId,
  phoneNumber
) {
  try {
    const url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&filtercount=1&f1_field=phonenumber_S&f1_op=eq&f1_value=${phoneNumber}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//In Patient Enquiry page user can able to create the new data
export async function saveFormData(data, domain, subdomain, objectId, adminId) {
  try {
    console.log("adminid",  +adminId);
    const url = ` ${baseUrl}/eCreate?domain=${domain}&subdomain=${subdomain}&userId=${objectId}`;
    console.log(url);
    const response = await axios.post(url, data, adminId);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//In Patient Enquiry page user can able to update the existing data
export async function updateFormData(
  updatedData,
  userDomain,
  userSubDomain,
  userId,
  resourceId,
  userAdminId
) {
  try {
    const url = `${baseUrl}/eUpdate?domain=${userDomain}&subdomain=${userSubDomain}&userId=${userId}&resourceId=${resourceId}`;
    const response = await axios.put(url, updatedData, userAdminId);
    return { success: true, data: response.data };
  } catch (error) {
    throw error;
  }
}

//In Change Password page user can able to update their password
export const updatePassword = async (username, oldPassword, newPassword) => {
  const apiEndpoint = `${baseUrl}/resetpwd`;

  const requestBody = {
    username: username,
    password: oldPassword,
    new_password: newPassword,
  };

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      return { success: true, data: await response.json() };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData };
    }
  } catch (error) {
    console.error("An error occurred while updating password", error.message);
    return { success: false, error: "An error occurred. Please try again." };
  }
};

//In Chat bot report page user can able to see the data from the another api from whatsApp ChatBot
export async function getReportsByDate(date) {
  try {
    const response = await axios.get(`${basEUrl}/getbydate?date=${date}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

//Message count from the Chatbot
export const fetchDataByDate = async (date) => {
  try {
    const response = await axios.get(`${basEUrl}/allstatus?date=${date}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

//Export the message from the Chatbot
export const exportDataByDate = async (fromDate, toDate) => {
  try {
    const response = await axios.get(`${basEUrl}/allstatuslist?fromdate=${fromDate}&todate=${toDate}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

//In Add User page admin can able to create the new user it is only for admin use
// export const createUser = async ({
//   emailid,
//   clientname,
//   username,
//   password,
//   role,
//   domain,
//   subdomain,
//   adminId,
// }) => {
//   try {
//     const response = await fetch(`${baseUrl}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         emailid,
//         clientname,
//         username,
//         password,
//         role,
//         domain,
//         subdomain,
//         adminId,
//       }),
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("An error occurred while creating a user", error.message);
//     throw error;
//   }
// };

//In EnquiryReport using this we can able to fetch the data without the filter
export async function fetchDataWithoutFilter(
  objectId,
  domain,
  subdomain,
  formattedDate
) {
  try {
    const response = await fetch(
      `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&filtercount=1&f1_field=createDated_D&f1_op=eq&f1_value=${formattedDate}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.source.map((item) => JSON.parse(item));
  } catch (error) {
    console.error("Error fetching data without filter:", error);
    throw error;
  }
}

//In EnquiryReport using this we can able to fetch the data with the filter
export const fetchDataWithFilter = async (
  domain,
  subdomain,
  objectId,
  filterKey,
  filterValue,
  formattedDate
) => {
  try {
    let url;

    if (["finance", "treatment", "distance"].includes(filterKey)) {
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&filtercount=2&f1_field=${filterKey}_L&f1_op=eq&f1_value=${parseInt(filterValue,10)}&f2_field=createDated_D&f2_op=eq&f2_value=${formattedDate}`;
    } else if (filterKey === "name" || filterKey === "phonenumber" || filterKey === "expectedDate" || filterKey === "followUpDate") {
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&filtercount=1&f1_field=${filterKey}_S&f1_op=eq&f1_value=${filterValue}`;
    } else {
      // Construct default API URL for other filters
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&userId=${objectId}&filtercount=2&f1_field=${filterKey}_S&f1_op=eq&f1_value=${filterValue}&f2_field=createDated_D&f2_op=eq&f2_value=${formattedDate}`;
    }

    console.log(url);

    const response = await axios.get(url);

    // Assuming your API returns a response with data property
    return response.data;
  } catch (error) {
    console.error("Error fetching data with filter:", error);
    throw error;
  }
};

// Admin API: Fetch data without filter
export async function fetchAdminDataWithoutFilter( domain, subdomain, objectId, formattedDate) {
  try {
    const response = await fetch(
      `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&filtercount=2&f1_field=adminId_S&f1_op=eq&f1_value=${objectId}&f2_field=createDated_D&f2_op=eq&f2_value=${formattedDate}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData.source.map((item) => JSON.parse(item));
  } catch (error) {
    console.error("Error fetching admin data without filter:", error);
    throw error;
  }
}

// Admin API: Fetch data with filter
export const fetchAdminDataWithFilter = async (domain, subdomain, objectId, filterKey, filterValue, formattedDate) => {
  try {
    let url;

    if (["finance", "treatment", "distance"].includes(filterKey)) {
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&filtercount=3&f1_field=adminId_S&f1_op=eq&f1_value=${objectId}&f2_field=${filterKey}_L&f2_op=eq&f2_value=${parseInt(filterValue, 10)}&f3_field=createDated_D&f3_op=eq&f3_value=${formattedDate}`;
    } else if (filterKey === "name" || filterKey === "phonenumber" || filterKey === "expectedDate" || filterKey === "followUpDate") {
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&filtercount=2&f1_field=adminId_S&f1_op=eq&f1_value=${objectId}&f2_field=${filterKey}_S&f2_op=eq&f2_value=${filterValue}`;
    } else {
      // Construct default API URL for other filters
      url = `${baseUrl}/eSearch?domain=${domain}&subdomain=${subdomain}&filtercount=3&f1_field=adminId_S&f1_op=eq&f1_value=${objectId}&f2_field=${filterKey}_S&f2_op=eq&f2_value=${filterValue}&f3_field=createDated_D&f3_op=eq&f3_value=${formattedDate}`;
    }

    console.log(url);

    const response = await axios.get(url);

    // Assuming your API returns a response with data property
    return response.data;
  } catch (error) {
    console.error("Error fetching admin data with filter:", error);
    throw error;
  }
};
