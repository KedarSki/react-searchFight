import React from "react";
import "./Catalog.css";
import FightCard from "../fightCard/FightCard";
import { fights, getFights } from "../../data";

const Catalog = (props) => {
    const fightsToDisplay = props.term ? getFights(props.term) : fights;

    return (
        <div className="catalog">
            {fightsToDisplay.map((fight) => (
                <FightCard
                    key={fight.id}
                    image={fight.image}
                    title={fight.title}
                    description={fight.description}
                    button={fight.button}
                />
            ))}
        </div>
    );
};

export default Catalog;