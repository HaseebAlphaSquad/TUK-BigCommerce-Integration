import React from "react";
import Info from "./Info";

function Hero() {
    return (
        <div className="w-full max-h-screen heroimg flex items-center justify-between">
                      
            <div className="container h-600 content-center mx-auto text-white grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                <div className="rounded idiv m-auto p-10">
                    <Info title="NEW COLLECTION" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Enim tincidunt dignissim amet mauris. Id cursus nunc
                        vulputate." text="SHOP NEW ARRIVALS" />
                </div>
                <div className="rounded mx-auto">
                </div> 
            </div>
        </div>
    );
}
export default Hero;