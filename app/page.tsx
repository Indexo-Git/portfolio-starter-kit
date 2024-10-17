
export default function Page() {

  const today = new Date();
  const birthday = new Date(1990, 5, 10);
  const start = new Date(2015,4,13)
  const diffforAge = today.valueOf() - birthday.valueOf();
  const diffExp = today.valueOf() - start.valueOf();
        
  const age = Math.floor(diffforAge / 31536000000);
  const experience = Math.floor(diffExp / 31536000000);

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
