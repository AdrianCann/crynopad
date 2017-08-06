window.onload = function(e){
  var form = document.getElementById("new_note");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var note = document.getElementById("note_message").value;
    var password = document.getElementById("note_password").value;
    var noteName = document.getElementById("note_name").value;
    localStorage.setItem(noteName, encrypt(password, note));
    var outputEl = document.getElementById("encrypted_output");
    outputEl.innerText = "Stored note: " + noteName;
  });

  var decryptForm = document.getElementById("encrypted_note");
  decryptForm.addEventListener("submit", function(e){
    e.preventDefault();
    var decryptedOutputEl = document.getElementById("decrypted_output");
    var password = document.getElementById("encrypted_note_password").value;
    var noteName = document.getElementById("encrypted_note_name").value;
    decryptedOutputEl.innerText = decrypt(password, noteName);
  });

  function encrypt(password, data) {
    return sjcl.encrypt(password, data);
  }

  function decrypt(password, noteName) {
    var noteJsonString = localStorage.getItem(noteName);
    return sjcl.decrypt(password, noteJsonString);
  }
}
