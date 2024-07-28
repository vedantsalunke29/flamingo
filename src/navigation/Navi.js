import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { gsap } from "gsap";
import "./nStyle.css";
import img from "./img.png";

export default function Navi() {
    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const [change, setChange] = useState("open");
    var tl = gsap.timeline();
    var tl = gsap.timeline();

    tl.from("nav a", {
        x: 30,
        duration: 1,
        opacity: 0,
        ease: "Expo.easeInOut"
    }).from(".circle", {
        rotate: "90deg",
        opacity: 0,
        duration: 1.4,
        ease: "Expo.easeInOut"
    }, "-=1").from(".vsmcircle", {
        rotate: "-90deg",
        ease: "Expo.easeInOut"
    }, "-=1").from(".circle img", {
        y: 800,
        duration: 0.5,
        ease: "Expo.easeInOut"
    })

    const search = () => {
        setSearchIsOpen(!searchIsOpen);
        setChange(() => change === "open" ? "close" : "open");
    };

    return <>
        <div className="back">
            <div className="left">
                <nav>
                    <h2>
                        Flamingo
                    </h2>
                    <a href="#">Spring</a>
                    <a href="#">Autumn</a>
                    <a href="#">Monsoon</a>
                    <a href="#">Summer</a>
                    <a href="#">Winter</a>
                </nav>
                <div className="circle">
                    <div className="smcircle">
                        <img src={img} alt="" />
                    </div>
                    <div className="vsmcircle"></div>
                </div>
                <div className="icon"><FaShoppingCart /></div>


            </div>
            <div className={change} onClick={() => search()}><GoSidebarCollapse /></div>
            {searchIsOpen &&
                <>
                    <div className="right" >
                        <div className="se-btn" ><CiSearch /></div>
                        <input type="text" placeholder="Search" />
                        <h4>Today's Article</h4>
                        <div className="prtimg"></div>
                        <h3>Facts</h3>
                        <p>
                            When a flamingo spots potential dinner-favorite foods include shrimp, snails, and plantlike water organisms called algae-it plunges its head into the water, twists it upside down, and scoops the fish using its upper beak like a shovel. They are able to "run" on water, thanks to their webbed feet, to gain speed before lifting up into the sky.
                        </p>
                    </div>
                </>
            }
        </div>

    </>
}
