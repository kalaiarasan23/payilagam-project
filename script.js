document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    // Toggle main nav open/close
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    // Mobile submenu toggle (open & close on re-click)
    document.querySelectorAll('.dropdown > a').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const parent = anchor.parentElement;

          parent.classList.toggle('open');
        }
      });
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
        title: "",
        items: [
          {
            heading: "How do I get enrolled in a Course in Payilagam?",
            paragraph:
              "It is very simple. Visit our website, go through all the courses, select the one which suits best for your career path, Fill the Enquiry form. Want to get swift reply? A quick call / whatsapp to our Career Councillor is also an easy way for enrollment."
          },
          {
            heading: "What are the Prerequisites for Full Stack Java, Full Stack Python and React Courses?",
            paragraph:
              "No prerequisite is needed. Our courses will be in Mother Tongue and are well tailored to meet the requirements from the basics. Thus anyone with interest can reach good heights."
          },
          {
            heading: "Shall I ask for a Free Demo session before enrolling for the course?",
            paragraph:
              "Yes, we encourage every trainee to have a 1:1 session with the trainer before joining. Knowing in advance, How the session will be conducted is good for Trainees."
          },
          {
            heading: "Will there be any registration fee for the course?",
            paragraph:"Separate registration fee will not be there. If trainees pay any fee in advance, it will be adjusted against their Course fee."
          }
        ]
      },
      "2": {
        title: "",
        items: [
          { 
            heading: "How does Payilagam make sure that the syllabus is updated one?",
            paragraph: "Our training syllabus is designed by IT Professionals to make sure that our syllabus meets the current requirements and trends. We regularly update our syllabus based on the feedback collected from our trainees, based on their Interview and Project experiences." 
          },
          { 
            heading: "Can I get the syllabus before joining?", 
            paragraph: "Yes, for sure. Informed Decision is very essential for a trainee. They should know the syllabus and understanding they are going to study, setups a clear mind set for learning." 
          },
          {
            heading: "Are you providing 100% Practical sessions?",
            paragraph:"We believe Computer Science and IT is one such field where everything will be taught practically. Though most of our sessions will be practical oriented, Few topics related to concepts will be trained theoretically."
          }
        ]
      },
      "3": {
        title: "",
        items: [
          { 
            heading: "What kind of projects a trainee will do in the Course?",
            paragraph: "We believe in Projects based training. In each phase of the course, trainees will get involved in Mini Projects and Projects. Main goal of these projects is to apply what they learnt in different domains and technologies." 
          },
          { 
            heading: "Are the projects Individual or Team Based?", 
            paragraph: "It is of both, Individual and Team Based. Individual Projects are for show casing your expertise where as Team Based Projects are for Sharing your knowledge, getting ideas from others, to make you ready for real IT environment." 
          },
          {
            heading: "How can one show these projects?",
            paragraph: "We train them git, Version Control System and ask the trainees to push code regularly in git. All Web based Projects will be hosted here, Thus Trainees can show these projects everywhere, including Interviews."
          }
        ]
      },
      "4": {
        title: "",
        items: [
          { 
            heading: "Will I receive a Certificate after the course?", 
            paragraph: "Upon successfully completing the course, Payilagam awards you a certification that acknowledges your expertise and proficiency in the course, you did. This certificate includes your blog link and git link and through these, every one can understand your consistent work, commitment, and in-depth understanding of the course, helping you stand out in the job market." 
          },
          { 
            heading: "Is Payilagam Certicicate recognized one?", 
            paragraph: "Yes, Payilagam is a Government-Registered Training Institute and it is highly regarded by Industrial experts." 
          }
        ]
      },
      "5": {
        title : "",
        items: [
          {
            heading: "What type of Placements Payilagam offers?",
            paragraph: "Payilagam, being in the Software training sector for more than 12 years in Chennai, gives excellent Placement Assistance in IT, Software Organizations in and around Chennai."
          },
          {
            heading: "When can I start attending Interviews?",
            paragraph: "From Day 1, One can start attending interviews. We strongly believe attending interviews during the course itself, will make the trainee more active and aware about current needs."
          },
          {
            heading: "How many interviews can we attend?",
            paragraph: "Attending interviews is for getting placed. hence, we dont fix any number on that. Until the trainee gets placed, attending interviews is supported."
          },
          {
            heading: "How do Payilagam make trainees placement ready?",
            paragraph: "Through Regular Mock Interviews will make our Trainees to get to their strength and areas to improve. Separate Aptitude Training, Communication sessions will make them ready for placements."
          }

        ]
      },
      "6": {
        title: "",
        items: [
          {
            heading: "Does Payilagam support Open Source?",
            paragraph: "Yes, Payilagam stands with Open Source Communities. Payilagam travels closely with familiar Open Source Communities including Kaniyam, Tamil Linux Community, Wikipedia."
          },
          {
            heading: "What is unique in Payilagam Training?",
            paragraph: "Payilagam believes in activity based training. Mere Lecturing technical sessions cannot give 100% Training. Participating Hackathon Events, Open Source Tech Meetups, Writing Tech blogs, Being member of tech forums are part of our Training along with regular class room and online trainings."
          }
        ]
      }
    };

sidebarHeadings.forEach((heading) => {
  heading.addEventListener("click", () => {
    // Remove 'active' from all headings
    sidebarHeadings.forEach((h) => h.classList.remove("active"));

    // Add 'active' to clicked one
    heading.classList.add("active");

    const sectionId = heading.getAttribute("data-section");
    const section = sectionData[sectionId];

    // Clear and rebuild the content
    mainContent.innerHTML = `<h2>${section.title}</h2>`;

    section.items.forEach((item, index) => {
      const subSection = document.createElement("div");
      subSection.className = "sub-section";

      const mainHeading = document.createElement("div");
      mainHeading.className = "main-heading";
      mainHeading.textContent = item.heading;

      const content = document.createElement("div");
      content.className = "content";
      content.innerHTML = `<p>${item.paragraph}</p>`;

      mainHeading.addEventListener("click", () => {
        const isAlreadyOpen = content.classList.contains("show");

        // Close all open paragraphs
        document.querySelectorAll(".content.show").forEach(el => {
          el.classList.remove("show");
        });

        // Only toggle if it wasn't already open
        if (!isAlreadyOpen) {
          content.classList.add("show");
        }
      });

      subSection.appendChild(mainHeading);
      subSection.appendChild(content);
      mainContent.appendChild(subSection);

      if (index === 0) {
        content.classList.add("show");
      }
    });
  });
});


    // Trigger the first section by default
    sidebarHeadings[0].click();