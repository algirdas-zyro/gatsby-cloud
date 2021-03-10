import React from "react";

const blockStyles = {
    "--rows": 13,
    "--width": "1180px",
    "--m-rows": "9",
    "--row-gap": "0px",
    "--row-size": "64px",
    "--attachment": "unset",
    "--column-gap": "0px",
    "--grid-width": "1180px",
    "--column-count": "12",
    "--block-padding": "10px 0 10px 0",
    "--content-width": "1600px",
    "--content-padding": "16px",
    "--m-block-padding": "64px 16px 56px 16px",
    "--oldContentWidth": "1600px",
    "--grid-gap-history": "16px 24px",
};

const componentStyles = {
    "--text": "center",
    "--align": "flex-start",
    "--justify": "flex-start",
    "--position": "3/3/6/15",
    "--m-element-margin": "0 0 16px 0",
};

function Block() {
    return (
        <section className="block" style={blockStyles}>
            <div className="background" />
            <div className="block-grid">
                <div className="block-grid-item use-m-margin grid__item" style={componentStyles}>
                    <div className="text-box block-grid-item__component">
                        <p className="h-3">
                            <span>Text</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Block;
