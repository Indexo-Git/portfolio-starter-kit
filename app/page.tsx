import { experience } from "./helpers"

export default function Page() {

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      Jesus Vergara-Cortes
      </h1>
      <p className="mb-4">
       {` Hello, I'm a Software Engineer with over ${ experience } years of expertise in full-stack and front-end web development, seeking a position 
        to collaborate with talented Software Engineers and UI/UX designers in building high-quality, modern web experiences using emerging technologies.`}
        </p>
    </section>
  )
}
