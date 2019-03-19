(function(exports) {
  function testNoteListCanbeInstantiated() {
    var noteListView = new NoteListView();

    if (noteListView instanceof NoteListView) {
      console.log("testNoteListCanbeInstantiated: Yep, that's an instance!");
    }
    else {
      throw new Error("testNoteListCanbeInstantiated Error: Not an instance of object")
    }
  };
  testNoteListCanbeInstantiated();
})(this);
