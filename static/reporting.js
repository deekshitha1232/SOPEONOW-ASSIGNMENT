// ===============================
// 🔥 GET JSON FROM DJANGO
// ===============================
const jsonData = JSON.parse(
  document.getElementById("jsonData").textContent
);

// ===============================
// 📊 COMMON GRADIENT SETTINGS
// ===============================
const gradientFill = {
  type: ["solid", "gradient"],
  gradient: {
    shade: "light",
    type: "vertical",
    opacityFrom: 0.4,
    opacityTo: 0.05,
    stops: [0, 100]
  }
};


// ===============================
// 📊 1. ZONE CHART (BAR + AREA)
// ===============================
const zoneData = jsonData.graphs.AccidentEmergency.Zone["barpie-1"];

new ApexCharts(document.querySelector("#chart1"), {
  series: [
    {
      name: "Total Visits",
      type: "column",
      data: zoneData.bar.y[0].data
    },
    {
      name: "Avg Time",
      type: "area",   // 🔥 AREA for gradient
      data: zoneData.bar.y[1].data.map(t => Math.round(t / 60))
    }
  ],
  chart: {
    height: "100%",
    width: "100%",
    type: "line",
    toolbar: { show: true }
  },
  colors: ["#31cab1", "#0cc2a1"],
  stroke: {
    width: [0, 3],
    curve: "smooth"
  },
  fill: gradientFill,
  markers: {
    size: 3
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  xaxis: {
    categories: zoneData.bar.x
  },
  yaxis: [
    { title: { text: "Total Visits" } },
    { opposite: true, title: { text: "Avg Time (min)" } }
  ],
  grid: { borderColor: "#eee" },
  legend: { position: "bottom" }
}).render();


// ===============================
// 📊 2. INTERVAL CHART (BAR + AREA)
// ===============================
const intervalData = jsonData.graphs.AccidentEmergency.interval["barline-1"];

new ApexCharts(document.querySelector("#chart2"), {
  series: [
    {
      name: "Total Visits",
      type: "column",
      data: intervalData.y[0].data
    },
    {
      name: "Avg Time",
      type: "area",  // 🔥 AREA
      data: intervalData.y[1].data.map(t => Math.round(t / 60))
    }
  ],
  chart: {
    height: "100%",
    width: "100%",
    type: "line",
    stacked: false,
    toolbar: { show: true }
  },
  colors: ["#a6a5c2", "#89a0b9"],
  stroke: {
    width: [0, 3],
    curve: "smooth"
  },
  fill: gradientFill,
  markers: {
    size: 3
  },
  plotOptions: {
    bar: {
      columnWidth: "40%",
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  xaxis: {
    categories: intervalData.x,
    labels: {
      rotate: -30,
      style: { fontSize: "10px" }
    }
  },
  grid: { borderColor: "#eee" },
  legend: { position: "bottom" }
}).render();


// ===============================
// 📊 3. DOCTOR CHART (BAR + AREA)
// ===============================
const doctorData = jsonData.graphs.AccidentEmergency.Doctor["barline-1"];

new ApexCharts(document.querySelector("#chart3"), {
  series: [
    {
      name: "Total Visits",
      type: "column",
      data: doctorData.y[0].data
    },
    {
      name: "Avg Time",
      type: "area",  // 🔥 AREA
      data: doctorData.y[1].data.map(t => Math.round(t / 60))
    }
  ],
  chart: {
    height: "100%",
    width: "100%",
    type: "line",
    toolbar: { show: true }
  },
  colors: ["#bd61ad", "#7a435f"],
  stroke: {
    width: [0, 3],
    curve: "smooth"
  },
  fill: gradientFill,
  markers: {
    size: 3
  },
  plotOptions: {
    bar: {
      columnWidth: "35%",
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  xaxis: {
    categories: doctorData.x,
    labels: {
      rotate: -45,
      style: { fontSize: "9px" }
    }
  },
  grid: { borderColor: "#eee" },
  legend: { position: "bottom" }
}).render();
// ===============================
// 📊 4. TRIAGE BY INTERVAL
// ===============================
const triageData = jsonData.graphs.AccidentEmergency.triage["comparison-1"];

new ApexCharts(document.querySelector("#chart4"), {
  series: [
    {
      name: "Triage Done",
      type: "column",
      data: triageData.y[0].data
    },
    {
      name: "Done Time",
      type: "area",
      data: triageData.y[1].data.map(t => Math.round(t / 60))
    },
    {
      name: "Not Done",
      type: "column",
      data: triageData.y[2].data
    },
    {
      name: "Not Done Time",
      type: "area",
      data: triageData.y[3].data.map(t => Math.round(t / 60))
    }
  ],
  chart: {
    height: "100%",
    width: "100%",
    type: "line",
    stacked: false,
    toolbar: { show: true }
  },
  colors: ["#20d6a9", "#62a39b", "#8f66a7", "#f0e7e7"],
  stroke: {
    width: [0, 3, 0, 3],
    curve: "smooth"
  },
  fill: {
    type: ["solid", "gradient", "solid", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0.05
    }
  },
  markers: {
    size: 3
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 4
    }
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1, 3]
  },
  xaxis: {
    categories: triageData.x,
    labels: {
      rotate: -30,
      style: { fontSize: "9px" }
    }
  },
  grid: { borderColor: "#eee" },
  legend: {
    position: "bottom"
  }
}).render();
// // ===============================
// // 👨‍⚕️ DOCTOR TABLE + PAGINATION
// // ===============================

// const doctors = jsonData.docstats;

// let currentPage = 1;
// const rowsPerPage = 4; // how many rows per page

// function renderTable() {
//     const tbody = document.querySelector("#doctorTable tbody");
//     tbody.innerHTML = "";

//     const start = (currentPage - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     const pageData = doctors.slice(start, end);

//     pageData.forEach(doc => {
//         const minutes = Math.floor(doc.avg_visit_tm / 60);
//         const timeClass = minutes <= 30 ? "time-green" : "time-red";

//         const row = `
//             <tr>
//                 <td>${doc.doc_name}</td>
//                 <td><span class="patient-box">${doc.count}</span></td>
//                 <td class="${timeClass}">00:${minutes.toString().padStart(2, '0')}</td>
//             </tr>
//         `;

//         tbody.innerHTML += row;
//     });
// }

// // ===============================
// // 🔢 PAGINATION RENDER
// // ===============================
// function renderPagination() {
//     const totalPages = Math.ceil(doctors.length / rowsPerPage);
//     const container = document.querySelector(".pagination");

//     container.innerHTML = "";

//     // PREV
//     const prev = document.createElement("span");
//     prev.innerHTML = "&lt;";
//     prev.onclick = () => {
//         if (currentPage > 1) {
//             currentPage--;
//             updateTable();
//         }
//     };
//     container.appendChild(prev);

//     // PAGES
//     for (let i = 1; i <= totalPages; i++) {
//         const page = document.createElement("span");
//         page.textContent = i;

//         if (i === currentPage) {
//             page.classList.add("active");
//         }

//         page.onclick = () => {
//             currentPage = i;
//             updateTable();
//         };

//         container.appendChild(page);
//     }

//     // NEXT
//     const next = document.createElement("span");
//     next.innerHTML = "&gt;";
//     next.onclick = () => {
//         if (currentPage < totalPages) {
//             currentPage++;
//             updateTable();
//         }
//     };
//     container.appendChild(next);
// }

// // ===============================
// // 🔄 UPDATE TABLE
// // ===============================
// function updateTable() {
//     renderTable();
//     renderPagination();
// }

// // INITIAL LOAD
// updateTable();
// // ===============================
// // 🔍 SEARCH FILTER
// // ===============================
// document.getElementById("searchInput").addEventListener("input", function () {
//     const value = this.value.toLowerCase();

//     const filtered = doctors.filter(doc =>
//         doc.doc_name.toLowerCase().includes(value)
//     );

//     currentPage = 1;

//     // temporarily override doctors list
//     window.filteredDoctors = filtered;
//     updateFilteredTable(filtered);
// });

// function updateFilteredTable(data) {
//     const tbody = document.querySelector("#doctorTable tbody");
//     tbody.innerHTML = "";

//     data.slice(0, rowsPerPage).forEach(doc => {
//         const minutes = Math.floor(doc.avg_visit_tm / 60);
//         const timeClass = minutes <= 30 ? "time-green" : "time-red";

//         tbody.innerHTML += `
//             <tr>
//                 <td>${doc.doc_name}</td>
//                 <td><span class="patient-box">${doc.count}</span></td>
//                 <td class="${timeClass}">00:${minutes.toString().padStart(2, '0')}</td>
//             </tr>
//         `;
//     });
// }
// ===============================
// 👨‍⚕️ DOCTOR TABLE + PAGINATION
// ===============================

const doctors = jsonData.docstats;

let filteredDoctors = [...doctors]; // 🔥 important
let currentPage = 1;
const rowsPerPage = 4;

// ===============================
// 📊 RENDER TABLE
// ===============================
function renderTable() {
    const tbody = document.querySelector("#doctorTable tbody");
    tbody.innerHTML = "";

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    const pageData = filteredDoctors.slice(start, end);

    pageData.forEach(doc => {
        const minutes = Math.floor(doc.avg_visit_tm / 60);
        const timeClass = minutes <= 30 ? "time-green" : "time-red";

        const row = `
            <tr>
                <td>${doc.doc_name}</td>
                <td><span class="patient-box">${doc.count}</span></td>
                <td class="${timeClass}">00:${minutes.toString().padStart(2, '0')}</td>
            </tr>
        `;

        tbody.innerHTML += row;
    });
}

// ===============================
// 🔢 PAGINATION
// ===============================
function renderPagination() {
    const totalPages = Math.ceil(filteredDoctors.length / rowsPerPage);
    const container = document.querySelector(".pagination");

    container.innerHTML = "";

    // PREV
    const prev = document.createElement("span");
    prev.innerHTML = "&lt;";
    prev.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            updateTable();
        }
    };
    container.appendChild(prev);

    // PAGES
    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement("span");
        page.textContent = i;

        if (i === currentPage) {
            page.classList.add("active");
        }

        page.onclick = () => {
            currentPage = i;
            updateTable();
        };

        container.appendChild(page);
    }

    // NEXT
    const next = document.createElement("span");
    next.innerHTML = "&gt;";
    next.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateTable();
        }
    };
    container.appendChild(next);
}

// ===============================
// 🔄 UPDATE
// ===============================
function updateTable() {
    renderTable();
    renderPagination();
}

// ===============================
// 🔍 SEARCH (CONNECTED)
// ===============================
document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();

    filteredDoctors = doctors.filter(doc =>
        doc.doc_name.toLowerCase().includes(value)
    );

    currentPage = 1;
    updateTable();
});

// INITIAL LOAD
updateTable();