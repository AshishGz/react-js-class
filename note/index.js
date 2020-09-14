let NOTES_KEY='user_note';
window.onload=function () {
   displayNote();
};
var notes=JSON.parse(localStorage.getItem(NOTES_KEY))?JSON.parse(localStorage.getItem(NOTES_KEY)):[];
function saveNote() {
    var note=document.getElementById('note').value;
    notes.push(note);
    localStorage.setItem(NOTES_KEY,JSON.stringify(notes));
    displayNote();
}

function displayNote() {
    console.log(localStorage.getItem(NOTES_KEY));
    var notes=localStorage.getItem(NOTES_KEY)?JSON.parse(localStorage.getItem(NOTES_KEY)):[];
    console.log(notes);
    var notesDiv='';
    notes.forEach(function (value,index) {
        if(value) {
            notesDiv = notesDiv + ' <div class="displayNote">\n' +
                '        <div>' + value + '</div>\n' +
                '        <button id="remove" onclick="deleteNote(' + index + ')">Remove</button>\n' +
                '    </div>';
        }
    });
    document.getElementById('display').innerHTML=notesDiv;
}
function deleteNote(id) {
    var notes=JSON.parse(localStorage.getItem(NOTES_KEY))?JSON.parse(localStorage.getItem(NOTES_KEY)):[];
     delete notes[id];
     localStorage.setItem(NOTES_KEY,JSON.stringify(notes));
     displayNote();
}
