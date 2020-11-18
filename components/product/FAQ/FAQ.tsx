import React, {useState} from "react";


function FAQ() {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className="pt-5">
            <div className="container mx-auto pt-5">
                
                
                <div className="w-10/12">
                    <ul className="montserrat">
                        <li className="border-gray-200 border-solid border-b">
                            <div className="flex justify-between items-center">
                            <div data-menu className="cursor-pointer">
                                
                            {open?<svg onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                    </svg>:<svg onClick={()=>setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                        <line x1={12} y1={9} x2={12} y2={15} />
                                    </svg>}
                                </div>
                                
                                <h3 className=" text-sm montserrat w-10/12">PRODUCT DESCRIPTION</h3>
                                
                            </div>
                            {open?<p className="pt-5 pl-5 text-xs montserrat rounded-b-lg">Lorem, ipsum dolor sit amet 
                            consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? 
                            Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias, Voluptatibus,
                             </p>:""}
                        </li>
                        <li className="border-gray-200 border-solid border-b">
                            <div className="flex justify-between items-center">
                            <div data-menu className="cursor-pointer">
                                
                            {open2?<svg onClick={()=>setOpen2(!open2)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                    </svg>:<svg onClick={()=>setOpen2(!open2)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                        <line x1={12} y1={9} x2={12} y2={15} />
                                    </svg>}
                                </div>
                                
                                <h3 className=" montserrat text-sm w-10/12">SHIPPING & RETURN</h3>
                                
                            </div>
                            {open2?<p className="pt-5 pl-5 montserrat text-xs rounded-b-lg">Lorem, ipsum dolor sit amet 
                            consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? 
                            Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias,</p>:""}
                        </li>
                        <li className="border-gray-200 border-solid border-b">
                            <div className="flex justify-between items-center">
                            <div data-menu className="cursor-pointer">
                                
                            {open3?<svg onClick={()=>setOpen3(!open3)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                    </svg>:<svg onClick={()=>setOpen3(!open3)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                        <line x1={12} y1={9} x2={12} y2={15} />
                                    </svg>}
                                </div>
                                
                                <h3 className=" montserrat text-sm w-10/12">FABRIC COMPOSITION</h3>
                                
                            </div>
                            {open3?<p className="pt-5 pl-5 montserrat text-xs rounded-b-lg">Lorem, ipsum dolor sit amet 
                            consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? 
                            Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias,</p>:""}
                        </li>
                        <li className="border-gray-200 border-solid border-b">
                            <div className="flex justify-between items-center">
                            <div data-menu className="cursor-pointer">
                                
                            {open4?<svg onClick={()=>setOpen4(!open4)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-minus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Close">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                    </svg>:<svg onClick={()=>setOpen4(!open4)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width={36} height={36} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-label="Open">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={9} y1={12} x2={15} y2={12} />
                                        <line x1={12} y1={9} x2={12} y2={15} />
                                    </svg>}
                                </div>
                                
                                <h3 className=" text-sm montserrat w-10/12">SIZE GUIDE</h3>
                                
                            </div>
                            {open4?<p className="pt-5 pl-5 montserrat text-xs rounded-b-lg">Lorem, ipsum dolor sit amet 
                            consectetur adipisicing elit. Mollitia temporibus doloremque non eligendi unde ipsam? 
                            Voluptatibus, suscipit deserunt quidem delectus perferendis velit molestias,</p>:""}
                        </li>
                      
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
