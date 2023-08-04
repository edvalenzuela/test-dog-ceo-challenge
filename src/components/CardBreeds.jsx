export const CardBreeds = ({ url, selectBreed, i }) => {
  return (
    <li style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={url}
          style={styles.image}
          alt={`Perro de raza ${selectBreed}`}
        />
      </div>
      <div style={styles.breedName}>
        <p>
          {i}.- {selectBreed}
        </p>
      </div>
    </li>
  );
};

const styles = {
  container: {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    marginBottom: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  breedName: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};
