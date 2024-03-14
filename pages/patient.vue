<template>
  <Header class="Header" />
  <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
  <div class="medilife-book-an-appoinment-area">
    <div class="container">
      <div class="col-12 col-md-4 d-flex justify-content-center">
        <div class="form-group">
          <input type="text" class="text border-top-0 border-right-0 border-left-0" name="number" id="number"
            placeholder="Mobile Number" @keydown.tab="searchIconClicked" v-model="data.phonenumber"
            @input="limitPhoneNumber" @blur="searchIconClicked">
          <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"
            @click="searchIconClicked">
            <path
              d="M5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9Z"
              stroke="#BAACAC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />

            <path d="M10.0002 9.99995L7.8252 7.82495" stroke="#BAACAC" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div v-if="searchError" class="error-message">{{ searchError }}</div>
      <div class="appointment-form-content">
        <div class="row no-gutters align-items-center">
          <div class="col-12 col-lg-9">
            <div class="medilife-appointment-form">
              <form action="#" method="post">
                <div class="row align-items-end">
                  <div class="col-12 col-md-4">
                    <div class="form-group">
                      <input type="text" class="form-control border-top-0 border-right-0 border-left-0 color-red"
                        name="name" id="name" placeholder="Name" v-model="data.name" required>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="age" id="age"
                        v-model="data.age">
                        <option value="" disabled selected hidden>Age</option>
                        <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
                      </select>

                    </div>
                  </div>
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="gender" id="gender"
                        v-model="data.gender">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                  <!-- <div class="col-12 col-md-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="date" id="date"
                                                    placeholder="Date">
                                            </div>
                                        </div> -->
                  <!-- <div class="col-12 col-md-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="time" id="time"
                                                    placeholder="Time">
                                            </div>
                                        </div> -->
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control border-top-0 border-right-0 border-left-0" name="location"
                        id="location" placeholder="Location" v-model="data.location">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="complaints"
                        id="complaints" v-model="data.paintype">
                        <option value="" disabled selected hidden>Please Select One Complaint</option>
                        <option v-for="painType in painTypes" :key="painType" :value="painType">{{ painType }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-12">
                    <div class="form-group mb-0">
                      <textarea name="remarks" class="form-control mb-0 border-top-0 border-right-0 border-left-0"
                        id="remarks" cols="70" rows="10" placeholder="Remarks" v-model="data.remarks"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div @click="increaseCount" class="add-button-container">
        <button class="add-icon" @click="toggleAdditionalInfo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2V22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 11H22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="medilife-book-an-appoinment-area" v-if="showAdditionalInfo">
    <div class="container">
      <div class="appointment-form-content">
        <div class="row no-gutters align-items-center">
          <div class="col-12 col-lg-9">
            <div class="medilife-appointment-form">
              <form action="#" method="post">
                <div class="row align-items-end">
                  <div class="col-12 col-md-4">
                    <div class="form-group">
                      <input type="text" class="form-control border-top-0 border-right-0 border-left-0" name="name"
                        id="name" placeholder="Name" v-model="data.name_0">
                    </div>
                  </div>
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="age" id="age"
                        v-model="data.age_0">
                        <option value="" disabled selected hidden>Age</option>
                        <option v-for="i in 100" :key="i" :value="i">{{ i }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="gender" id="gender"
                        v-model="data.gender_0">
                        <option value="" disabled selected hidden>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control border-top-0 border-right-0 border-left-0" name="location"
                        id="location" placeholder="Location" v-model="datalocation_0">
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <select class="form-control border-top-0 border-right-0 border-left-0" id="complaints"
                        v-model="data.paintype_0">
                        <option value="" disabled selected hidden>Please Select one Complaint</option>
                        <option v-for="painType in painTypes" :key="painType" :value="painType">{{
    painType }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-12">
                    <div class="form-group mb-0">
                      <textarea name="remarks" class="form-control mb-0 border-top-0 border-right-0 border-left-0"
                        id="remarks" cols="70" rows="10" placeholder="Remarks" v-model="data.remarks_0"></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="medilife-book-an-appoinment-area">
    <div class="container">
      <div class="col-12 col-md-2 border-top-0 border-right-0 border-left-0">
        <div class="form-group border-top-0 border-right-0 border-left-0">
          <select class="form-control border-top-0 border-right-0 border-left-0" name="scale" id="scale"
            v-model="data.turnupscale">
            <option value="" disabled selected hidden>Turn Up Scale</option>
            <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
          </select>
        </div>
      </div>
      <div class="appointment-form-content">
        <div class="row no-gutters align-items-center">
          <div class="col-12 col-lg-9">
            <div class="medilife-appointment-form">
              <form action="#" method="post">
                <div class="row">
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <select class="form-control border-top-0 border-right-0 border-left-0" name="doctor" id="doctor"
                        v-model="data.doctorSelection">
                        <option value="" disabled selected hidden>Doctor Selection</option>
                        <option value="duty">Duty Doctor</option>
                        <option value="chief">Chief Doctor</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                    <div class="form-group border-top-0 border-right-0 border-left-0">
                      <label class="form-check-label col-4">Query</label>
                      <div class="form-check">
                        <label class="form-check-label col-4">Finance</label>
                        <input class="form-check-input col-5" type="checkbox" name="finance"
                          v-model="data.financeCheckbox" @change="updateFinance">
                        <select class="form-control border-top-0 border-right-0 border-left-0" id="scale"
                          v-model="data.finance" :disabled="!data.financeCheckbox">
                          <option value="" disabled selected hidden>Scale</option>
                          <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                        </select>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label col-4">Distance</label>
                        <input class="form-check-input col-5" type="checkbox" name="distance"
                          v-model="data.distanceCheckbox" @change="updateDistance">
                        <select class="form-control border-top-0 border-right-0 border-left-0" id="scale"
                          v-model="data.distance" :disabled="!data.distanceCheckbox">
                          <option value="" disabled selected hidden>Scale</option>
                          <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                        </select>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label col-4">Treatment</label>
                        <input class="form-check-input col-5" type="checkbox" name="treatment"
                          v-model="data.treatmentCheckbox" @change="updateTreatment">
                        <select class="form-control border-top-0 border-right-0 border-left-0" id="scale"
                          v-model="data.treatment" :disabled="!data.treatmentCheckbox">
                          <option value="" disabled selected hidden>Scale</option>
                          <option v-for="i in 10" :key="i" :value="i">{{ i }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-12 col-md-4">
                                        <div class="form-group">
                                            <input type="text"
                                                class="form-control border-top-0 border-right-0 border-left-0"
                                                name="name" id="name" placeholder="Name">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                                        <div class="form-group border-top-0 border-right-0 border-left-0">
                                            <select class="form-control border-top-0 border-right-0 border-left-0" id="doctors">
                                                <option value="">Age</option>
                                                <option v-for="i in 100" :key="i">{{ i }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4 border-top-0 border-right-0 border-left-0">
                                        <div class="form-group border-top-0 border-right-0 border-left-0">
                                            <select class="form-control border-top-0 border-right-0 border-left-0" id="doctors">
                                                <option value="">Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div> -->
                  <!-- <div class="col-12 col-md-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="date" id="date"
                                                    placeholder="Date">
                                            </div>
                                        </div> -->
                  <!-- <div class="col-12 col-md-2">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="time" id="time"
                                                    placeholder="Time">
                                            </div>
                                        </div> -->
                  <!-- <div class="col-12 col-md-4">
                                        <div class="form-group">
                                            <input type="email"
                                                class="form-control border-top-0 border-right-0 border-left-0"
                                                name="email" id="email" placeholder="Location">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="form-group">
                                            <select class="form-control border-top-0 border-right-0 border-left-0" id="speciality">
                                                <option value="">Please Select One</option>
                                                <option>Knee</option>
                                                <option>back</option>
                                                <option>neck</option>
                                                <option>shoulder</option>
                                                <option>tailbone</option>
                                                <option>hip</option>
                                                <option>leg</option>
                                                <option>hand</option>
                                                <option>heel</option>
                                                <option>migraine</option>
                                                <option>rheumatoid arthritis</option>
                                            </select>
                                        </div>
                                    </div> -->
                  <div class="col-12 col-md-4">
                    <div class="form-group">
                      <textarea name="remarks" class="form-control mb-0 border-top-0 border-right-0 border-left-0"
                        id="remarks" cols="70" rows="10" placeholder="Remarks" v-model="data.remarksDoc"></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="date" class="form-control border-top-0 border-right-0 border-left-0"
                        name="expectedDate" id="expectedDate" placeholder="Expected Date" v-model="data.expectedDate"
                        @input="validateDate('expectedDate')" :min="getMinDate()">
                      <div v-if="dateWarnings.expectedDate" class="warning-message">{{ dateWarnings.expectedDate }}
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group">
                      <input type="date" class="form-control border-top-0 border-right-0 border-left-0"
                        name="followUpDate" id="followUpDate" placeholder="followUpDate" v-model="data.followUpDate"
                        @input="validateDate('followUpDate')" :min="getMinDate()">
                      <div v-if="dateWarnings.followUpDate" class="warning-message">{{ dateWarnings.followUpDate }}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="btn medilife-appoint-btn ml-30" @click="performAction">{{ buttonText }}</div>
</template>

<script>
import '~/components/Header.vue'
import formData from '@/properties/formData.js';
import { data } from '@/properties/data.js';
// import { data_loop } from '@/properties/data.js';
import { fetchDataByPhoneNumber, saveFormData, updateFormData } from '@/api/api.js';
import { DateTime } from 'luxon';
export default {
  data() {
    return {
      buttonText: 'Submit',
      searchQuery: '',
      showscales: false,
      financeCheckbox: false,
      distanceCheckbox: false,
      treatmentCheckbox: false,
      ...formData,
      count: 0,
      data: { ...data },
      // data_loop: { ...data_loop },
      searchError: '',
      searchMessage: '',
      showAdditionalInfo: false,
      user: {
        name: "",
        objectId: '',
        domain: '',
        subdomain: '',
        adminId: '',
        loggedInUser: {},
      },
      dateWarnings: {
        expectedDate: '',
        followUpDate: '',
      }
    };
  },
  computed: {
    submitButtonText() {
      // Check if formData is not empty
      if (this.formData && Object.keys(this.formData).length > 0) {
        return 'Update';
      } else {
        return 'Submit';
      }
    },
  },
  mounted() {
    // Check if the loggedInUser key is present in session storage
    const storedUser = sessionStorage.getItem("loggedInUser");

    if (storedUser) {
      // Parse the source JSON string
      const sourceData = JSON.parse(JSON.parse(storedUser).source);

      console.log('Source Data:', sourceData);

      // Access the 'username' property and set it in the component data
      this.user.loggedInUser = {
        name: sourceData.username,
        objectId: sourceData._id.$oid,
        domain: sourceData.domain,
        subdomain: sourceData.subdomain,
        adminId: sourceData.adminId,
      };

      console.log("Logged-in user data:", this.user.loggedInUser);
    } else {
      console.log("No user data found in session storage.");
    }
  },
  methods: {

    limitPhoneNumber() {
      // Remove any non-digit characters from the phone number
      this.data.phonenumber = this.data.phonenumber.replace(/\D/g, "");

      // Limit the phone number to 10 digits
      if (this.data.phonenumber.length > 10) {
        // If more than 10 digits, truncate the phone number to 10 digits
        this.data.phonenumber = this.data.phonenumber.substring(0, 10);
      }
    },

    // getCurrentDate() {
    //   const currentDate = new Date().toISOString().split('T')[0];
    //   return currentDate;
    // },
    formatDate(date) {
      if (!date) return '';
      const parsedDate = new Date(date);
      // Check if the date is valid
      if (isNaN(parsedDate)) {
        return '';
      }
      const day = parsedDate.getDate().toString().padStart(2, '0');
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = parsedDate.getFullYear();
      return `${day}-${month}-${year}`;
    },

    increaseCount() {
      this.count++;
    },
    hasValuesInAdditionalInfoFields() {
      return (
        this.data.name_0 ||
        this.data.age_0 ||
        this.data.gender_0 ||
        this.data.location_0 ||
        this.data.paintype_0 ||
        this.data.remarks_0
      );
    },
    // validateDate(datatype) {
    //   const currentDate = new Date().toISOString().split('T')[0];
    //   const selectedDate = this.data[datatype];

    //   if (selectedDate && selectedDate < currentDate) {
    //     this.dateWarnings[datatype] = 'Date should be in future';
    //   } else {
    //     this.dateWarnings[datatype] = '';
    //   }
    // },
    validateDate(field) {
      const currentDate = new Date();
      const selectedDate = new Date(this.data[field]);
      const minDate = this.getMinDate();

      if (selectedDate < minDate) {
        this.dateWarnings[field] = 'Date cannot be before ' + minDate.toLocaleDateString();
      } else {
        this.dateWarnings[field] = '';
      }

      if (field === 'followUpDate' && selectedDate >= new Date(this.data.expectedDate)) {
        this.dateWarnings.followUpDate = 'Follow-up date must be before expected date.';
      }

      if (field === 'expectedDate' && selectedDate <= new Date(this.data.followUpDate)) {
        this.dateWarnings.expectedDate = 'Expected date must be after follow-up date.';
      }
    },

    getMinDate() {
      const currentDate = new Date();
      return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    },

    updateFinance() {
      if (this.data.financeCheckbox) {
        this.data.finance = '';

      } else {

      }
    },
    updateDistance() {
      if (this.data.distanceCheckbox) {
        this.data.distance = '';

      } else {

      }
    },
    updateTreatment() {
      if (this.data.treatmentCheckbox) {
        this.data.treatment = '';

      } else {

      }
    },
    toggleAdditionalInfo() {
      this.showAdditionalInfo = !this.showAdditionalInfo;
      if (this.showAdditionalInfo) {
        this.data_loop.name_0 = '';
      }
    },
    getMinDate() {
      return new Date().toISOString().split('T')[0];
    },

    async searchIconClicked() {
      const phoneNumberRegex = /^\d{10}$/;
      if (!phoneNumberRegex.test(this.data.phonenumber)) {
        this.searchError = 'Please Enter Phone Number for Search';
        setTimeout(() => {
          this.searchError = '';
        }, 4000);
        return;
      }
      try {
        const objectId = this.user.loggedInUser.objectId;
        const phoneNumber = parseInt(this.data.phonenumber);
        const domain = this.user.loggedInUser.domain;
        const subdomain = this.user.loggedInUser.subdomain;
        const response = await fetchDataByPhoneNumber(domain, subdomain, objectId, phoneNumber);

        if (response && response.source && response.source.length > 0) {
          // Existing data is found
          const dataFromSource = response.source[0];
          this.formData = typeof dataFromSource === 'string' ? JSON.parse(dataFromSource) : dataFromSource;
          // this.formatDates();

          const formatDateTo = (dateString) => {
            const [day, month, year] = dateString.split('-');
            return `${year}-${month}-${day}`;
          };

          // Store the ObjectId and resourceId in sessionStorage
          sessionStorage.setItem('objectId', this.formData.userId?.$oid || '');
          sessionStorage.setItem('resourceId', this.formData._id?.$oid || '');
          sessionStorage.setItem('userDomain', this.formData.domain || '');
          sessionStorage.setItem('userSubDomain', this.formData.subdomain || '');
          // sessionStorage.setItem('userAdminId',this.formatData.adminId || '');

          // Update the form fields with the fetched data
          this.data = {
            ...this.data,
            phonenumber: this.formData.phonenumber || '',
            name: this.formData.name || '',
            age: this.formData.age || '',
            gender: this.formData.gender || '',
            location: this.formData.location || '',
            paintype: this.formData.paintype || '',
            remarks: this.formData.remarks || '',
            turnupscale: this.formData.turnupscale || '',
            doctorSelection: this.formData.doctorSelection || '',
            finance: this.formData.finance || '',
            distance: this.formData.distance || '',
            treatment: this.formData.treatment || '',
            remarksDoc: this.formData.remarksDoc || '',
            expectedDate: formatDateTo(this.formData.expectedDate) || '',
            followUpDate: formatDateTo(this.formData.followUpDate) || '',
            name_0: this.formData.name_0 || '',
            age_0: this.formData.age_0 || '',
            gender_0: this.formData.gender_0 || '',
            location_0: this.formData.location_0 || '',
            paintype_0: this.formData.paintype_0 || '',
            remarks_0: this.formData.remarks_0 || '',
            adminId: this.formData.adminId || '',
          };

          console.log('Expected Date:', this.formData.expectedDate);
          console.log('Follow-Up Date:', this.formData.followUpDate);
          this.data.financeCheckbox = true;
          this.data.distanceCheckbox = true;
          this.data.treatmentCheckbox = true;

          // Reset searchError
          this.searchError = '';

          // Update the button text and placeholder dynamically
          this.updateButtonAndPlaceholder();

          // Check if additional info box should be shown
          this.showAdditionalInfo = this.hasValuesInAdditionalInfoFields();
        } else {
          // No data found, reset form fields
          if (!this.data.phonenumber) {
            // No data found, reset form fields
            this.data = { ...data }; // Reset form fields to initial state
          } else {
            this.data = { ...data, phonenumber: this.data.phonenumber }; // Retain the entered phonenumber
          }
          this.formData = {}; // Reset formData
          // Update the button text and placeholder dynamically
          this.updateButtonAndPlaceholder();

          // Hide additional info box when no data is found
          this.showAdditionalInfo = false;

          // Set the searchError with a custom message
          this.searchError = "Data not available for the Provided Mobile Number";
          setTimeout(() => {
            this.searchError = "";
          }, 4000);
        }
      } catch (error) {
        // Log the error for debugging purposes
        console.error('Error fetching data:', error);
        // Set the searchError with a custom message
        this.searchError = 'No Data Found ';

      }
    },
    updateButtonAndPlaceholder() {
      // If data is fetched, update the button text and placeholder
      if (this.formData && Object.keys(this.formData).length > 0) {
        this.buttonText = 'Update';
        // Assuming you have a placeholder element
        const phoneNumberInput = this.$refs.phoneNumberInput;

        if (phoneNumberInput) {
          phoneNumberInput.placeholder = this.formData.phonenumber || 'Search...';
        }
      } else {
        // If no data is fetched, reset the button text and placeholder
        this.buttonText = 'Submit';
        // Assuming you have a placeholder element
        const phoneNumberInput = this.$refs.phoneNumberInput;

        if (phoneNumberInput) {
          phoneNumberInput.placeholder = 'Search...';
        }
      }
    },
    // Helper function to show a message to the user
    showMessageToUser(message) {
      // Implement your logic to display the message to the user
      console.log(message);
      // For example, you might set a property in your component to show a notification or update the UI
      // this.showMessage = message;
    },
    async submitForm() {
      try {

        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumberRegex.test(this.data.phonenumber)) {
          this.searchError = 'Please fill the Mobile Number';
          setTimeout(() => {
            this.searchError = '';
          }, 4000);
          return;
        }

        // Check if the name and complaint fields are filled
        if (!this.data.name || !this.data.paintype) {
          this.searchError = 'Please fill the Name and Complaint Fields.';
          setTimeout(() => {
            this.searchError = "";
          }, 4000);
          return;
        }


        if (this.data.expectedDate && !isNaN(Date.parse(this.data.expectedDate))) {
          this.data.expectedDate = this.formatDate(this.data.expectedDate);
        }

        if (this.data.followUpDate && !isNaN(Date.parse(this.data.followUpDate))) {
          this.data.followUpDate = this.formatDate(this.data.followUpDate);
        }
        if (!this.data.phonenumber) {
          this.searchError = "Please Enter the Mobile Number";
          setTimeout(() => {
            this.searchError = "";
          }, 4000);
          return;
        }
        const objectId = this.user.loggedInUser.objectId;
        const domain = this.user.loggedInUser.domain;
        const subdomain = this.user.loggedInUser.subdomain;
        const adminId = this.user.loggedInUser.adminId;
        this.data.adminId = adminId;
        // console.log(adminid,adminId);

        if (this.data.expectedDate && !isNaN(Date.parse(this.data.expectedDate))) {
          this.data.expectedDate = this.formatDate(this.data.expectedDate);
        }

        if (this.data.followUpDate && !isNaN(Date.parse(this.data.followUpDate))) {
          this.data.followUpDate = this.formatDate(this.data.followUpDate);
        }
        this.data.createDated = {
          "$date": DateTime.utc().toFormat('yyyy-MM-dd'),
        };

        console.log('Data before sending:', this.data); // Log the data before sending

        // Save new data
        const saveResponse = await saveFormData(this.data, domain, subdomain, objectId, adminId); // Replace with your actual save method
        this.successMessage = 'Form Submitted Successfully..!';
        setTimeout(() => {
          this.successMessage = '';
        }, 4000);
        console.log('Data saved:', saveResponse);

        // Reset formData to its initial state
        this.data = { ...data };
        console.log('Reset data:', this.data);
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors as needed
      }
    },
    async updateForm() {
      try {
        const phoneNumberRegex = /^\d{10}$/;
        if (!phoneNumberRegex.test(this.data.phonenumber)) {
          this.searchError = 'Please enter a valid 10-digit phone number.';
          setTimeout(() => {
            this.searchError = '';
          }, 4000);
          return;
        }
        // Retrieve ObjectId and resourceId from sessionStorage
        const objectId = sessionStorage.getItem('objectId');
        console.log(objectId);
        const resourceId = sessionStorage.getItem('resourceId');
        console.log(resourceId);
        const userDomain = sessionStorage.getItem('userDomain');
        console.log(userDomain);
        const userSubDomain = sessionStorage.getItem('userSubDomain');
        console.log(userSubDomain);
        const userAdminId = sessionStorage.getItem('userAdminId');
        console.log(userAdminId);
        // const subdomain = sessionStorage.getItem('subdomain');

        // Check if the retrieved ObjectId and resourceId are valid
        if (!objectId || !resourceId) {
          console.error('Cannot update without valid ObjectId or resourceId.'); e
          return;
        }

        if (this.data.expectedDate && !isNaN(Date.parse(this.data.expectedDate))) {
          this.data.expectedDate = this.formatDate(this.data.expectedDate);
        }

        if (this.data.followUpDate && !isNaN(Date.parse(this.data.followUpDate))) {
          this.data.followUpDate = this.formatDate(this.data.followUpDate);
        }

        if (this.formData._id) {
          // Set the current date before sending the form data
          this.data.createDated = {
            "$date": DateTime.utc().toFormat('yyyy-MM-dd'),
          };

          console.log('Data before updating:', this.data);

          // Update existing data only if there is an _id
          const updateResponse = await updateFormData(this.data, userDomain, userSubDomain, objectId, resourceId, userAdminId);

          // Check if the update was successful before resetting the data
          if (updateResponse && updateResponse.success) {

            this.successMessage = 'Form updated successfully'
            // Reset formData to its initial state
            this.data = { ...data };
            console.log('Data updated and reset:', this.data);
            setTimeout(() => {
              this.successMessage = "";
            }, 4000);


            this.showAdditionalInfo = false;

          } else {
            // Handle update failure, show an error message, etc.
            console.error('Error updating form:', updateResponse);
          }
        } else {
          // If _id is not present, log an error or handle it appropriately
          console.error('Cannot update without a valid _id.');
        }
        setTimeout(() => {
          this.successMessage = "";
        }, 4000);
      } catch (error) {
        console.error('Error updating form:', error);
        // Handle errors as needed
      }
    },
    performAction() {
      // Check if data has been fetched
      if (this.buttonText === 'Update') {
        // Data fetched, perform update
        this.updateForm();
      } else {
        // Data not fetched, perform submit
        this.submitForm();
      }
    },
  },
};
</script>

<style scoped>
@import '@/styles/style.css';

#number {
  background: url('assets/mobilenumber.svg') no-repeat;
  background-size: 15px;
  background-position: 10px;
  padding-left: 30px;
}

#name {
  background: url('assets/name.svg') no-repeat;
  background-size: 15px;
  background-position: 10px;
  padding-left: 34px;
}

#age {
  background: url('assets/age.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 30px;
}

#gender {
  background: url('assets/gender.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 30px;
}

#location {
  background: url('assets/location.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 34px;
}

#complaints {
  background: url('assets/pain.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 30px;
}

#scale {
  background: url('assets/scale.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 30px;
}

#doctor {
  background: url('assets/doctor.svg') no-repeat;
  background-size: 15px;
  /* Adjust the size as needed */
  background-position: 10px;
  /* Adjust the vertical position */
  padding-left: 30px;
}

#remarks {
  background: url('assets/remark.svg') no-repeat;
  background-size: 15px;
  background-position-x: 10px;
  padding-left: 34px;
}

input#number {
    outline: none !important;
    font-size:14px;
  }
</style>