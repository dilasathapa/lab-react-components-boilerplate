import React from "react";

function GalleryBody(props) {
    console.log(props)
    let {img} = props;
    return (
        <div>
            {
                img.map(image => {
                    return (
                        <div key={image.id} className="column">
                            <img src={image.img} alt=""></img>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default GalleryBody