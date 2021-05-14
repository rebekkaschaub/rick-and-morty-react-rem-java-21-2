function CharacterCard({character} ) {

    return <section>
        <img src={character.image} alt={character.name}/>

        <h2 className={"super-header"}>
            {character.name}
        </h2>
        <div>
            {character.species}
        </div>
    </section>
}

export default CharacterCard;
