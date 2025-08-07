document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');

  // Open/close main menu
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  // Toggle dropdowns (mobile)
  document.querySelectorAll('.dropdown > a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = anchor.parentElement;
        parent.classList.toggle('open');
      }
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (
      nav.classList.contains('open') &&
      !nav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      nav.classList.remove('open');
      document.querySelectorAll('.dropdown.open').forEach(drop => drop.classList.remove('open'));
    }
  });
});

   
// section 6
 function scrollVideos(direction) {
      const container = document.getElementById("videoContainer1");
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }

// section 8   
    const sidebarHeadings = document.querySelectorAll(".sidebar-heading");
    const mainContent = document.getElementById("main-content");

    const sectionData = {
      "1": {
        items: [
          {
            heading: "How do I get enrolled in a Course in Payilagam?",
            paragraph: "Visit our website, explore courses, and fill out the enquiry form. You can also call or WhatsApp our Career Counselor."
          },
          {
            heading: "What are the Prerequisites for Full Stack Java, Full Stack Python and React Courses?",
            paragraph: "No prerequisites needed. Our courses are designed from scratch and taught in Mother Tongue."
          },
          {
            heading: "Shall I ask for a Free Demo session before enrolling for the course?",
            paragraph: "Yes! We encourage 1:1 demo sessions with trainers before you enroll."
          },
          {
            heading: "Will there be any registration fee for the course?",
            paragraph: "No separate registration fee. Any advance payment will be adjusted against course fee."
          }
        ]
      },
      "2": {
        items: [
          { 
            heading: "How does Payilagam make sure that the syllabus is updated one?",
            paragraph: "We update syllabi based on trainee feedback, interview trends, and industry standards."
          },
          { 
            heading: "Can I get the syllabus before joining?", 
            paragraph: "Absolutely. Knowing the syllabus helps set expectations and prepares the mindset."
          },
          {
            heading: "Are you providing 100% Practical sessions?",
            paragraph:"Yes, mostly practical with some theoretical foundation where needed."
          }
        ]
      },
      "3": {
        items: [
          { 
            heading: "What kind of projects a trainee will do in the Course?",
            paragraph: "Mini and major projects in each phase to apply concepts across domains."
          },
          { 
            heading: "Are the projects Individual or Team Based?", 
            paragraph: "Both! Individual for showcasing skills, team for real-world collaboration."
          },
          {
            heading: "How can one show these projects?",
            paragraph: "Via GitHub and live hosting. We train in git and version control."
          }
        ]
      },
      "4": {
        items: [
          { 
            heading: "Will I receive a Certificate after the course?", 
            paragraph: "Yes. It includes your blog and GitHub links showcasing consistent learning."
          },
          { 
            heading: "Is Payilagam Certicicate recognized one?", 
            paragraph: "Yes, we are government-registered and recognized by many IT employers."
          }
        ]
      },
      "5": {
        items: [
          {
            heading: "What type of Placements Payilagam offers?",
            paragraph: "Excellent placement assistance in IT companies, especially in Chennai."
          },
          {
            heading: "When can I start attending Interviews?",
            paragraph: "From day one! It helps stay focused and updated on industry needs."
          },
          {
            heading: "How many interviews can we attend?",
            paragraph: "Unlimited — until you get placed."
          },
          {
            heading: "How do Payilagam make trainees placement ready?",
            paragraph: "Mock interviews, aptitude training, and communication sessions prepare trainees well."
          }
        ]
      },
      "6": {
        items: [
          {
            heading: "Does Payilagam support Open Source?",
            paragraph: "Yes! We’re closely involved with communities like Kaniyam and Wikipedia Tamil."
          },
          {
            heading: "What is unique in Payilagam Training?",
            paragraph: "We focus on activity-based learning, tech blogs, open-source events, and hackathons."
          }
        ]
      }
    };

sidebarHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    sidebarHeadings.forEach((h) => h.classList.remove("active"));
    heading.classList.add("active");

    const sectionId = heading.getAttribute("data-section");
    const section = sectionData[sectionId];

    // Clear and add content
    mainContent.innerHTML = "";
    section.items.forEach((item, index) => {
      const subSection = document.createElement("div");
      const mainHeading = document.createElement("div");
      const content = document.createElement("div");

      subSection.className = "sub-section";
      mainHeading.className = "main-heading";
      mainHeading.textContent = item.heading;

      content.className = "content";
      content.innerHTML = `<p>${item.paragraph}</p>`;

      mainHeading.addEventListener("click", () => {
        const isAlreadyOpen = content.classList.contains("show");
        document.querySelectorAll(".content.show").forEach(el => el.classList.remove("show"));
        if (!isAlreadyOpen) content.classList.add("show");
      });

      subSection.appendChild(mainHeading);
      subSection.appendChild(content);
      mainContent.appendChild(subSection);

      if (index === 0) content.classList.add("show");
    });

    // Toggle right content for mobile
    if (window.innerWidth <= 768) {
      // const isVisible = mainContent.classList.contains("show");
      // document.querySelectorAll('.main-content').forEach(c => c.classList.remove('show'));
      // if (!isVisible) 
      mainContent.classList.add("show");
    }
  });
});

    // Auto-load first section
    sidebarHeadings[0].click();