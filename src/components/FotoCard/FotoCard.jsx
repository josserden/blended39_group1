export const FotoCard = ({ name, src, character }) => {
  return (
    <li key={name} style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div
        style={{
          borderRadius: '20px',
          overflow: 'hidden',
          display: 'inline-block',
        }}
      >
        <img alt={name} src={src} width="250" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
};
