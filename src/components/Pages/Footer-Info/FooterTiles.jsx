import React from "react";
import './footertyles.css'
import Tile from "../../Modules/Tiles/Tiles";
import brand from "../../../assets/brand.png";
import our_story from "../../../assets/our_story.png";

export default function FooterTiles () {
    return (
        <footer-info>
            <Tile title="The brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi dolore illo ipsa maiores modi quasi quidem sequi vero. Eveniet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae consequuntur corporis eligendi impedit iste, rem temporibus!</p>
            </Tile>
            <Tile img={brand} imgDescription="The brand logo" />
            <Tile img={our_story} imgDescription="The designers" />
            <Tile title="Our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
            </Tile>
        </footer-info>
    )
}
