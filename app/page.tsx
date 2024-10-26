import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5"
import { DegreesList } from "./components/degrees"
import { WorkExperiences } from "./components/experiences"
import { experience } from "./helpers"
import Spline from "@splinetool/react-spline"

export default function Page() {
  return (
    <>
        <Spline 
              id='logo' 
              scene="https://prod.spline.design/2eiqtfoTbtf1Q8XF/scene.splinecode" 
              />
       <section className="mb-10">
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          Jesus Vergara-Cortes
        </h1>
        <p className="mb-4">
        {` Hello, I'm a Software Engineer with over ${ experience } years of expertise in full-stack and front-end web development.`}
          </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          <IoSchoolOutline className="inline-block w-5 h-5 mr-3" />
          Education
        </h2>
        <DegreesList />
      </section>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter">
          <IoBriefcaseOutline className="inline-block w-5 h-5 mr-3" />
          Work Experience
          </h2>
        <WorkExperiences />
      </section>
    </>
  )
}
