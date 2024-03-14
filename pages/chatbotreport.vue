<template>
  <div class="full">
    <Header class="Header" />
    <div class="main">
      <!-- <div class="box-container">
        <div class="box box1">
          <div class="text">
            <h2 class="topic">From Date</h2>
          </div>
          <input type="date" v-model="fromDate" name="fromDate">
        </div>
        <div class="box box2">
          <div class="text">
            <h2 class="topic">To Date</h2>
          </div>
          <input type="date" v-model="toDate" name="toDate">
        </div>
        <button class="customButton" @click="searchData">Search</button>
        <div class="export-option">
          <button id="exportButton" @click="exportData">
            <svg width="13" height="13" viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M53 0.75H8C3.85625 0.75 0.5 4.10625 0.5 8.25V60.75H8V8.25H53V0.75ZM64.25 15.75H23C18.8562 15.75 15.5 19.1062 15.5 23.25V75.75C15.5 79.8938 18.8562 83.25 23 83.25H64.25C68.3938 83.25 71.75 79.8938 71.75 75.75V23.25C71.75 19.1062 68.3938 15.75 64.25 15.75ZM64.25 75.75H23V23.25H64.25V75.75Z"
                fill="#8BD600" />
            </svg> Export
          </button>
        </div>
      </div> -->
      <div class="grids-container">
        <div class="column">
          <h2 class="h2"><input type="text" v-model="gridData.totalsent" class="input-field" readonly="sentReadOnly"><svg
              width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M25 0C11.225 0 0 11.225 0 25C0 38.775 11.225 50 25 50C38.775 50 50 38.775 50 25C50 11.225 38.775 0 25 0ZM36.95 19.25L22.775 33.425C22.425 33.775 21.95 33.975 21.45 33.975C20.95 33.975 20.475 33.775 20.125 33.425L13.05 26.35C12.325 25.625 12.325 24.425 13.05 23.7C13.775 22.975 14.975 22.975 15.7 23.7L21.45 29.45L34.3 16.6C35.025 15.875 36.225 15.875 36.95 16.6C37.675 17.325 37.675 18.5 36.95 19.25Z"
                fill="#8BD600" />
            </svg>
          </h2>
          <p class="sent">Sent</p>
        </div>
        <div class="column">
          <h2 class="h2"><input type="text" v-model="gridData.delivered" class="input-field"
              readonly="deliveredReadOnly"><svg width="30" height="30" viewBox="0 0 50 50" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#8BD600" />
              <path
                d="M36.66 20.5351L34.7265 18.6018C34.2675 18.1429 33.5253 18.1429 33.0713 18.6018L21.3772 30.2944L15.9379 24.8509C15.4789 24.392 14.7367 24.392 14.2827 24.8509L12.3442 26.7891C11.8853 27.248 11.8853 27.9901 12.3442 28.449L20.5472 36.6558C21.0061 37.1147 21.7483 37.1147 22.2024 36.6558L36.6552 22.195C37.1141 21.7312 37.1141 20.9892 36.66 20.5351ZM20.8255 25.7101C21.1282 26.0177 21.6262 26.0177 21.929 25.7101L32.085 15.5456C32.3877 15.2381 32.3877 14.745 32.085 14.4423L29.878 12.2307C29.5753 11.9231 29.0772 11.9231 28.7745 12.2307L21.3772 19.6271L18.6722 16.9175C18.3695 16.6099 17.8714 16.6099 17.5687 16.9175L15.3569 19.1291C15.0541 19.4367 15.0541 19.9297 15.3569 20.2324L20.8255 25.7101Z"
                fill="#FBFBFB" />
            </svg></h2>
          <p class="sent">Delivered</p>
        </div>
        <div class="column">
          <h2 class="h2"><input type="text" v-model="gridData.read" class="input-field" readonly="readReadOnly"><svg
              width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#8BD600" />
              <path
                d="M43.8449 23.7753C43.7882 23.6548 42.4462 20.7604 39.4817 17.881C35.5153 14.0342 30.5164 12 25.0011 12C19.4859 12 14.4869 14.0342 10.5252 17.881C7.56072 20.7604 6.21867 23.6548 6.15739 23.7753C6.0536 24.0039 6 24.2509 6 24.5007C6 24.7506 6.0536 24.9976 6.15739 25.2262C6.21408 25.3482 7.55612 28.2411 10.5221 31.1205C14.4869 34.9673 19.4859 37 25.0011 37C30.5164 37 35.5153 34.9673 39.4756 31.1205C42.4416 28.2411 43.7836 25.3482 43.8403 25.2262C43.9448 24.9979 43.9992 24.751 44 24.5012C44.0008 24.2514 43.948 24.0042 43.8449 23.7753ZM36.7884 28.686C33.4992 31.8318 29.5344 33.4286 25.0011 33.4286C20.4679 33.4286 16.5031 31.8318 13.2184 28.6845C11.9259 27.4423 10.8142 26.0345 9.91389 24.5C10.8144 22.9662 11.9262 21.5588 13.2184 20.317C16.5046 17.1682 20.4679 15.5714 25.0011 15.5714C29.5344 15.5714 33.4977 17.1682 36.7838 20.317C38.0762 21.5587 39.188 22.9661 40.0884 24.5C39.188 26.0344 38.0762 27.4422 36.7838 28.6845L36.7884 28.686ZM25.0011 17.9524C23.6679 17.9524 22.3647 18.3364 21.2561 19.0559C20.1476 19.7753 19.2836 20.7979 18.7734 21.9943C18.2632 23.1908 18.1297 24.5073 18.3898 25.7774C18.6499 27.0475 19.2919 28.2142 20.2346 29.1299C21.1774 30.0456 22.3785 30.6692 23.6861 30.9218C24.9937 31.1744 26.349 31.0448 27.5808 30.5492C28.8125 30.0536 29.8653 29.2144 30.606 28.1377C31.3467 27.0609 31.742 25.795 31.742 24.5C31.74 22.7641 31.0291 21.0998 29.7654 19.8723C28.5017 18.6448 26.7883 17.9544 25.0011 17.9524ZM25.0011 27.4762C24.3951 27.4762 23.8027 27.3016 23.2989 26.9746C22.795 26.6476 22.4023 26.1828 22.1704 25.6389C21.9384 25.0951 21.8778 24.4967 21.996 23.9194C22.1142 23.342 22.406 22.8117 22.8346 22.3955C23.2631 21.9793 23.809 21.6958 24.4034 21.581C24.9977 21.4662 25.6138 21.5251 26.1737 21.7504C26.7336 21.9756 27.2121 22.3571 27.5488 22.8465C27.8855 23.3359 28.0652 23.9114 28.0652 24.5C28.0652 25.2893 27.7424 26.0463 27.1677 26.6045C26.5931 27.1626 25.8138 27.4762 25.0011 27.4762Z"
                fill="white" />
            </svg>
          </h2>
          <p class="sent">Read</p>
        </div>
        <div class="column">
          <h2 class="h2"><input type="text" v-model="gridData.failed" class="input-field" readonly="failedReadOnly"><svg
              width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="25" fill="#8BD600" />
              <path
                d="M35.5 14H15.5C14.125 14 13 15.125 13 16.5V39L18 34H35.5C36.875 34 38 32.875 38 31.5V16.5C38 15.125 36.875 14 35.5 14ZM35.5 31.5H16.9625L15.5 32.9625V16.5H35.5V31.5ZM24.25 26.5H26.75V29H24.25V26.5ZM24.25 19H26.75V24H24.25V19Z"
                fill="white" />
            </svg>
          </h2>
          <p class="sent">Failed</p>
        </div>
      </div>
    </div>
    <!-- Table selection buttons -->
    <div class="primary-table">
      <div class="button-group">
        <button type="button" class="primary-btn" :class="{ 'selected': selectedTable === 'patientBooking' }"
          @click="toggleTable('patientBooking')">Patient Booking</button>
        <button type="button" class="secondary-btn" :class="{ 'selected': selectedTable === 'queriedPatient' }"
          @click="toggleTable('queriedPatient')">Queried Patient</button>
        <button type="button" class="third-btn" :class="{ 'selected': selectedTable === 'rejectedPatient' }"
          @click="toggleTable('rejectedPatient')">Rejected Patient</button>
        <button type="button" class="fourth-btn" :class="{ 'selected': selectedTable === 'sentnumbers' }"
          @click="toggleTable('sentnumbers')">Sent Message</button>
        <button type="button" class="fifth-btn" :class="{ 'selected': selectedTable === 'failednumbers' }"
          @click="toggleTable('failednumbers')">Failed Numbers</button>
      </div>
    </div>


    <!-- Date selection and search -->
    <div class="top">
      <div class="expected-date">
        <label for="chooseDate">Choose the Date</label>
        <input type="date" id="chooseDate" v-model="searchDate" @input="updateDate" class="custom-input" />
        <span class="search-icon" @click="searchReport">&#128269;</span>
      </div>
      <div class="search-input">

      </div>
    </div>

    <!-- Patient Booking Table -->
    <div class="table-container" :class="{ 'selected-table': selectedTable === 'patientBooking' }">
      <table v-if="selectedTable === 'patientBooking'" class="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Patient Choice</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginatedItems.length === 0">
            <td colspan="3" class="no-data-message">No data available</td>
          </tr>
          <tr v-else v-for="(item, index) in paginatedItems" :key="index">
            <td data-title="phonenumber">{{ item.phone_number }}</td>
            <td data-title="patientchoice">{{ item.doctor_choice }}</td>
            <td data-title="timestamp">{{ item.timestamp }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Queried Patient Table -->
    <div class="table-container" :class="{ 'selected-table': selectedTable === 'queriedPatient' }">
      <table v-if="selectedTable === 'queriedPatient'" class="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginatedItems.length === 0">
            <td colspan="2" class="no-data-message">No data available</td>
          </tr>
          <tr v-else v-for="(item, index) in paginatedItems" :key="index">
            <td data-title="phonenumber">{{ item.phone_number }}</td>
            <td data-title="timestamp">{{ item.timestamp }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Rejected Patient Table -->
    <div class="table-container" :class="{ 'selected-table': selectedTable === 'rejectedPatient' }">
      <table v-if="selectedTable === 'rejectedPatient'" class="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginatedItems.length === 0">
            <td colspan="2" class="no-data-message">No data available</td>
          </tr>
          <tr v-else v-for="(item, index) in paginatedItems" :key="index">
            <td data-title="phonenumber">{{ item.phone_number }}</td>
            <td data-title="timestamp">{{ item.timestamp }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Sent message Table -->
    <div class="table-container" :class="{ 'selected-table': selectedTable === 'sentnumbers' }">
      <table v-if="selectedTable === 'sentnumbers'" class="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginatedItems.length === 0">
            <td colspan="2" class="no-data-message">No data available</td>
          </tr>
          <tr v-else v-for="(item, index) in paginatedItems" :key="index">
            <td data-title="phonenumber">{{ item.phone_number }}</td>
            <td data-title="date">{{ item.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-container" :class="{ 'selected-table': selectedTable === 'failednumbers' }">
      <table v-if="selectedTable === 'failednumbers'" class="table">
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Date and Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="paginatedItems.length === 0">
            <td colspan="2" class="no-data-message">No data available</td>
          </tr>
          <tr v-else v-for="(item, index) in paginatedItems" :key="index">
            <td data-title="phonenumber">{{ item.phone_number }}</td>
            <td data-title="date">{{ item.timestamp }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" @click="changePage(pagination.page - 1)" href="#" :disabled="pagination.page === 1">
            &lt;
          </a>
        </li>
        <template v-if="pagination.page <= 3">
          <!-- If current page is less than or equal to 3, show first 5 pages -->
          <li class="page-item" :class="{ active: pagination.page === index + 1 }"
            v-for="(page, index) in Math.min(5, totalPages)" :key="index">
            <a class="page-link" @click="changePage(index + 1)" href="#">{{ index + 1 }}</a>
          </li>
        </template>
        <template v-else-if="pagination.page >= totalPages - 2">
          <!-- If current page is greater than or equal to totalPages - 2, show last 5 pages -->
          <li class="page-item" :class="{ active: pagination.page === totalPages - 4 + index }" v-for="(page, index) in 5"
            :key="index">
            <a class="page-link" @click="changePage(totalPages - 4 + index)" href="#">{{ totalPages - 4 + index }}</a>
          </li>
        </template>
        <template v-else>
          <!-- Show 5 pages with ellipsis -->
          <li class="page-item" :class="{ active: pagination.page === pagination.page - 2 + index }"
            v-for="(page, index) in 5" :key="index">
            <a class="page-link" @click="changePage(pagination.page - 2 + index)" href="#">{{ pagination.page - 2 + index
            }}</a>
          </li>
          <li class="page-item disabled">
            <span class="page-link">...</span>
          </li>
        </template>
        <li class="page-item">
          <a class="page-link" @click="changePage(pagination.page + 1)" href="#"
            :disabled="pagination.page === totalPages">
            &gt;
          </a>
        </li>
      </ul>
    </nav>
    <br><br>
    <Footer />
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import Header from '~/components/Header.vue';
import { getReportsByDate, fetchDataByDate, exportDataByDate } from '@/api/api.js';

export default {
  components: {
    Header,
  },
  setup() {

    const searchDate = ref(new Date().toISOString().split('T')[0]);
    const startAutoRefresh = () => {
      const interval = 30 * 1000; // 30 seconds in milliseconds
      setInterval(searchReport, interval);
    };
    const dataToDisplay = ref([]);
    const pagination = ref({
      page: 1,
      itemsPerPage: 10,
    });
    const originalReportData = ref([]);
    const selectedTable = ref('patientBooking'); // Set a default table name

    // Declare the arrays
    const queriedPatients = ref([]);
    const noAppointments = ref([]);
    const currentPatients = ref([]);
    const sentnumbers = ref([]);
    const failednumbers = ref([]);

    const fromDate = ref('');
    const toDate = ref('');
    const gridData = ref({
      totalsent: 0,
      delivered: 0,
      failed: 0,
      read: 0,
    });

    const sentReadOnly = ref(false);
    const deliveredReadOnly = ref(false);
    const failedReadOnly = ref(false);
    const readReadOnly = ref(false);

    const searchData = async () => {
      try {
        if (!searchDate.value) {
          console.error('Please choose a date.');
          return;
        }

        // const formattedFromDate = new Date(fromDate.value).toISOString().split('T')[0];
        // const formattedToDate = new Date(toDate.value).toISOString().split('T')[0];


        // Call the API service
        const apiData = await fetchDataByDate(searchDate.value);

        // Update the gridData
        // Note: Make sure to adjust property names according to your API response
        const fixedApiData = {
          totalsent: parseInt(apiData.totalsent, 10) || 0,
          delivered: parseInt(apiData.delivered, 10) || 0,
          failed: parseInt(apiData.failed, 10) || 0,
          read: parseInt(apiData.read, 10) || 0,
        };

        // Update the gridData with fixed values
        gridData.value = fixedApiData;
        console.log(gridData.value.totalsent);
        console.log(gridData.value.delivered);
        console.log(gridData.value.read);
        console.log(gridData.value.failed);

        // Set read-only for grid fields
        sentReadOnly.value = true;
        deliveredReadOnly.value = true;
        failedReadOnly.value = true;
        readReadOnly.value = true;
        console.log('ReadOnly Values:', sentReadOnly.value, deliveredReadOnly.value, failedReadOnly.value, readReadOnly.value);
      } catch (error) {
        // Handle errors
        console.error('Error in searchData:', error);
      }
    };

    const exportData = async () => {
      try {
        if (!fromDate || !toDate) {
          console.error('Please choose a date.');
          return;
        }

        const formattedFromDate = new Date(fromDate.value).toISOString().split('T')[0];
        const formattedToDate = new Date(toDate.value).toISOString().split('T')[0];

        const apiData = await exportDataByDate(formattedFromDate, formattedToDate);
        console.log('API Data:', apiData);

        const wb = XLSX.utils.book_new();

        // Function to convert data to worksheet format
        const convertToSheet = (data) => {
          const wsData = [];
          const headers = Object.keys(data[0]);
          wsData.push(headers);

          data.forEach(item => {
            const row = headers.map(header => item[header]);

            // Check if any cell in the row has an empty value
            if (row.some(cell => cell !== null && cell !== undefined && cell !== '')) {
              wsData.push(row);
            }
          });

          return XLSX.utils.aoa_to_sheet(wsData);
        };

        if (apiData.sent.length > 0) {
          XLSX.utils.book_append_sheet(wb, convertToSheet(apiData.sent), 'Sent');
        }

        if (apiData.delivered.length > 0) {
          XLSX.utils.book_append_sheet(wb, convertToSheet(apiData.delivered), 'Delivered');
        }

        if (apiData.failed.length > 0) {
          XLSX.utils.book_append_sheet(wb, convertToSheet(apiData.failed), 'Failed');
        }

        if (apiData.read.length > 0) {
          XLSX.utils.book_append_sheet(wb, convertToSheet(apiData.read), 'Read');
        }
        // Export the workbook to a file
        XLSX.writeFile(wb, 'MessageReport.xlsx');
        console.log('Download complete');
      } catch (error) {
        // Handle errors
        console.error('Error in exportData:', error);
      }
    };

    const searchReport = async () => {
      if (!searchDate.value) {
        console.error('Please choose a date.');
        return;
      }

      try {
        console.log('Making API request with date:', searchDate.value);
        const response = await getReportsByDate(searchDate.value);

        // Store each category in separate arrays with a deep copy
        originalReportData.value = response;
        queriedPatients.value = JSON.parse(JSON.stringify(originalReportData.value.queriedPatients || []));
        console.log(queriedPatients.value);
        noAppointments.value = JSON.parse(JSON.stringify(originalReportData.value.noAppointments || []));
        console.log(noAppointments.value);
        currentPatients.value = JSON.parse(JSON.stringify(originalReportData.value.currentPatients || []));
        console.log(currentPatients.value);
        sentnumbers.value = JSON.parse(JSON.stringify(originalReportData.value.sentnumbers || []));
        console.log(sentnumbers.value);
        failednumbers.value = JSON.parse(JSON.stringify(originalReportData.value.failedPatients || []));
        console.log(failednumbers.value);

        await searchData();
        pagination.value.page = 1;
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    onMounted(async () => {

      startAutoRefresh();
      await searchReport();
    });

    // Watch for changes in originalReportData and update dataToDisplay accordingly
    watch([originalReportData, selectedTable], ([originalData, table]) => {
      switch (table) {
        case 'patientBooking':
          dataToDisplay.value = [...currentPatients.value];
          break;
        case 'queriedPatient':
          dataToDisplay.value = [...queriedPatients.value];
          break;
        case 'rejectedPatient':
          dataToDisplay.value = [...noAppointments.value];
          break;
        case 'sentnumbers':
          dataToDisplay.value = [...sentnumbers.value];
          dataToDisplay.value.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        case 'failednumbers':
          dataToDisplay.value = [...failednumbers.value];
          break;
      }
      dataToDisplay.value.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    });

    const updateDate = (event) => {
      searchDate.value = event.target.value;
    };

    const toggleTable = (tableName) => {
      selectedTable.value = tableName;
      pagination.value.page = 1;
    };

    const changePage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        pagination.value.page = page;
      }
    };

    const paginatedItems = computed(() => {
      const dataToPaginate = Array.isArray(dataToDisplay.value) ? dataToDisplay.value : [];
      const start = (pagination.value.page - 1) * pagination.value.itemsPerPage;
      const end = start + pagination.value.itemsPerPage;
      return dataToPaginate.slice(start, end);
    });

    const totalPages = computed(() => {
      const dataToPaginate = Array.isArray(dataToDisplay.value) ? dataToDisplay.value : [];
      return Math.ceil(dataToPaginate.length / pagination.value.itemsPerPage);
    });

    const visiblePages = computed(() => {
      const currentPage = pagination.value.page;
      const lastPage = totalPages.value;
      const limit = 5; // Adjust this value to change the number of visible pages

      let start = Math.max(1, currentPage - Math.floor(limit / 2));
      let end = Math.min(lastPage, start + limit - 1);

      if (lastPage - end < Math.floor(limit / 2)) {
        start = Math.max(1, lastPage - limit + 1);
      }

      return Array.from({ length: end - start + 1 }, (_, i) => i + start);
    });

    return {
      searchDate,
      dataToDisplay,
      pagination,
      originalReportData,
      selectedTable,
      searchReport,
      updateDate,
      toggleTable,
      changePage,
      searchData,
      exportData,
      paginatedItems,
      totalPages,
      visiblePages,
      fromDate,
      toDate,
      gridData,
      apiData: {
        sent: [],
        delivered: [],
        failed: [],
        read: []
      },
    };
  },
};
</script>

<style scoped>@import '@/styles/chatbot.css';</style>