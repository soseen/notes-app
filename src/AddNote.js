import React from 'react';
import './AddNote.css';

class AddNote extends React.Component {

    state = {
        noteToSend: '',
        characters: 0
    }

    addNote = (e) => {
        e.preventDefault();
        if(this.state.noteToSend.length > 0 && /\S/.test(this.state.noteToSend)){
            this.props.addNewNote(this.state.noteToSend)
            this.setState({
                noteToSend: ''
            })
        }
    }

    getNoteString = (e) => {
        this.setState({
            noteToSend: e.target.value,
            characters: e.target.value.length
        })
    }

    render(){
        return (
            <div className="add-note-container">
              <p>Characters: {this.state.characters}/30</p>
              <form className="note-form" onSubmit={this.addNote}>
                  <input type="textarea" onChange={this.getNoteString} maxlength={30} />
              </form>
            </div>
          );
    }
  }

  export default AddNote;