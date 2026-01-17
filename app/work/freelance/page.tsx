import Link from "next/link";
import { ArrowLeft, Calendar, Code, Globe, Zap } from "lucide-react";
import { TerminalHeader } from "../../components/TerminalHeader";

export default function FreelancePage() {
  const technologies = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Bootstrap",
    "Tailwind CSS",
    "React Native",
    "Responsive Design",
    "REST APIs",
    "Git",
  ];

  const learningJourney = [
    {
      phase: "Month 1-2: The Pivot",
      title: "Sound Engineer → Web Developer",
      description:
        "Events industry collapsed overnight due to COVID-19. Made the decision to transition from sound engineering to web development out of necessity. Intensive self-learning: HTML, CSS, JavaScript fundamentals through online resources and practice.",
    },
    {
      phase: "Month 3: First Production Project",
      title: "Coffee Shop Single Page Application",
      description:
        "Built first client project - a complete SPA for a local coffee shop using React. Though the business couldn't continue due to economic challenges, proved ability to deliver production-ready code after just 3 months of learning.",
    },
    {
      phase: "2020-2022: Collaborative Development",
      title: "Freelance Team Collaboration",
      description:
        "Joined forces with neighbor's small freelance team (developer, UX designer, server admin). Took on overflow work primarily focused on frontend development - forms, layouts, and designs for financial broker websites. Gained exposure to backend development and team collaboration.",
    },
    {
      phase: "2022: Remote Work from Ireland",
      title: "International Freelancing",
      description:
        "Relocated to Cork, Ireland with wife. Continued freelance work remotely to sustain living expenses in high-cost European market. Made local connections and collaborated with Irish developers while managing Chile-based projects.",
    },
  ];

  const projectFocus = [
    {
      title: "Financial Broker Platforms",
      description:
        "Frontend development for broker websites: complex forms, data visualization, responsive layouts for desktop and mobile",
      skills: "React, form validation, responsive design",
    },
    {
      title: "Business Websites",
      description:
        "Corporate landing pages and business websites with modern designs and mobile-first approach",
      skills: "HTML/CSS, JavaScript, Bootstrap",
    },
    {
      title: "Backend APIs",
      description:
        "RESTful APIs for data management, authentication, and third-party integrations (secondary focus)",
      skills: "Node.js, Express, MongoDB",
    },
  ];

  const keyLearnings = [
    "Rapid skill acquisition under pressure - production-ready in 3 months",
    "Self-directed learning and problem-solving without formal training",
    "Adapting to remote collaboration across time zones (Chile/Ireland)",
    "Client communication and requirement gathering",
    "Working with existing codebases and team standards",
    "Balancing multiple projects and deadlines independently",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      <TerminalHeader />

      <main className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Work</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-row items-center gap-6 mb-8">
            <div className="text-left">
              <h1 className="text-4xl font-bold text-cyan-400 mb-2">
                Freelance Developer
              </h1>
              <p className="text-2xl text-gray-300">Career Transition Period</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-cyan-400" />
              <span>May 2020 - Apr 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-cyan-400" />
              <span>Chile & Ireland</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={18} className="text-cyan-400" />
              <span>Sound Engineer → Developer</span>
            </div>
          </div>
        </div>

        {/* The Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">The Pivot</h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              When COVID-19 hit in early 2020, the events industry collapsed
              overnight. As a sound engineer whose livelihood depended on live
              events, I faced a critical choice: reinvent myself or struggle
              financially.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I chose to pivot to web development - not because I had a grand
              plan, but out of necessity. I dove into intensive self-learning:
              HTML, CSS, JavaScript, and React. What started as survival became
              a passion.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Within 3 months, I delivered my first client project - a Single
              Page Application for a local coffee shop. Though the business
              couldn&apos;t survive the pandemic&apos;s economic impact, the
              experience proved I could learn fast and deliver production-ready
              code under pressure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This period wasn&apos;t about accumulating an impressive portfolio
              - it was about survival, rapid learning, and having the courage to
              jump into an entirely new field without safety nets. Every project
              taught me something new, every mistake made me better.
            </p>
          </div>
        </section>

        {/* Learning Journey */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Learning Journey
          </h2>

          <div className="space-y-4">
            {learningJourney.map((phase, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                    <span className="text-cyan-400 font-semibold text-sm">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-cyan-400">
                        {phase.title}
                      </h3>
                      <span className="text-xs text-gray-400 mt-1 md:mt-0">
                        {phase.phase}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Focus Areas */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Project Focus Areas
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            {projectFocus.map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4"
              >
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {project.description}
                </p>
                <p className="text-cyan-400 text-xs">
                  <strong>Technologies:</strong> {project.skills}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ireland Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Globe size={24} />
            Ireland Experience (2022)
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              In 2022, my wife and I relocated to Cork, Ireland. The cost of
              living - particularly housing - was extremely high. My freelance
              work became crucial for sustaining ourselves financially while
              abroad.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              I continued working remotely with Chilean clients while making
              connections in the Irish tech community. This experience taught me
              how to manage projects across time zones, communicate
              asynchronously, and adapt to working in a different tech
              ecosystem.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The networking connections I made in Ireland&apos;s tech scene
              gave me exposure to international development practices and
              expanded my perspective on the global tech industry - experience
              that proved valuable when I later joined Walmart&apos;s
              international team.
            </p>
          </div>
        </section>

        {/* Collaboration Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Team Collaboration
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                Small Freelance Team
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Collaborated with a neighbor&apos;s freelance team consisting of
                a lead developer, UX designer, and server administrator. Took on
                overflow frontend work when the team had capacity constraints.
              </p>
              <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg px-4 py-3">
                <p className="text-gray-300 text-sm mb-2">
                  <strong className="text-cyan-400">Primary Focus:</strong>{" "}
                  Frontend development for financial broker platforms - complex
                  forms, data tables, responsive layouts
                </p>
                <p className="text-gray-300 text-sm">
                  <strong className="text-cyan-400">Secondary Exposure:</strong>{" "}
                  Backend APIs, server deployment, team workflows, client
                  communication
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                What This Taught Me
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span>
                    Working with existing codebases and following team
                    conventions
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span>
                    Code review processes and maintaining code quality standards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span>
                    Collaborating with designers and translating mockups to code
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">▸</span>
                  <span>
                    Managing deadlines and communicating progress with teammates
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Skills Developed */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Skills Developed
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <ul className="space-y-3">
              {keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <span className="text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Technologies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
            <Code size={24} />
            Technologies Learned
          </h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Transition to Agrosat */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            What Came Next
          </h2>
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-3">
              In 2023, my wife and I returned to Chile. The skills I&apos;d
              rapidly developed during my freelance period - the ability to
              learn quickly, work independently, and deliver under pressure -
              caught the attention of Agrosat.
            </p>
            <p className="text-gray-300 leading-relaxed">
              They hired me as a Full Stack Developer, marking my transition
              from freelance work to a structured team environment. This was
              where I began working on larger-scale agricultural technology
              systems, eventually leading to my current role at Walmart Chile.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Reflection</h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed">
              This period wasn&apos;t glamorous. There were no venture capital
              backing, no impressive client roster, no big wins. It was messy,
              uncertain, and driven by necessity.
              <br />
              <br />
              But it taught me something invaluable:{" "}
              <strong className="text-cyan-400">
                the ability to learn rapidly under pressure and the courage to
                jump into the unknown without safety nets
              </strong>
              . These aren&apos;t skills you can learn in a bootcamp - they come
              from doing, from failing, from getting back up and trying again.
              <br />
              <br />
              Looking back, this &quot;scrappy&quot; period of freelancing was
              the foundation that made everything else possible. It proved I
              could adapt, survive, and thrive when circumstances demanded it.
            </p>
          </div>
        </section>

        {/* What It Actually Took */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            What It Actually Took
          </h2>
          <div className="bg-slate-800/30 border border-cyan-500/30 rounded-lg px-4 py-4">
            <p className="text-gray-300 leading-relaxed mb-4">
              The period from 2020 to 2024 - spanning freelance work, Agrosat,
              and ultimately Walmart - wasn&apos;t just about working. It was
              about{" "}
              <strong className="text-cyan-400">complete immersion</strong>.
              Seven days a week. Early mornings studying before work. Late
              nights coding after work. Weekends deep in documentation,
              tutorials, and building projects.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              There were trade-offs. Health took a back seat. Social life became
              minimal. But those four years of intensive, focused learning built
              something concrete:
              <strong className="text-cyan-400">
                {" "}
                a foundation deep enough that when Walmart&apos;s technical
                assessment came in 2024, I passed without stress
              </strong>
              .
            </p>
            <p className="text-gray-300 leading-relaxed">
              This isn&apos;t sustainable forever, and I have better balance
              now. But those years proved something important: you can go from
              zero to competitive in this field if you&apos;re willing to do
              what most people won&apos;t. Not through shortcuts or luck -
              through thousands of hours of deliberate practice when it matters
              most.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
