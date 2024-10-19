import { DegreesList } from "./components/degrees"
import { WorkExperiences } from "./components/experiences"
import { experience } from "./helpers"

export default function Page() {
  return (
    <>
       <section className="mb-10">
        <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
          Jesus Vergara-Cortes
        </h1>
        <p className="mb-4">
        {` Hello, I'm a Software Engineer with over ${ experience } years of expertise in full-stack and front-end web development.`}
          </p>
      </section>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter">Education</h2>
        <DegreesList />
      </section>
      <section className="mb-10">
        <h2 className="mb-2 text-2xl font-semibold tracking-tighter">Work Experience</h2>
        <WorkExperiences />
      </section>
    </>
  )
}
