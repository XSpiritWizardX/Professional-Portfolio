import "./AboutPage.css";
import MouseTrail from '../MouseTrail/MouseTrail'
import { useState, useRef, useEffect } from 'react';

function AboutPage() {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);

  const educationData = {
    appacademy: {
      title: "App Academy",
      subtitle: "Full Stack Software Engineering Bootcamp",
      duration: "2025 • 888+ hours • less than 3% acceptance rate",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020176/Screenshot_2025-07-08_201439_nblpc9.png",
      description: "Intensive full-stack software engineering program covering JavaScript, Python, React, Redux, Flask, SQLAlchemy, and more. Rigorous curriculum with less than 3% acceptance rate, focusing on real-world project development and industry best practices.",
      link: "https://www.appacademy.io/",
      skills: ["JavaScript", "Python", "React", "Redux", "Flask", "PostgreSQL", "Git", "Agile Development"]
    },
    insurance: {
      title: "Michigan Department of Insurance and Financial Services",
      subtitle: "MI Life Health and Accident Producer",
      duration: "2023 • Life, Accident, Health • License #20620121",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020553/Screenshot_2025-07-08_202218_pimujp.png",
      description: "Licensed insurance producer specializing in life, health, and accident insurance products. Comprehensive understanding of insurance regulations, risk assessment, and client consultation.",
      link: "https://difs.state.mi.us/locators?searchtype=InsAgent",
      skills: ["Risk Assessment", "Client Relations", "Insurance Law", "Financial Planning"]
    },
    google: {
      title: "Google Certifications",
      subtitle: "Digital Marketing & E-commerce",
      duration: "2023 • 7 courses • 7 certifications",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020989/Screenshot_2025-07-08_202937_rah2gi.png",
      description: "Comprehensive digital marketing and e-commerce certification program covering SEO, SEM, social media marketing, analytics, and e-commerce strategy. Hands-on experience with Google Ads, Analytics, and other marketing tools.",
      link: "https://grow.google/certificates/",
      skills: ["SEO/SEM", "Google Analytics", "Social Media Marketing", "E-commerce Strategy", "Data Analysis"]
    },
    associates: {
      title: "Glen Oaks Community College",
      subtitle: "Associates of General Studies",
      duration: "2023",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020682/Screenshot_2025-07-08_202425_tqw9ih.png",
      description: "Well-rounded education covering liberal arts, sciences, and foundational courses. Strong emphasis on critical thinking, communication, and analytical skills.",
      link: "https://www.glenoaks.edu/",
      skills: ["Critical Thinking", "Written Communication", "Research", "Problem Solving"]
    },
    cena: {
      title: "Glen Oaks Community College",
      subtitle: "Certified Emergency Nurse Aide",
      duration: "2017 • C.E.N.A. • Basic Life Support • CPR • First Responder",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020682/Screenshot_2025-07-08_202425_tqw9ih.png",
      description: "Certified Emergency Nurse Aide with comprehensive training in patient care, emergency response, and medical assistance. Includes CPR certification and first responder training.",
      link: "https://www.glenoaks.edu/",
      skills: ["Patient Care", "Emergency Response", "CPR", "Medical Assistance", "Crisis Management"]
    },
    fullsail: {
      title: "Full Sail University",
      subtitle: "Bachelor of Music",
      duration: "2013 • Recording Arts • Music Production • Performing Arts",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752021426/Screenshot_2025-07-08_203311_sp6ilx.png",
      description: "Comprehensive music education covering music production, audio engineering, music theory, and creative composition. Hands-on experience with industry-standard equipment and software.",
      link: "https://www.fullsail.edu/",
      skills: ["Music Production", "Audio Engineering", "Creative Composition", "Pro Tools", "Sound Design"]
    }
  };

  const experienceData = {
    freelance: {
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      duration: "2025 - Present",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752259405/8e811080efc3d9025fcb06ca2b909903_y7gpvg.png",
      description: "Full-stack web development and creative services for diverse clients. Specializing in React applications, Python backends, and multimedia content creation. Successfully delivered 4+ projects ranging from e-commerce platforms to creative portfolios.",
      achievements: ["Built 4+ full-stack applications"],
      skills: ["React", "Python", "JavaScript", "Web Design", "Client Relations", "Project Management"]
    },
    insurance_agent: {
      title: "Insurance Producer",
      company: "Independent Agent",
      duration: "2023 - 2024",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752020441/Screenshot_2025-07-08_202018_fmjlpj.png",
      description: "Licensed insurance producer helping families and individuals secure their financial future through comprehensive insurance solutions. Specialized in life, health, and accident coverage with focus on client education and long-term relationships.",
      achievements: ["Maintained 95% client retention rate"],
      skills: ["Sales", "Risk Assessment", "Financial Planning", "Client Consultation", "Regulatory Compliance"]
    },
    digital_marketing: {
      title: "Digital Marketing Specialist",
      company: "AI Edge Marketing Innovations llc",
      duration: "2022 - Present",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752263709/470589136_122251930028007142_8438325034571951274_n_buluzx.jpg",
      description: "Independent digital marketing consultant helping small businesses grow their online presence through strategic marketing, branding, SEO, and e-commerce optimization. Collaborated with local entrepreneurs to improve lead generation, increase brand visibility, and drive measurable business results. Actively managing multiple client projects across industries.",
      achievements: [
        "Built and executed digital marketing strategies for 10+ clients",
        "Generated consistent lead flow increases of 30-60% for local businesses",
        "Designed marketing funnels integrating SEO, social, and paid ads"
      ],
      skills: [
        "SEO/SEM",
        "Content Marketing",
        "Google Analytics",
        "Email Campaigns",
        "Social Media Strategy",
        "E-commerce Optimization",
        "Conversion Rate Optimization",
        "Client Consultation"
      ]
    },
    music_producer: {
      title: "Music Producer & Audio Engineer",
      company: "Independent Studio",
      duration: "2013 - Present",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752259078/Screenshot_2025-07-11_143745_lkgfay.png",
      description: "Professional music production and audio engineering services. Created 100+ original compositions and provided production services for various artists.",
      achievements: ["Produced 100+ original songs", "Worked with 50+ independent artists", "Songs featured in commercial projects"],
      skills: ["Pro Tools", "Big Show Events", "Audio Engineering", "Music Composition", "Mixing & Mastering", "Recording Arts", "Creative Direction"]
    },
    welder: {
      title: "Aluminum and Steel Fabricator",
      company: "Heartland RV",
      duration: "2020 - 2022",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752258776/Screenshot_2025-07-11_143237_kurh63.png",
      description: "Skilled in aluminum and steel fabrication, specializing in the production of high-quality RV components. Experienced in welding, assembly, and quality control.",
      achievements: ["Improved production efficiency by approximately 20% reducing overall hours worked"],
      skills: ["Welding", "Metal Fabrication", "Blueprint Reading", "Quality Control", "Team Collaboration"]
    },
    management: {
      title: "Assistant Supervisor",
      company: "L&W Engineering",
      duration: "2017 - 2020",
      image: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752259581/Screenshot_2025-07-11_144505_evfhks.png",
      description: "Assisting the supervisor in setting and managing daily operations. Enforcing company policies and regulations to ensure a safe, efficient work environment. Addressing employee concerns and resolving conflicts in the workplace.",
      achievements: ["Consecutive record breaking years"],
      skills: ["Training", "Welding", "Blueprints", "Work Orders", "Team Collaboration", "Employee Management"]
    }
  };

  const sliderImages = [
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/462504050_8324973944218688_6095070514255415304_n_drhvmy.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/464703713_8431656183550463_41070255764846273_n_v4mkkh.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266469/486524127_876934974597_3649905681763471383_n_hlmnma.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/508684493_9930760043640062_7706863925786017126_n_a6ase1.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963856/472684932_8842676349115109_2028848718984112102_n_xm2fqm.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266474/117259803_3075331939182941_4548598536456611273_n_bou136.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266474/513884253_9996585583724174_6859876047789979882_n_ksrrvp.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/508347585_9923496591033074_2592465059541117192_n_zk6kdu.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266470/82564325_2572358646146942_1435293846014525440_n_zgpqci.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266468/91584758_2749982778384527_9040651767167057920_n_q2awvf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266469/120068844_3219613194754814_9026856366763039769_n_hvozmf.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266469/472815714_8842673192448758_7327166257997971578_n_xpy6sd.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266468/94303650_2803179716398166_1319905598237573120_n_nip2ay.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266469/92960357_2777792588936879_5293351195782414336_n_t4xncz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266469/473112738_8862977803751630_5214390945497803965_n_f4crn0.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/486367749_9289267531122653_156845269448536755_n_i1m4la.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266471/486493016_9289256701123736_4777542463218005931_n_geft2k.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/486125577_9289256967790376_5864431969479406081_n_msncs4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/486397904_9289269244455815_9064487246997730991_n_qqq0zz.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266473/486065485_9289270221122384_8204430616352629513_n_kjub3h.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752266475/486090099_9289284401120966_3716620882894029159_n_oenwt4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1748132663/486354092_9289268864455853_8457108257314763719_n_nrrd2m.jpg",
    },
    {
      src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1752268509/IMG_6061_hoeepp.jpg",
    },

    /* ADD MORE PICTURRES OF FAMILY AND STUFF*/
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },
    // {
    //   src: "https://res.cloudinary.com/dl6ls3rgu/image/upload/v1747963870/485761821_9289269257789147_3271802936818663508_n_v9keh4.jpg",
    // },

  ];

  // Slider functionality
  const moveSlide = (direction) => {
    const slides = slidesRef.current;
    if (!slides) return;

    const totalSlides = sliderImages.length;
    const newIndex = (currentSlide + direction + totalSlides) % totalSlides;

    setCurrentSlide(newIndex);
    slides.style.transform = `translateX(${-newIndex * 100}%)`;
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(${-index * 100}%)`;
    }
  };

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle keyboard navigation for slider
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        moveSlide(-1);
      } else if (e.key === 'ArrowRight') {
        moveSlide(1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const closeDialog = () => {
    setSelectedEducation(null);
    setSelectedExperience(null);
  };

  // Handle escape key for closing dialogs
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeDialog();
      }
    };

    if (selectedEducation || selectedExperience) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [selectedEducation, selectedExperience]);

  return (
    <div className="about-page">
      <MouseTrail/>

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-content">
          <div className="about-text">
            <h1>About Dustin Bovee</h1>
            <p className="about-subtitle">Creative Visionary — Innovative Thinker</p>
          </div>

          <div className="about-img-wrapper">
            <div className="about-image-inner">
              <img
                className="about-image"
                src="https://res.cloudinary.com/dl6ls3rgu/image/upload/v1748132681/485807983_9289284137787659_7415467271367767227_n_vytilr.jpg"
                alt="Dustin Bovee - Professional Portrait"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about-sections">
        {/* My Story Section */}
        <section className="about-section">
                 <h2>My Story</h2>
          <p>
            Hello. My name is Dustin, and I&apos;m a creative visionary, software engineer, and father of five with a passion for music, technology, and living a life of meaning. My journey hasn&apos;t been a straight line—it&apos;s been a story of resilience, reinvention, and deep commitment to my family and personal growth.
            <br /><br />
            I fell in love with music as a teenager growing up in the Midwest. I joined a touring band as the lead guitarist. Travelling and playing at many great venues across the country. After earning a Bachelor&apos;s in Music from Full Sail University, I got married and chose to step away from the band and touring to build a home and raise a family. That decision was one of the most defining decisions of my life—and it shaped the man and professional I am today.
            <br /><br />
            Wanting to build a career close to my wife—who was also a Certified Emergency Nurse Assistant—I earned my own C.E.N.A. certification. Though I passed the state exam and entered the healthcare field, I quickly realized that path wasn&apos;t for me. Instead, I transitioned to the trades and began working at L&W Engineering as a welder. I poured myself into that craft, earning four promotions in just two years and eventually becoming Assistant Supervisor.
            <br /><br />
            In 2020, as the COVID-19 pandemic reshaped the world, I moved to Heartland RV to work fewer hours while supporting my growing family. While there, I earned an Associate&apos;s of General Studies and completed seven Google certifications in digital marketing and e-commerce. I began helping local businesses build their online presence and generate leads through digital strategy—finding new ways to blend creativity, business, and technology.
            <br /><br />
            My next chapter was motivated by a desire for financial independence. I launched an independent insurance agency alongside my wife. We both became licensed insurance producers in Michigan, specializing in life, health, and accident coverage. For over a year, I helped families plan their futures, budget with intention, and understand how to use life insurance as an investment tool. This work taught me how to listen, communicate, and serve.
            <br /><br />
            All the while, I continued to support my community by offering digital marketing support, audio engineering services, and financial education. But I knew there was one path I hadn&apos;t fully pursued—software engineering. Technology had been a part of my life since my early teens, and now I was ready to go all in.
            <br /><br />
            I enrolled in App Academy, one of the most selective and intensive full-stack software engineering bootcamps in the country. The program was rigorous—888+ hours of hands-on learning, coding challenges, and full-stack project builds. I mastered tools like JavaScript, Python, React, Flask, and PostgreSQL, and learned to thrive in collaborative, fast-paced environments. I graduated in May 2025 as a full-stack software engineer.
            <br /><br />
            Then, in June 2025, just one month after graduation, I had a heart attack. It was terrifying, and it changed everything. In the weeks that followed, I committed to living healthier, being more present, and never taking time for granted. That moment gave me a renewed sense of urgency—not just in life, but in purpose.
            <br /><br />
            Today, I continue to work as a freelance software engineer, building applications, designing creative solutions, and learning advanced AI technologies to develop more sophisticated projects. I&apos;m always exploring new tools, pushing the limits of what I can create, and finding ways to bring value to those around me—especially my family. They remain my greatest inspiration in everything I do.
            <br /><br />
            Whether I&apos;m helping a business streamline operations, collaborating on a creative project, or writing the next line of code—I bring with me a spirit of curiosity, love, and resilience. Life is fragile, and I intend to make every moment count.
          </p>
        </section>





        {/* Image Slider Section */}
        <section className="about-slider">
          <h2>Life in Pictures</h2>
          <div className="slider">
            <button
              className="nav-btn prev"
              onClick={() => moveSlide(-1)}
              aria-label="Previous image"
            >
              ❮
            </button>

            <div className="slides" ref={slidesRef}>
              {sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  className="slide"
                  alt={image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>

            <button
              className="nav-btn next"
              onClick={() => moveSlide(1)}
              aria-label="Next image"
            >
              ❯
            </button>

            {/* Slide Indicators */}
            <div className="slide-indicators">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>






        {/* Education Section */}
        <section className="about-section">
          <h2>Education & Certifications</h2>
          <div className="education-grid">
            {Object.entries(educationData).map(([key, edu]) => (
              <div
                key={key}
                className="education-item rainbow-border-hover clickable"
                onClick={() => setSelectedEducation(key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedEducation(key);
                  }
                }}
              >
                <h3>{edu.title}</h3>
                <p>{edu.subtitle}</p>
                <span>{edu.duration}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="about-section">
          <h2>Professional Experience</h2>
          <div className="experience-grid">
            {Object.entries(experienceData).map(([key, exp]) => (
              <div
                key={key}
                className="experience-item clickable"
                onClick={() => setSelectedExperience(key)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedExperience(key);
                  }
                }}
              >
                <h3>{exp.title}</h3>
                <p>{exp.company}</p>
                <span>{exp.duration}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="about-section">
          <h2>What Drives Me</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">👨‍👩‍👧‍👦</div>
              <h3>Family First</h3>
              <p>My wife and five kids are my biggest motivation and inspiration for everything I create and work for.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Continuous Learning</h3>
              <p>I&apos;m passionate about staying current with new technologies and constantly improving my skills.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎨</div>
              <h3>Creative Problem Solving</h3>
              <p>I bring a unique creative perspective to technical challenges, finding innovative solutions.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>I thrive in team environments where diverse perspectives lead to breakthrough solutions.</p>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section className="about-section">
          <h2>Beyond Coding</h2>
          <div className="hobbies-grid">
            <div className="hobby-item">
              <h3>Music Production</h3>
              <p>Creating original music in my home studio with Pro-Tools. Over 100+ songs written... You probably heard one of mine and you didn&apos;t even know it.</p>
            </div>
            <div className="hobby-item">
              <h3>Film Making</h3>
              <p>Creating visually stunning works of art in videos. Studying Film theory, video editing tips and tricks, and Directing.</p>
            </div>
            <div className="hobby-item">
              <h3>Travel</h3>
              <p>Exploring new cultures and dreaming of retirement in the Caribbean. I love being out in nature and exploring the earth.</p>
            </div>
            <div className="hobby-item">
              <h3>Sports</h3>
              <p>Playing and watching sports, especially Football and Hockey. LETS GO DETROIT!!!</p>
            </div>
          </div>
        </section>
      </div>

      {/* Education Dialog */}
      {selectedEducation && (
        <div
          className="dialog-overlay"
          onClick={closeDialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby="education-dialog-title"
        >
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Close dialog"
            >
              ×
            </button>
            <div className="dialog-image">
              <img
                src={educationData[selectedEducation].image}
                alt={educationData[selectedEducation].title}
              />
            </div>
            <div className="dialog-body">
              <h3 id="education-dialog-title">{educationData[selectedEducation].title}</h3>
              <p className="dialog-subtitle">{educationData[selectedEducation].subtitle}</p>
              <p className="dialog-duration">{educationData[selectedEducation].duration}</p>
              <p className="dialog-description">{educationData[selectedEducation].description}</p>
              <div className="dialog-skills">
                <h4>Skills & Technologies:</h4>
                <div className="skills-tags">
                  {educationData[selectedEducation].skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="dialog-link">
                <a
                  href={educationData[selectedEducation].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dialog-cta"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Experience Dialog */}
      {selectedExperience && (
        <div
          className="dialog-overlay"
          onClick={closeDialog}
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-dialog-title"
        >
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="dialog-close"
              onClick={closeDialog}
              aria-label="Close dialog"
            >
              ×
            </button>
            <div className="dialog-image">
              <img
                src={experienceData[selectedExperience].image}
                alt={experienceData[selectedExperience].title}
              />
            </div>
            <div className="dialog-body">
              <h3 id="experience-dialog-title">{experienceData[selectedExperience].title}</h3>
              <p className="dialog-subtitle">{experienceData[selectedExperience].company}</p>
              <p className="dialog-duration">{experienceData[selectedExperience].duration}</p>
              <p className="dialog-description">{experienceData[selectedExperience].description}</p>
              <div className="dialog-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {experienceData[selectedExperience].achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="dialog-skills">
                <h4>Skills & Technologies:</h4>
                <div className="skills-tags">
                  {experienceData[selectedExperience].skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutPage;
