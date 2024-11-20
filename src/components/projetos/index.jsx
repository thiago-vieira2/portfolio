import './index.scss';
import doc from '../../Screenshot_19.png';
import { useState, Link } from 'react';
import { GoArrowRight } from "react-icons/go";


export default function Projetos() {
    const [projetos, setProjetos] = useState([
        {
            id: 1,
            nm_projeto: "Doctor's Health",
            text_projeto: "O objetivo do projeto é criar um sistema de saúde para médicos.",
            img_projeto: doc,
        },
        {
            id: 2,
            nm_projeto: "Web Motor (Desenvolvimento)",
            text_projeto: "Uma réplica do site da Web Motors.",
           
        },
    ]);

    return (
        <div className="projetos">
            {projetos.map((projeto) => (
                <div className="map" key={projeto.id}>
                    <div className="quadrados">
                        <img src={projeto.img_projeto}  />
                        <div className="overlay"><Link>{projeto.nm_projeto} <GoArrowRight/></Link></div>
                    </div>
                    <div className="text">
                        <h2>{projeto.nm_projeto}</h2>
                        <p>{projeto.text_projeto}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
