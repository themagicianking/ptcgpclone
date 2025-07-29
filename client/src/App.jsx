import './App.css'

function App() {
  async function openPack() {
    try {
      await fetch('http://localhost:5000/pack')
        .then((res) => {
          if (res.status >= 400) {
            throw res.status
          }
          console.log('Got pack from server.')
          return res.json()
        })
        .then((json) => {
          console.log(json)
        })
    } catch (error) {
      console.log(error)
    }
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
