import React, { useState, useEffect } from 'react';
import { ChevronsLeft, ChevronsRight, User, Mail, Briefcase, GitBranch, Award, GraduationCap, Code, Star, ExternalLink, Moon, Sun, BookOpen, Cpu, Database, Cloud, Cog, Zap, Linkedin, Github, Globe } from 'lucide-react';

// --- Mock Data ---
const personalInfo = {
  name: "Ruchir Srivastava",
  title: "Data Scientist / Full Stack Developer",
  location: "New Delhi, IN",
};

const aboutMe = {
  icon: <User />,
  title: "About Me",
  points: [
    "Data Scientist - AI Engineer",
    "Full Stack Developer",
    "prev - ds intern @ ValianceAI",
    "based in new delhi",
    "builds ai solutons for real-world problems",
    "loves ai, machine learning & cats",
    "obsessed with solving real-world problems",
  ],
};

const contactInfo = {
    icon: <Mail />,
    title: "Contact",
    description: "I'm always open to new opportunities and collaborations. Feel free to reach out!",
    email: "work.sruchir@gmail.com",
    linkedin: "https://www.linkedin.com//in/ruchir-srivastava-a6b568282/",
    github: "https://github.com/ssshaise",
    website: "https://example.com"
};

const experiences = [
  {
    role: "Data Scientist Intern",
    company: "ValianceAI | Gurgaon, IN",
    duration: "Jan 2025 - April 2025",
    description: "At ValianceAI, I helped develop AI-based systems for email threat detection, working on datasets, Python prototypes, and production-ready code. I also contributed to patent research and strengthened my ML and cybersecurity skills through global collaboration.",
  },
  {
    role: "Web Dev Intern",
    company: "Neuramonks | New Delhi, IN",
    duration: "Jan 2024 - March 2024",
    description: "Worked with the dev team to build user-friendly web apps using ReactJS. Wrote clean code, handled integration and debugging, and contributed to code reviews. Enhanced skills in React, JavaScript, HTML/CSS, and RESTful APIs.",
  },
];

const projects = [
    {
        title: "ReasearchGpt",
        description: "Built and deployed an AI chatbot using LangChain and Gemini-Pro for fast, accurate document analysis across PDFs, images, and text with FAISS-based retrieval.",
        tags: ["Python", "LangChain", "Streamlit", "FAISS"],
        image: "C:/Users/ruchi/my-portfolio-react/public/img1.png",
        repoUrl: "https://github.com/ssshaise/ResearchGPT"
    },
    {
        title: "PlantGuard",
        description: "Built a high-accuracy plant disease detection system using EfficientNet and DeepLabV3, achieving 92% classification accuracy with custom-labeled, augmented data and precise leaf segmentation.",
        tags: ["Python", "OpenCV","Tensorflow", "EfficientNet"],
        image: "C:/Users/ruchi/my-portfolio-react/public/img2.png",
        repoUrl: "https://github.com/ssshaise/PlantGuard"
    },
    {
        title: "Deepfake Detector with XAI",
        description : "Designed a multi-modal deepfake and disinformation detection system integrating visual and textual data, achieving a 92% F1-score with interpretability via SHAP and LIME.",
        tags : ["Python", "PyTorch", "OpenCV", "BERT" , "SHAP", "LIME"],    
        image: "C:/Users/ruchi/my-portfolio-react/public/img3.png",
        repoUrl: "https://github.com/ssshaise/Deepfake-Disinformation-Detector"
    },
];

const education = {
    degree: "Bachelors Degree in Computer Science",
    college: "Jaypee Institute of Information Technology",
    location: "Noida, UP, IN",
    duration: "July 2023 - Present"
};

const skills = [
    {
        category: "Languages",
        icon: <Code size={20} className="text-purple-400"/>,
        items: ["Python", "SQL", "C++", "JavaScript", "TypeScript" , "Ruby" , "Java"]
        
    },
    {
        category: "AI/ML",
        icon: <Zap size={20} className="text-blue-400"/>,
        items: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLTK" , "LangChain"]

    },
    {
        category: "Frontend",
        icon: <Cpu size={20} className="text-green-400"/>,
        items: ["React.js", "Next.js", "Tailwind", "Streamlit"]
    },
    {
        category: "Backend",
        icon: <Cloud size={20} className="text-blue-400"/>,
        items: ["Node.js", "Express.js", "FastAPI" , "Flask"]
    },
    {
        category: "Database",
        icon: <Database size={20} className="text-yellow-400"/>,
        items: ["MongoDB", "PostgreSQL", "Supabase"]
    },
    {
        category: "DevOps",
        icon: <Cog size={20} className="text-red-400"/>,
        items: ["AWS", "Docker", "Vercel", "CI/CD"]
    },
    
];

