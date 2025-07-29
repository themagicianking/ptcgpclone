import './App.css'

function App() {
  async function openPack() {
    let pack = ['card', 'card', 'card', 'card', 'card']
    console.log(pack)
  }

  return (
    <>
      <div className="card">
        <h1>PTCGP Clone</h1>
        <p>
          This app is a WIP clone of the Pokémon Trading Card Game Pocket game.
        </p>
        <button onClick={openPack}>Mythical Island</button>
      </div>
    </>
  )
}

export default App
