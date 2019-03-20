(function(exports) {
  function NoteListView() {
    this.notelist = new NoteList;
    this.htmlArray = []
  };
//
  exports.NoteListView = NoteListView;
})(this);


NoteListView.prototype.html = function() {
  console.log('TESTT')
  this.htmlArray.push("<ul>")
  for(var i = 0; i < this.notelist.notesArray.length; i++) {
    this.htmlArray.push("<li><div>" + this.notelist.notesArray[i] + "</div></li>")
  }
  this.htmlArray.push("</ul>")
  this.htmlArray = this.htmlArray.join("")
  console.log(this.htmlArray)
}

// }
//
//
// Note.prototype.getText = function() {
//     return this.text
//   };

// <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>.
