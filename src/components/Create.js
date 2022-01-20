import { useState } from 'react'
const Create = () => {
    const [name, setName] = useState('');
    const [team, setTeam] = useState('');
    const [bio, setBio] = useState('');
    const [league, setLeague] = useState('');
    return (
        <div className="create">
            <h1>Add a new player</h1>
            <form action="">
                <label>Player Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value) } />
                <label>Player Team</label>
                <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
                <label>League</label>
                <input type="text" value={league} onChange={(e) => setLeague(e.target.value)} />
                <label>Bio</label>
                <textarea value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
                <button>Add to Balllers</button>
                <p>{ name }</p>
                <p>{ team }</p>
                <p>{ bio }</p>
                <p>{ league }</p>
        
            </form>
        </div>
    )
}
export default Create