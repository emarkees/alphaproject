const hamburger = document.getElementById("hamburger");
const menuIcon = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links-container");
const worksSection = document.querySelector(".work-container");
const eventCounts = document.getElementById("event-count");
const totalEvents = document.getElementById("total-event");
const rowCounts = document.getElementById("rows-count");
const currentPages = document.getElementById("current-page");
const totalPage = document.getElementById("total-pages");
const modal = document.getElementById("event-modal");
const closeButton = document.getElementById("#close-button");
let currentlyOpenRow = null; // Variable to keep track of the currently open row

// Set Events
let eventsPerPage = 10;
let currentPage = 1;

function toggleMenu() {
  navLinksContainer.classList.toggle("active");

  if (hamburger.classList.toggle("active")) {
    menuIcon.innerHTML = `<i class="fa-solid fa-x"></i>`; 
    menuIcon.alt = "Close Menu";
  } else {
    menuIcon.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    menuIcon.alt = "Open Menu";
  }
}

// Add click event listener to the hamburger menu
hamburger.addEventListener("click", toggleMenu);

document.querySelectorAll(".nav-menu").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksContainer.classList.remove("active");
  })
);

//Events Array
const events = [
  {
    id: 1,
    eventName: "Cloud Innovation Summit",
    status: "In Progress",
    speaker: "John Doe",
    date: "2024-02-21",
    price: 100
  },
  {
    id: 2,
    eventName: "Blockchain Revolution Conference",
    status: "Completed",
    speaker: "Jane Smith",
    date: "2024-01-15",
    price: 500
  },
  {
    id: 3,
    eventName: "Cybersecurity Forum",
    status: "Completed",
    speaker: "Emily Clark",
    date: "2024-03-10",
    price: 800
  },
  {
    id: 4,
    eventName: "Data Science Bootcamp",
    status: "In Progress",
    speaker: "Michael Lee",
    date: "2024-02-25",
    price: 200
  },
  {
    id: 5,
    eventName: "Blockchain Conference",
    status: "Completed",
    speaker: "Samantha Brown",
    date: "2023-12-30",
    price: 1000
  },
  {
    id: 6,
    eventName: "Future of Web Development",
    status: "Completed",
    speaker: "David Taylor",
    date: "2024-04-05",
    price: 150
  },
  {
    id: 7,
    eventName: "Tech for Good Summit",
    status: "Completed",
    speaker: "Olivia Johnson",
    date: "2024-01-28",
    price: 200
  },
  {
    id: 8,
    eventName: "IoT Conference 2024",
    status: "In Progress",
    speaker: "Mark Wilson",
    date: "2024-02-18",
    price: 100
  },
  {
    id: 9,
    eventName: "Mobile World Congress",
    status: "Completed",
    speaker: "Anna White",
    date: "2024-05-12",
    price: 400
  },
  {
    id: 10,
    eventName: "Smart Cities Expo",
    status: "Completed",
    speaker: "Robert King",
    date: "2023-12-05",
    price: 500
  },
  {
    id: 11,
    eventName: "HealthTech Innovation",
    status: "In Progress",
    speaker: "Laura Martin",
    date: "2024-03-03",
    price: 100
  },
  {
    id: 12,
    eventName: "Quantum Computing Summit",
    status: "Completed",
    speaker: "Steve Anderson",
    date: "2024-06-10",
    price: 100
  },
  {
    id: 13,
    eventName: "Robotics Expo 2024",
    status: "Completed",
    speaker: "Chris Evans",
    date: "2024-01-07",
    price: 100
  },
  {
    id: 14,
    eventName: "Augmented Reality Conference",
    status: "In Progress",
    speaker: "Nancy Thomas",
    date: "2024-02-14",
    price: 100
  },
  {
    id: 15,
    eventName: "5G Tech Forum",
    status: "Completed",
    speaker: "Matthew Harris",
    date: "2024-03-18",
    price: 500
  },
  {
    id: 16,
    eventName: "Big Data World",
    status: "Completed",
    speaker: "Rachel Green",
    date: "2023-11-22",
    price: 500
  },
  {
    id: 17,
    eventName: "Digital Marketing Summit",
    status: "In Progress",
    speaker: "Sophia Davis",
    date: "2024-07-20",
    price: 600
  },
  {
    id: 18,
    eventName: "E-commerce Future Forum",
    status: "Completed",
    speaker: "Lucas Scott",
    date: "2024-04-17",
    price: 100
  },
  {
    id: 19,
    eventName: "EdTech Innovations",
    status: "In Progress",
    speaker: "Jack Hall",
    date: "2024-08-10",
    price: 600
  },
  {
    id: 20,
    eventName: "Virtual Reality Expo",
    status: "In Progress",
    speaker: "Jessica Walker",
    date: "2024-09-12",
    price: 750
  },
  {
    id: 21,
    eventName: "Virtual Reality Expo",
    status: "In Progress",
    speaker: "Jessica Walker",
    date: "2024-10-12",
    price: 750
  }
];

