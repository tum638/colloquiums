import React from "react";
import Card from "./Card";
import ColloquiumData from "../../ColloquimData/ColloquiumData";

const Colloquiums = () => {
    let i = 0;
    const data = ColloquiumData.colloquiums;
    const events = data.map(event => (
        <Card title={event.title}
            image={event.image}
            prof={event.professor}
            date={event.date}
            location={event.location}
        />
    ));
    return (
        <div className="cardholder">
            {events}
        </div>
    )
}

export default Colloquiums