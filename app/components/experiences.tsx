import { Achievements } from "./achievements"

export const WorkExperiences = () => {    
    const experiences = [
        {
            role: "Full-Stack Developer",
            company: "Indexo US",
            location: "Colorado, USA",
            duration: "Jan 2022 - Oct 2024",
            achievements: [
                "Designed, planned, and built a custom marketplace using React/Next.js with TypeScript and PostgreSQL, integrating payment APIs such as PayPal, Stripe, Mercado Pago, and Open Pay to serve both U.S. and Latin American markets.",
                "Designed and developed scalable websites, addressing client needs, engaging their customers, and reducing friction by optimizing processes.",
                "Improved processes and implemented technical solutions using object-oriented scripting languages like JavaScript/TypeScript and the MERN stack, providing tools to enhance client productivity and customer satisfaction.",
                "Actively collaborate with cross-functional teams to identify and develop product or service enhancements through software development, balancing strategic thinking with effective problem-solving."
            ]
        },
        {
            role: "Full-Stack Developer",
            company: "Indexo MX",
            location: "Veracruz, Mexico",
            duration: "Jan 2021 - Oct 2022",
            achievements: [
                "Developed, enhanced, and supported custom CMS platforms using PHP/Laravel and MySQL, focusing on fast content delivery by automating content creation with the OpenAI API.",
                "Reviewed functional requirements from clients, scheduled developments, and delivered high-performance websites that met client needs while adhering to usability, security, and accessibility standards.",
                "Developed and maintained CI/CD pipelines to automate testing, building, and deployment processes, ensuring efficient delivery of software solutions to customers.",
                "Partnered with senior engineers to refine and enhance technical specifications, ensuring alignment with project goals and business needs."
            ]
        },
        {
            role: "Full-Stack Developer",
            company: "LeadSEO",
            location: "Jesuralem, Israel",
            duration: "Jan 2018 - Dec 2020",
            achievements: [
                "Designed, developed, deployed, and maintained a comprehensive client portal using PHP/Laravel and MySQL, allowing users to track leads in real-time through integrated REST APIs. Integrated data sources and implemented visually engaging modules to ensure data accuracy throughout the system.",
                "Developed both backend and frontend software for a custom SEO internal tool using Angular, Node.js/Express, and MongoDB. Participated in the entire lifecycle, from development and testing to fixes and improvements, ensuring the code was reliable, maintainable, and extendable."
            ]
        },
        {
            role: "Web Designer",
            company: "Expertiseo",
            location: "Courbevoie, France",
            duration: "May 2015 - Dec 2017",
            achievements: [
                "Collaborated with professionals from multiple disciplines to craft seamless, intuitive user web experiences, applying design principles and patterns.",
                "Oversaw client projects with effective communication, from brief to final delivery, transforming requirements into fully functional, optimized websites while ensuring timelines, quality standards, and meticulous attention to detail.",
                "Developed custom WordPress solutions by optimizing themes and configurations to meet client-specific needs, enhancing website functionality and SEO performance through proficiency with front-end technologies such as CSS, JS, and HTML.",
                "Contributed to the development and improvement of the agency's services from graphic design to web design, establishing a new revenue stream that significantly impacted the company's digital growth and supported ongoing professional development and learning."
            ]
        }
    ]

  return (
    <>
        {
            experiences.map((experience, index) => (
                <div className="border-b">
                    <ul role="list" className="">
                        <li  className="flex justify-between gap-x-6 pt-5">
                            <div className="flex min-w-0 gap-x-4">
                            <div className="min-w-0 flex-auto">
                                <p className="font-semibold leading-6">{ experience.role }</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ experience.company }</p>
                            </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="leading-6">{experience.location }</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">{ experience.duration}</p>
                            </div>
                        </li>
                    </ul>
                    <Achievements achievements={ experience.achievements } />
                </div>
            ))
        }
    </>
  )
}