function setEvents(filteredEvents = events) {
  let html = "";
  const eventCount = filteredEvents.length;
  const totalPages = Math.ceil(eventCount / eventsPerPage);
  const start = (currentPage - 1) * eventsPerPage;
  const end = start + eventsPerPage;
  const currentEvents = filteredEvents.slice(start, end);

  eventCounts.innerText = `Displaying ${eventCount} results`;
  totalEvents.innerText = `${eventCount}`;

  setPageNumbers(currentPage, totalPages);

  currentEvents.forEach((items) => {
    let statusStyle = "";

    if (items.status === "Completed") {
      statusStyle = "background-color: #10B981; color: white;";
    } else if (items.status === "In Progress") {
      statusStyle = "background-color: #3B82F6; color: white;";
    }

    html += `
      <tbody id='${items.id}'>
        <tr class="event-row" onclick="toggleDetails(this)">
          <td class="event-name">
            <div class="dropdown">
              <i class="fa-solid fa-angle-right dropdown-icon fa-1x"></i>
            </div>
            ${items.eventName}
          </td>
          <td class="desktop-only">
            ${items.date}
          </td>
          <td class="desktop-only">
            ${items.speaker}
          </td>
          <td>
            <p class="status-type" style="${statusStyle}">${items.status}</p>
          </td>
        </tr>
        <!-- These details are hidden on desktop and shown on mobile when the row is clicked -->
        
        <tr class="event-details mobile-only" style="display: none;">
          <td class="sp-name details-content" id="sp-name">
            <p>${items.speaker}</p>
          </td>
          <td colspan="2" class="details-content">${items.date}</td>
        </tr>
      </tbody>
    `;
  });

  worksSection.innerHTML = html;
  updatePaginationButtons();
  countInProgressEvents();
}

// Function to toggle event details on mobile
function toggleDetails(row) {
  const detailsRow = row.nextElementSibling;
  if (detailsRow && detailsRow.classList.contains('event-details')) {
    const isHidden = detailsRow.style.display === 'none';
    detailsRow.style.display = isHidden ? 'table-row' : 'none';
  }
}

function toggleDropdown(button) {
  const row = button.closest("tr");
  const nextRow = row.nextElementSibling;
  if (nextRow && nextRow.classList.contains("mobile-details")) {
    if (nextRow.style.display === "table-row") {
      nextRow.style.display = "none";
      button.innerHTML = 'Details <i class="fa-solid fa-chevron-down dropdown-icon"></i>';
    } else {
      nextRow.style.display = "table-row";
      button.innerHTML = 'Details <i class="fa-solid fa-chevron-up"></i>';
    }
  }
}

