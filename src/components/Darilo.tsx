import React from "react";
interface DariloProps {
    ime: string;
    opis: string;
    pridni: boolean;
    minStarost: number;
    maxStarost: number;
    slika: string;
}

function Darilo(props: DariloProps) {
    return <li>{props.ime}</li>;
}

export default Darilo;