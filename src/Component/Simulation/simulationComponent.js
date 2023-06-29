const SimulationComponent = ({ item }) => {
  return (
    <>
      <ImageCover infoHeader={infoHeader} />
      <section className="container simulation">
        <SimulationList item={item} />
      </section>
    </>
  );
};

export default SimulationComponent;