function toggleDetails(row) {
  const nextRow = row.nextElementSibling;

  // Close previously opened row if another is clicked
  if (currentlyOpenRow && currentlyOpenRow !== row) {
    const prevNextRow = currentlyOpenRow.nextElementSibling;
    if (prevNextRow && prevNextRow.classList.contains("event-details")) {
      prevNextRow.style.display = "none";
      currentlyOpenRow.classList.remove("active");
    }
  }

  // Handle the current row/hide and show
  if (nextRow && nextRow.classList.contains("event-details")) {
    if (nextRow.style.display === "table-row" || nextRow.style.display === "") {
      nextRow.style.display = "none";
      row.classList.remove("active");
      currentlyOpenRow = null;
    } else {
      nextRow.style.display = "table-row";
      row.classList.add("active");
      currentlyOpenRow = row;
    }
  }
}

function setPageNumbers(currentPage, totalPages) {
  const currentPageElement = document.getElementById('current-page');

  // Check if the element exists before trying to modify it
  if (!currentPageElement) {
    console.error("Element with ID 'current-page' not found.");
    return;
  }

  currentPageElement.innerHTML = ""; // Clear existing content
  const pagesToShow = [];
  const maxPagesToShow = 4; // Number of pages to display
  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(totalPages, currentPage + 2);

  // Construct the array of pages to display
  if (startPage > 1) {
    pagesToShow.push(1);
    if (startPage > 2) pagesToShow.push("...");
  }

  for (let i = startPage; i <= endPage; i++) {
    pagesToShow.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pagesToShow.push("...");
    pagesToShow.push(totalPages);
  }

  // Render the page numbers
  pagesToShow.forEach((pageNumber) => {
    if (pageNumber === currentPage) {
      currentPageElement.innerHTML += `<span class="count active" style="background-color: #8576ff; color: white;">${pageNumber}</span>`;
    } else if (pageNumber === "...") {
      currentPageElement.innerHTML += `<span class="count" style="background-color: white; color: black;">${pageNumber}</span>`;
    } else {
      currentPageElement.innerHTML += `<span class="count" style="background-color: white; color: black;" onclick="goToPage(${pageNumber})">${pageNumber}</span>`;
    }
  });

}

// Function to change the number of events displayed per page
function changeEventsPerPage(count) {
  eventsPerPage = parseInt(count);
  currentPage = 1;
  setEvents();
}

// Example previous year values for total events, active speakers, and registrations
// Previous year data
const previousYearData = {
  totalEvents: 10,    // Last year's total events
  activeSpeakers: 4,  // Last year's active speakers
  registrations: 20,  // Last year's total registrations
  revenue: 2000       // Last year's total revenue
};

// Current year values can be dynamically calculated from your data
const currentYearData = {
  totalEvents: events.length,
  activeSpeakers: events.filter(event => event.status === 'In Progress').length,
  registrations: 25,
  revenue: calculateTotalRevenue()
};

// Function to calculate total revenue
function calculateTotalRevenue() {
  const totalRevenue = events.reduce((sum, event) => sum + (event.price || 0), 0);
  const revenueElement = document.getElementById("total-revenue");
  if (revenueElement) {
    revenueElement.innerHTML = `$${totalRevenue}`;
  }
  return totalRevenue;
}

// General function to calculate percentage change
function calculatePercentageChange(previous, current) {
  if (previous === 0) return 0;
  const change = ((current - previous) / previous) * 100;
  return change.toFixed(2);
}

// General function to display percentage change with arrows
function displayPercentageChange(previousValue, currentValue, elementId) {
  const percentageChange = calculatePercentageChange(previousValue, currentValue);
  const element = document.getElementById(elementId);
  
  if (element) {
    let arrow = "";
    let arrowColor = "";

    // Determine if the value increased or decreased
    if (percentageChange > 0) {
      arrow = "&#x2197;"; // Upward arrow (↗)
      arrowColor = "green";
    } else if (percentageChange < 0) {
      arrow = "&#x2198;"; // Downward arrow (↘)
      arrowColor = "red";
    } else {
      arrow = "";  // No change arrow for 0%
    }

    element.innerHTML = `${arrow ? `<span style="color: ${arrowColor};">${arrow}</span>` : ""} ${Math.abs(percentageChange)}%`;
  }
}

