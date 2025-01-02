import React from "react";

function About() {
    return (
        <div className="about-section p-4">
            <h2 className="text-2xl font-bold mb-4">À propos de notre site</h2>
            <p>
                Bienvenue !
                <br/>
                 Ma mission est simple : vous faire
                découvrir des artistes talentueux et vous offrir une expérience musicale enrichissante. 
                <br/>
                Chaque semaine, je
                met à jour la sélection de morceaux pour vous permettre d'explorer de nouvelles sonorités et de
                vous immerger dans des univers musicaux variés.
            </p>
            <p className="mt-4">
                Que vous soyez un passionné de musique ou simplement à la recherche de nouveaux sons, 
                vous allez forcément découvrir des artistes, c'est le but premier de ce site.
            </p>
            <p className="mt-4">
                Rejoignez-moi chaque semaine pour une nouvelle mise à jour de notre bibliothèque musicale et faites de chaque
                écoute un voyage. Prêt à découvrir votre prochain morceau favori ?
            </p>
        </div>
    );
}

export default About;
