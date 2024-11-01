'use client';

import { lazy, Suspense, useState } from "react"
import { Logo } from "./logo";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const LookAt = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section className="spline-large spline-small" style={{ alignItems: "center"}}>
            {!isLoaded && (
                <div className="md:py-5 sm:py-0" style={{ display: "flex", justifyContent: "center" }}>
                    <Logo height="180px" />
                </div>
            )}
            <Suspense fallback={null}>        
                <Spline  
                scene="https://prod.spline.design/2eiqtfoTbtf1Q8XF/scene.splinecode" 
                onLoad={() => setIsLoaded(true)}
                />
            </Suspense>
        </section>
    )
}