// Function to update all stats on page load
document.addEventListener("DOMContentLoaded", function () {
  displayPercentageChange(previousYearData.totalEvents, currentYearData.totalEvents, "total-event-change");
  displayPercentageChange(previousYearData.activeSpeakers, currentYearData.activeSpeakers, "active-speaker-change");
  displayPercentageChange(previousYearData.registrations, currentYearData.registrations, "registration-change");
  displayPercentageChange(previousYearData.revenue, currentYearData.revenue, "percentage-change");
});

//Chart file

function revenueChart() {
  const monthlyRevenue = Array(12).fill(0);
  events.forEach(event => {
    const eventMonth = new Date(event.date).getMonth();
    monthlyRevenue[eventMonth] += event.price || 0; // Ensure price exists (if price is missing, use 0)
  });
  const monthLabels = ["Ja", "Fb", "Mr", "Ap", "Ma", "Jn", "Jl", "Au", "Se", "Oc", "No", "De"];
  const ctx = document.getElementById("myChart").getContext('2d');
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: monthLabels,
      datasets: [
        {
          data: monthlyRevenue,
          borderWidth: 2,
          backgroundColor: "#8576ff",
          borderDash: [1, 1],
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 200,
          },
          grid: {
            borderDash: [5, 4],
          },
        },
        x: {
          grid: {
            display: true,
          },
        },
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", revenueChart);

// Carousel Slider
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-inner .carousel-item');
const dots = document.querySelectorAll('.dot');

// Function to update the carousel display
function updateCarousel() {
  // Hide all slides and remove active class from dots
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    dots[index]?.classList.remove('active');
  });

  // Show the current slide and set the corresponding dot to active
  slides[currentSlideIndex].classList.add('active');
  dots[currentSlideIndex].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarousel();
};

// Function to go to the previous slide
function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

setInterval(nextSlide, 400000);

document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);

// Function to handle search by name, status, and date
function handleSearch() {
  const searchInput = document.getElementById("event-search").value.toLowerCase();
  const statusInput = document.getElementById("status-search").value;
  const dateInput = document.getElementById("search-date").value;

  // Filter events based on search criteria
  const matchedEvents = events.filter(event => {
    const matchesName = event.eventName.toLowerCase().includes(searchInput);
    const matchesStatus = statusInput ? event.status === statusInput : true;
    const matchesDate = dateInput ? new Date(event.date) >= new Date(dateInput) : true;

    return matchesName && matchesStatus && matchesDate;
  });

  // Update the event table with filtered events
  setEvents(matchedEvents);
}

// Sort Events
function sortEvents(sortType) {
  let sortedEvents = [...events]; 
  if (sortType === "most-recent") {
    sortedEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === "alphabetical") {
    sortedEvents.sort((a, b) => a.eventName.localeCompare(b.eventName));
  }
  setEvents(sortedEvents);
}

document.getElementById('sort').addEventListener('change', function() {
  sortEvents(this.value);
});


