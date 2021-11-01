import React from "react";
import './../styles/photoGalleryText.css'


const PhotoGalleryText = (props) => {
    return(
        <section className="PhotoGalleryText">
            <div className="PhotoGalleryText__box">
                <div className="PhotoGalleryText__title">
                    У НАС:
                </div>
                <div className="PhotoGalleryText__item">
                    тренажерный зал
                </div>
                <div className="PhotoGalleryText__item">
                    групповые занятия фитнесом
                </div>
                <div className="PhotoGalleryText__item">
                    степ-аэробика
                </div>
                <div className="PhotoGalleryText__item">
                    пилатес
                </div>
                <div className="PhotoGalleryText__item">
                    стретчинг
                </div>
                <div className="PhotoGalleryText__item">
                    pole dance
                </div>
                <div className="PhotoGalleryText__item">
                    тренировки с личным тренером
                </div>
                <div className="PhotoGalleryText__item">
                    йога
                </div>
            </div>
        </section>
    );
}

export default PhotoGalleryText;