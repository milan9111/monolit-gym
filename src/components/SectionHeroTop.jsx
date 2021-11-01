import React from "react";
import './../styles/sectionHeroTop.css';
import videoMp4 from '../sources/video/video.mp4';
import videoWebm from '../sources/video/video.webm';
import SectionHeroBottom from "./SectionHeroBottom";


const SectionHeroTop = (props) => {
    return(
        <div>
            <div className="sectionHeroTop">
                <div className="sectionHeroTop__content">
                    <div className="sectionHeroTop__title">
                        Не важно, как медленно ты продвигаешься, 
                    </div>
                    <div className="sectionHeroTop__subtitle">
                        главное, что ты не останавливаешься
                    </div>
                </div>
                    <video autoPlay muted loop preload="auto" className="sectionHeroTop__video">
                        <source type="video/mp4" src={videoMp4}/>
                        <source type="video/webm" src={videoWebm}/>
                    </video>  
            </div>
            <SectionHeroBottom />
        </div>
        
    );
}


export default SectionHeroTop; 