// Function to update the event table with the search results
function updateEventTable(eventsToShow) {
  const eventTableBody = document.getElementById("event-table-body");
  eventTableBody.innerHTML = "";

  if (eventsToShow.length > 0) {
    eventsToShow.forEach(event => {
      // Style for status type
      let statusStyle = "";
      if (event.status === "Completed") {
        statusStyle = "background-color: #10B981; color: white;";
      } else if (event.status === "In Progress") {
        statusStyle = "background-color: #3B82F6; color: white;";
      }

      // Create table rows for each event
      const row = document.createElement("tbody");
      row.innerHTML = `
        <tr class="event-row" onclick="toggleDetails(this)">
          <td class="event-name">
            <div class="dropdown">
              <i class="fa-solid fa-angle-right dropdown-icon fa-1x"></i>
            </div>
            ${event.eventName}
          </td>
          <td class="status-type" style="${statusStyle}>
            <p>${event.status}</p>
          </td>
        </tr>
        <tr class="event-details" style="display: none;">
          <td>${event.speaker}</td>
          <td colspan="2">${event.date}</td>
        </tr>
      `;
      eventTableBody.appendChild(row);
    });
  } else {
    // Show message if no events match the search criteria
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="2">No events found</td>`;
    eventTableBody.appendChild(row);
  }
}

// Call this function when the DOM is ready to show all events initially
document.addEventListener("DOMContentLoaded", () => {
  handleSearch();
});

// Function to go to a specific page
function goToPage(pageNumber) {
  currentPage = pageNumber;
  setEvents();
}

// Function to go to the next page
function nextPage() {
  const totalPages = Math.ceil(events.length / eventsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    setEvents();
  }
}

// Function to go to the previous page
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    setEvents();
  }
}

// Function to count the number of events that are "In Progress"
function countInProgressEvents() {
  const inProgressCount = events.filter(event => event.status === "In Progress").length;
  const inProgressCountElement = document.getElementById("in-progress-count");
  if (inProgressCountElement) {
    inProgressCountElement.innerHTML = `${inProgressCount}`;
  }
  return inProgressCount;
}

document.addEventListener("DOMContentLoaded", () => {
  countInProgressEvents();
  setEvents(); // Initially load all events
});

// Function to open the modal with event data
function openModal(eventData) {
  const title = modal.querySelector('.primary-title');
  const img = modal.querySelector('#modal-speaker-image');
  const description = modal.querySelector('#modal-event-description');
  const date = modal.querySelector('#modal-event-date');
  const speaker = modal.querySelector('#modal-speaker-name');

  // Populate modal with event data
  title.textContent = eventData.eventName || "No title available";
  img.src = eventData.speakerImage || "";
  description.textContent = eventData.description || "No description available.";
  date.textContent = eventData.date || "No date available.";
  speaker.textContent = eventData.speaker || "No speaker available.";

  // Show modal
  modal.classList.add('active');
}

// Function to close the modal
function closeModal() {
  closeModal
  modal.style.display = 'none';
};

document.querySelectorAll(".close-button").forEach((n) =>
  n.addEventListener("click", () => {
    modal.classList.remove("active");
  })
);

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

modalbtn = document.addEventListener('click', openModal)

// Add event listeners to the "event-row" class to trigger the modal
document.querySelectorAll('.event-row').forEach((row, index) => {
  row.addEventListener('click', () => {
    const eventData = events[index];
    openModal(eventData);
  });
});

// Desktop nav
let isOpen = false;

function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const navLinks = document.getElementById("nav-links");
  const logo = document.getElementById("logo");
  const menuIcon = document.getElementById("menu-icon");
  const navLinkText = document.querySelectorAll("#nav-link");
  const mainContent = document.getElementById("main");

  // Toggle the sidenav state
  sidenav.classList.toggle("active");

  if (!isOpen) {
    // Expand sidenav
   
    sidenav.style.width = "6%";
    sidenav.classList.add("small");
    mainContent.style.width = "92%";
    logo.style.display = "none"; // Hide logo
    navLinkText.forEach(link => link.style.display = "none"); // Hide nav links
    menuIcon.innerHTML = `<i class="fa-solid fa-x"></i>`
    menuIcon.alt = "Menus"; // Update alt text
  } else {
    // Collapse sidenav
    sidenav.style.width = "20%";
    sidenav.classList.remove("small");
    mainContent.style.width = "80%";
    navLinks.style.width = "100%";
    logo.style.display = "block"; 
    navLinkText.forEach(link => link.style.display = "block");
    menuIcon.src = "./Assets/Images/hamburger.svg";
  }

  isOpen = !isOpen; // Toggle the open state
}

// Wait until the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", openNav);
});


// Select all navigation items
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all nav-items
    navItems.forEach(nav => nav.classList.remove('active'));

    // Add 'active' class to the clicked nav-item
    this.classList.add('active');
  });
});

//Bottom Nav

let lastScrollTop = 0;
const bottomNav = document.getElementById("bottomNav");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll Down - Hide the bottom navigation
    bottomNav.classList.add("hidden");
  } else {
    // Scroll Up - Show the bottom navigation
    bottomNav.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Initial setup
setEvents();
 