const achievements = [
    {
        icon: <Award size={20} className="text-yellow-400"/>,
        title: "Applied Data Science with Python Specialization",
        description: "University of Michigan",
    },
     {
        icon: <Star size={20} className="text-yellow-400"/>,
        title: "Data science Fundamentals with Python and SQL",
        description: "IBM",
    },
    {
        icon: <Star size={20} className="text-yellow-400"/>,
        title: "Machine Learning A-Z",
        description: "Udemy - Kirill Eremenko",
    },
    {
        icon: <Star size={20} className="text-yellow-400"/>,
        title: "Deep Learning A-Z",
        description: "Udemy - Kirill Eremenko",
    }
]

const latestPosts = [
    {
        date: "May 20, 2024",
        title: "Integrating OpenAI API with a Streamlit App",
        image: "https://i.postimg.cc/kXP1BZS5/Screenshot-2025-06-20-035237.png"
    }
];


// --- Helper Components ---
const Card = ({ children, className = '', style = {} }) => (
  <div style={style} className={`w-full bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 transition-all duration-300 ease-in-out hover:border-white/20 hover:bg-black/40 ${className}`}>
    {children}
  </div>
);


const SectionTitle = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-4 md:mb-6">
        <div className="bg-slate-800/60 p-2 rounded-full border border-white/10">
            {React.cloneElement(icon, { size: 20, className: "text-slate-300" })}
        </div>
        <h2 className="text-2xl md:text-3xl text-slate-200 tracking-wider">{title}</h2>
    </div>
);

// --- Main Sections ---

const Header = ({ className = '', style = {} }) => (
    <div className={className} style={style}>
        <h1 className="text-4xl md:text-5xl text-slate-100 tracking-tighter">{personalInfo.name}</h1>
        <p className="text-slate-300 mt-2 text-lg md:text-xl">{personalInfo.title}</p>
        <p className="text-slate-400 text-sm md:text-base">{personalInfo.location}</p>
    </div>
);

const AboutCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={aboutMe.icon} title={aboutMe.title} />
        <div className="space-y-3 text-slate-300 text-base md:text-lg leading-relaxed">
            {aboutMe.points.map((point, i) => (
                <p key={i} className="transition-colors duration-200 hover:text-purple-300 cursor-default">
                    {point}
                </p>
            ))}
        </div>
    </Card>
);

const ContactCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={contactInfo.icon} title={contactInfo.title} />
        <p className="text-sm md:text-base mb-4">{contactInfo.description}</p>
        <div className="flex flex-col gap-3">
            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm md:text-base text-slate-200 hover:text-purple-400 transition-colors">
                <Mail size={16} />
                <span>{contactInfo.email}</span>
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm md:text-base text-slate-200 hover:text-purple-400 transition-colors">
                <Linkedin size={16} />
                <span>LinkedIn</span>
            </a>
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm md:text-base text-slate-200 hover:text-purple-400 transition-colors">
                <Github size={16} />
                <span>GitHub</span>
            </a>
            <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm md:text-base text-slate-200 hover:text-purple-400 transition-colors">
                <Globe size={16} />
                <span>Website</span>
            </a>
        </div>
    </Card>
);

