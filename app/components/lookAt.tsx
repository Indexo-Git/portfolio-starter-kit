'use client';

import { lazy, Suspense, useState } from "react"
import { Logo } from "./logo";

const Spline = lazy(() => import('@splinetool/react-spline'));  

export const LookAt = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {!isLoaded && (
                <div className="py-4" style={{ height: "288px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Logo height="220px" />
                </div>
            )}
            <Suspense fallback={null}>        
                <Spline  
                scene="https://prod.spline.design/2eiqtfoTbtf1Q8XF/scene.splinecode" 
                onLoad={() => setIsLoaded(true)}
                />
            </Suspense>
        </>
    )
}
