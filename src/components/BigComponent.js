import { useState } from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    return (
        <section className="border-2 border-purple-400 p-5 m-3">
            <h2 className="font-bold text-3xl">{title}</h2>
                        
            { isVisible ? 
            <>
                <button 
                    classname="cursor-pointer underline" 
                    onClick={()=>setIsVisible(false)}>
                    hide
                </button>
                <p className="mt-5">{description}</p>
            </> :  
            <button 
                classname="cursor-pointer underline" 
                onClick={()=>setIsVisible(true)}>
                show
            </button> }
        </section>
    );
}


const BigComponent = () =>{

    const [visibleSection, setVisibleSection] = useState("contact");
    return (
        <>
            <Section 
                isVisible={visibleSection === "contact"} 
                setIsVisible={(show) => setVisibleSection(show ? "contact" : null)}
                title="Contact" 
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."/>
            <Section 
                isVisible={visibleSection === "about"} 
                setIsVisible={(show)=> setVisibleSection(show ? "about" : null)}
                title="About" 
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."/>
            <Section 
                isVisible={visibleSection === "career"} 
                setIsVisible={(show)=> setVisibleSection(show ? "career" : null)}
                title="Career" 
                description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here."/>
            
        </>
    );
}

export default BigComponent;