const GithubActivity = ({ className = '', style = {} }) => {
    // Static contribution data to ensure consistency
    const contributions = [
      0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 0, 0, 1, 0, 3, 2, 1, 0, 0,
      0, 1, 0, 2, 0, 0, 0, 0, 2, 1, 0, 0, 0, 1, 0, 3, 2, 0, 0, 0, 1,
      1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      2, 1, 0, 1, 2, 0, 1, 3, 1, 2, 0, 1, 0, 1, 2, 0, 1, 2, 1, 0, 0,
      1, 2, 3, 2, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2,
      1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 2, 0, 1, 3, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 0,
      1, 2, 3, 2, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2,
      1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 2, 0, 1, 3, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 0,
      1, 2, 3, 2, 1, 0, 0, 1, 2, 1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 1, 2,
      1, 2, 0, 1, 2, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getColor = (level) => {
        if (level === 0) return 'bg-slate-800/80';
        if (level === 1) return 'bg-green-900';
        if (level === 2) return 'bg-green-700';
        if (level === 3) return 'bg-green-500';
        return 'bg-green-400';
    };

    return (
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">
            <Card className={className} style={style}>
                <SectionTitle icon={<GitBranch />} title="GitHub Activity" />
                <div className="overflow-x-auto">
                    <div className="flex justify-between text-xs text-slate-400 mb-2 min-w-[600px]">
                        {months.map(month => <span key={month} className="flex-1 text-center">{month}</span>)}
                    </div>
                    <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[600px]">
                        {contributions.map((level, i) => (
                            <div key={i} className={`w-full aspect-square rounded-sm ${getColor(level)}`} title={`Contribution level: ${level}`}></div>
                        ))}
                    </div>
                </div>
                 <div className="flex flex-wrap justify-between items-center mt-2 text-xs md:text-sm text-slate-400">
                    <span>343 contributions in the last year</span>
                    <div className="flex items-center gap-1 mt-2 md:mt-0">
                        <span>Less</span>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-slate-800/80"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-green-900"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-green-700"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-green-500"></div>
                        <div className="w-2 h-2 md:w-3 md:h-3 rounded-sm bg-green-400"></div>
                        <span>More</span>
                    </div>
                </div>
            </Card>
        </a>
    );
};


const ProjectCard = ({ className = '', style = {} }) => {
    const [current, setCurrent] = useState(0);

    const nextProject = () => setCurrent(prev => (prev + 1) % projects.length);
    const prevProject = () => setCurrent(prev => (prev - 1 + projects.length) % projects.length);
    
    const project = projects[current];

    return (
        <Card className={className} style={style}>
            <div className="flex justify-between items-center mb-4">
                 <SectionTitle icon={<Briefcase />} title="Projects" />
                <div className="flex items-center gap-2">
                    <button onClick={prevProject} className="p-2 bg-slate-800/80 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                        <ChevronsLeft size={16} className="text-slate-300"/>
                    </button>
                    <button onClick={nextProject} className="p-2 bg-slate-800/80 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                        <ChevronsRight size={16} className="text-slate-300"/>
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="font-bold text-xl md:text-2xl text-white">{project.title}</h3>
                    <p className="text-slate-300 text-sm md:text-base">{project.description}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-800/80 text-purple-300 text-xs md:text-sm px-2 py-1 rounded-full border border-slate-700">{tag}</span>
                ))}
            </div>
            <div className="mt-4">
                <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm md:text-base text-slate-200 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-700 hover:text-purple-400 transition-colors"
                >
                    <Github size={16} />
                    <span>View on GitHub</span>
                </a>
            </div>
        </Card>
    );
};

const ExperienceCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={<Briefcase />} title="Experience" />
        <div className="space-y-6">
            {experiences.map((exp, i) => (
                <div key={i} className="flex gap-4">
                    <div className="w-1 bg-slate-700 rounded-full"></div>
                    <div>
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-slate-200 text-base md:text-lg">{exp.role}</h3>
                            <span className="text-xs md:text-sm text-slate-500">{exp.duration}</span>
                        </div>
                        <p className="text-purple-400 text-sm md:text-base">{exp.company}</p>
                        <p className="text-slate-400 text-sm md:text-base mt-1">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </Card>
);

const EducationCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={<GraduationCap />} title="Education" />
        <h3 className="font-bold text-slate-200 text-base md:text-lg">{education.degree}</h3>
        <p className="text-purple-400 text-sm md:text-base">{education.college}</p>
        <p className="text-slate-500 text-xs md:text-sm mt-1">{education.location}</p>
        <p className="text-slate-500 text-xs md:text-sm">{education.duration}</p>
    </Card>
)

const SkillsCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={<Star />} title="Skills" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map(skillGroup => (
            <div key={skillGroup.category}>
                <div className="flex items-center gap-2 mb-3">
                    {skillGroup.icon}
                    <h3 className="font-bold text-slate-300 text-base md:text-lg">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map(item => (
                        <span key={item} className="bg-slate-800/80 text-slate-300 text-xs md:text-sm px-3 py-1.5 rounded-full border border-slate-700">{item}</span>
                    ))}
                </div>
            </div>
        ))}
        </div>
    </Card>
);

const AchievementsCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={<Award />} title="Certifications" />
        <div className="space-y-4">
            {achievements.map((ach, i) => (
                <div key={i} className="flex items-start gap-3">
                    {ach.icon}
                    <div>
                        <h4 className="font-bold text-slate-200 leading-tight text-base md:text-lg">{ach.title}</h4>
                        <p className="text-sm md:text-base text-slate-400">{ach.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </Card>
)

const LatestPostsCard = ({ className = '', style = {} }) => (
    <Card className={className} style={style}>
        <SectionTitle icon={<BookOpen />} title="Latest Posts" />
        {latestPosts.map((post, i) => (
            <div key={i}>
                <img src={post.image} alt={post.title} className="rounded-lg mb-3"/>
                <p className="text-xs md:text-sm text-slate-500">{post.date}</p>
                <h3 className="font-bold text-slate-200 mb-2 text-base md:text-lg">{post.title}</h3>
                <a href="#" className="flex items-center gap-1 text-sm md:text-base text-purple-400 hover:underline">
                    Read more <ExternalLink size={14} />
                </a>
            </div>
        ))}
    </Card>
)

const ThemeToggle = ({ theme, setTheme }) => {
    const toggleTheme = () => {
        setTheme(currentTheme => currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button 
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 p-2 bg-slate-800/80 rounded-full border border-slate-700/50 hover:border-purple-500/80 transition-all"
        >
            {theme === 'dark' ? <Sun className="text-yellow-300" /> : <Moon className="text-purple-300" />}
        </button>
    )
};


// --- Main App Component ---

export default function App() {
    const [theme, setTheme] = useState('dark'); // 'light' or 'dark'

    const themeConfig = {
        light: {
            bgImage: '/assetss/light.png',
        },
        dark: {
            bgImage: '/assetss/dark.jpg',
        },
    };
    
    // Preload background images to prevent twitching
    useEffect(() => {
        const lightBg = new Image();
        lightBg.src = themeConfig.light.bgImage;
        const darkBg = new Image();
        darkBg.src = themeConfig.dark.bgImage;
    }, []);

    useEffect(() => {
        const currentBgImage = theme === 'light' ? themeConfig.light.bgImage : themeConfig.dark.bgImage;
        document.body.style.backgroundImage = `url('${currentBgImage}')`;
        document.body.style.color = '#E2E8F0';
        document.body.style.transition = 'background-image 0.5s ease-in-out';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundColor = theme === 'light' ? '#1e293b' : '#020617';
        document.body.style.fontFamily = "'VT323', monospace";

    }, [theme]);

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
                    .fade-in {
                        animation: fadeInAnimation 0.5s ease-in-out both;
                    }

                    @keyframes fadeInAnimation {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <main className="min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <AboutCard className="fade-in" style={{ animationDelay: '0.2s' }}/>
                        <ContactCard className="fade-in" style={{ animationDelay: '0.3s' }}/>
                        <EducationCard className="fade-in" style={{ animationDelay: '0.4s' }}/>
                        <LatestPostsCard className="fade-in" style={{ animationDelay: '0.5s' }}/>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        <Header className="fade-in" style={{ animationDelay: '0.1s' }}/>
                        <GithubActivity className="fade-in" style={{ animationDelay: '0.6s' }}/>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-start">
                           <div className="flex flex-col gap-6">
                                <ProjectCard className="fade-in" style={{ animationDelay: '0.7s' }}/>
                                <ExperienceCard className="fade-in" style={{ animationDelay: '0.9s' }}/>
                           </div>
                           <div className="flex flex-col gap-6">
                                <SkillsCard className="fade-in" style={{ animationDelay: '0.8s' }}/>
                                <AchievementsCard className="fade-in" style={{ animationDelay: '1.0s' }}/>
                           </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}
