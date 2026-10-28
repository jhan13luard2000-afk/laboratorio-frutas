import { useState } from 'react';

function App() {
  // Estados para guardar los likes de cada fruta
  const [likesManzana, setLikesManzana] = useState(0);
  const [likesUva, setLikesUva] = useState(0);
  const [likesSandia, setLikesSandia] = useState(0);

  // Estado para el texto que se escribe en el buscador
  const [busqueda, setBusqueda] = useState('');

  // Calcular el total de likes sumando los tres
  const totalLikes = likesManzana + likesUva + likesSandia;

  // Filtrar visualmente según lo que escriba el usuario en el input
  const textoFiltro = busqueda.toLowerCase();
  const mostrarManzana = "manzana".includes(textoFiltro);
  const mostrarUva = "uva".includes(textoFiltro);
  const mostrarSandia = "sandia".includes(textoFiltro);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      
      {/* Título principal con el total */}
      <h1 style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '20px' }}>
        Total de likes de las frutas: {totalLikes}
      </h1>

      {/* Input de búsqueda */}
      <div style={{ marginBottom: '30px' }}>
        <input 
          type="text" 
          placeholder="Ingrese nombre de una fruta" 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{ padding: '8px 12px', width: '280px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Contenedor de las tarjetas */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Tarjeta 1: Manzana */}
        {mostrarManzana && (
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '180px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ border: '2px solid #b4e197', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>
              <span style={{ fontSize: '60px' }}>🍎</span>
            </div>
            <h3 style={{ margin: '10px 0', textTransform: 'lowercase' }}>manzana</h3>
            <button 
              onClick={() => setLikesManzana(likesManzana + 1)}
              style={{ backgroundColor: '#5cb85c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Like {likesManzana}
            </button>
          </div>
        )}

        {/* Tarjeta 2: Uva */}
        {mostrarUva && (
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '180px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ border: '2px solid #b4e197', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>
              <span style={{ fontSize: '60px' }}>🍇</span>
            </div>
            <h3 style={{ margin: '10px 0', textTransform: 'lowercase' }}>uva</h3>
            <button 
              onClick={() => setLikesUva(likesUva + 1)}
              style={{ backgroundColor: '#5cb85c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Like {likesUva}
            </button>
          </div>
        )}

        {/* Tarjeta 3: Sandía */}
        {mostrarSandia && (
          <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '180px', background: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <div style={{ border: '2px solid #b4e197', borderRadius: '8px', padding: '10px', marginBottom: '15px' }}>
              <span style={{ fontSize: '60px' }}>🍉</span>
            </div>
            <h3 style={{ margin: '10px 0', textTransform: 'lowercase' }}>sandia</h3>
            <button 
              onClick={() => setLikesSandia(likesSandia + 1)}
              style={{ backgroundColor: '#5cb85c', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Like {likesSandia}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;