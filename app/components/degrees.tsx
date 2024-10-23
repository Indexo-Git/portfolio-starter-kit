import { IoLink } from "react-icons/io5";

export const DegreesList = () => {

    const education = [
        {
          degree: "IT Engineer",
          type: "Bachelor's degree",
          university: "Universidad Tecnologica del Centro de Veracruz",
          location: "Veracruz, Mexico",
          graduation: "May 2018",
          link: "https://chuchovergara.com/img/Cedula.png"
        },
        {
          degree: "Development of Multilevel Applications",
          type: "Associate's degree",
          university: "Institute Universitaire de Technologie Belfort-Montbeliard",
          location: "Belfort, France",
          graduation: "Jun 2015",
          link: "https://chuchovergara.com/img/licence-professionnelle.png"
        },
      ];

  return (
    <ul role="list" className="divide-y divide-gray-100">
          {
            education.map(({ degree, type, university, location, graduation, link }, index) => (
              <li key={ index } className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="font-semibold leading-6">{ degree } <small className="text-gray-700"><i> { type }</i></small></p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ university }</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end items-end">
                    <p className=" leading-6">{ location }</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      <time dateTime={ graduation }>{ graduation }</time>
                    </p>
                  </div>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={ link }
                  >
                    <IoLink className="flex-none w-4 h-4"/>
                  </a>
                </div>
              </li>
            ))
          }
    </ul>
  )
}
