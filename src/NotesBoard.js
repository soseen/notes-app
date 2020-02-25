import React from 'react';
import AddNote from './AddNote';
import './NotesBoard.css';

class NotesBoard extends React.Component{

    state = {
        notes: ['Ogarnac Redux']
    }

    addNote = (note) => {
        let notes = [...this.state.notes, note];
        this.setState({
            notes: notes
        })
    }
    render(){
        return (
            <div className="board-container">
                <h1>My Notes</h1>
                <div className="notes-board">
                    {this.state.notes.map(item => (
                        <div key={item} className="note">
                            <span className="pin"></span>
                            <h3>#Note</h3>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
                <h2>New Note</h2>
                <AddNote addNewNote={this.addNote}/>
            </div>
          );
    }
   
}

export default NotesBoard;