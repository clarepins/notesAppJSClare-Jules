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


(function(exports) {
  function testNoteListViewHasList() {
    var noteListView = new NoteListView();

    if (noteListView.notelist instanceof NoteList) {
      console.log("testNoteListViewHasList: Yep, contains an instance!");
    }
    else {
      throw new Error("testNoteListViewHasList Error: Doesn't have an instance of object")
    }
  };
  testNoteListViewHasList();
})(this);


(function(exports) {
  function testStringHtml() {
    var noteListView = new NoteListView();
    noteListView.notelist.create('text')
    noteListView.html()
    if (noteListView.htmlArray.includes("<ul><li><div>bob</div></li><li><div>text</div></li></ul>")) {
      console.log("testStringHtml: Yep, contains a string of HTML!");
    }
    else {
      console.log(noteListView.htmlArray)
      throw new Error("testStringHtml Error:Doesn't return string of HTML")
    }
  };
  testStringHtml();
})(this);
