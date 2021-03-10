import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";
import moment from "moment";
import * as uuid from "uuid";

const blockStyles = {
    "--rows": 16,
    "--width": "1180px",
    "--m-rows": "9",
    "--row-gap": "16px",
    "--row-size": "64px",
    "--attachment": "unset",
    "--column-gap": "16px",
    "--grid-width": "1180px",
    "--column-count": "12",
    "--block-padding": "10px 0 10px 0",
    "--content-width": "1600px",
    "--content-padding": "16px",
    "--m-block-padding": "64px 16px 56px 16px",
    "--oldContentWidth": "1600px",
    "--grid-gap-history": "16px 24px",
};

const defaultStyles = {
    "--text": "center",
    "--align": "flex-start",
    "--justify": "flex-start",
    "--position": "1/3/2/15",
    "--m-element-margin": "0 0 16px 0",
};

const image1Styles = {
    ...defaultStyles,
    "--position": "2/3/4/6",
};

const image2Styles = {
    ...defaultStyles,
    "--position": "2/6/4/9",
};

const image3Styles = {
    ...defaultStyles,
    "--position": "2/9/6/14",
};

const image4Styles = {
    ...defaultStyles,
    "--position": "4/3/8/9",
};

const image5Styles = {
    ...defaultStyles,
    "--position": "8/3/16/15",
};

function Block() {
    // this is here just to bloat up the bundle
    const { desktop } = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "6.JPG" }) {
                    childImageSharp {
                        fluid(quality: 85, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    moment.now();
    uuid.v4();

    return (
        <section className="block" style={blockStyles}>
            <div
                className="background"
                style={{ backgroundImage: "url('../../images/5.JPG')" }}
            />

            <BackgroundImage
                Tag="div"
                className="background"
                fluid={desktop.childImageSharp.fluid}
            />
            <div className="block-grid">
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={defaultStyles}
                >
                    <div className="text-box block-grid-item__component">
                        <p className="h-3">
                            <span>Text block</span> <Link to="/about">about link</Link>.
                        </p>
                    </div>
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image1Styles}
                >
                    <StaticImage src="../../images/1.JPG" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image2Styles}
                >
                    <StaticImage src="../../images/2.JPG" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image3Styles}
                >
                    <StaticImage src="../../images/3.JPG" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image4Styles}
                >
                    <StaticImage src="../../images/4.JPG" alt="alt" />
                </div>
                <div
                    className="block-grid-item use-m-margin grid__item"
                    style={image5Styles}
                >
                    <StaticImage src="../../images/5.JPG" alt="alt" />
                </div>
            </div>
        </section>
    );
}

export default Block;
