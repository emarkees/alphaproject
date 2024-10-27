const hamburger = document.getElementById("hamburger");
const menuIcon = document.getElementById("hamburger");
const navLinksContainer = document.querySelector(".nav-links-container");

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
