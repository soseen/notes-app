import React, {useState} from 'react';
import './NewNoteForm.css';

const NewNoteForm = ({addNote}) => {

    const [characters, setCharacters] = useState(0);
    const [noteToSend, setNoteToSend] = useState('');

    const sendNote = (e) => {
        e.preventDefault();
        if(noteToSend.length > 0 && /\S/.test(noteToSend)){
            addNote(noteToSend);
            setNoteToSend('');
        }
    }

    const getNoteString = (e) => {
        setNoteToSend(e.target.value);
        setCharacters(e.target.value.length);
    }

    return (
        <div className="add-note-container">
            <p>Characters: {characters}/30</p>
            <form className="note-form" onSubmit={sendNote}>
                <input type="textarea" onChange={getNoteString} maxlength={30} />
            </form>
        </div>
    );
  }

  export default NewNoteForm;