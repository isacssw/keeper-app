import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from '../notes'

function createNotes(someNotes){
    return (
        <Note
        key = {someNotes.id}
        title = {someNotes.title}
        paragraph = {someNotes.content}
        />
    )
}

function App(){
    return (
        <div>
            <Header />
            {notes.map(createNotes)}
            <Footer />
        </div>
    )
}

export default App

