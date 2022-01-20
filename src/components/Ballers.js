const Ballers = ({ ballers }) => {
  const handleClick = () => console.log("clicked");
  return (
    <section className="players">
      <article className="container">
        {ballers.map((baller) => (
          <a className="player" href="#" key={baller.id} id={baller.id}>
            <div>
              <h2 className="player__heading">{baller.name}</h2>
              <h5>{baller.team}</h5>
              <picture>
                <source srcset={baller.imageSRC} />
                <img src={baller.imageSRC} />
              </picture>
              <p>{baller.bio}</p>
            </div>
          </a>
        ))}
      </article>
    </section>
  );
};

export default Ballers;
