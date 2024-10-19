'use client';

import { useState } from "react"

export const Achievements  = ({ achievements }) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button
            type="button"
            aria-label="Open item"
            title="Open item"
            className="flex items-center justify-between w-full py-2  focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
        >
            <p className="text-xs">Achievements</p>
            <svg
            viewBox="0 0 24 24"
            className={`w-3 transform transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
            }`}
            >
            <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
            />
            </svg>
        </button>
        {isOpen && (
            <div>
                <ul className="list-disc list-inside mb-2">
                    {
                        achievements.map((achievement, index) => (
                            <li key={index} className="text-sm  leading-normal">
                                { achievement }
                            </li>
                        ))
                    }
                </ul>
            </div>
        )}
    </div>
  )
}
