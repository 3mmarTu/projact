var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'home/html'});
  res.write('<form action="upload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file"value="download22" name="fileToUpload" id="fileToUpload"><br>');
  res.write('<input type="submit" value="download" name="submit"class="btn btn-one">');
  res.write('</form>');
  return res.end();
}).listen(8080);







// const url = 'home.html'
// const form = document.querySelector('form')

// form.addEventListener('submit', e => {
//   e.preventDefault()

//   const files = document.querySelector('download').files
//   const formData = new FormData()

//   for (let i = 0; i < files.length; i++) {
//     let file = files[i]

//     formData.append('files[]', file)
//   }

//   fetch(url, {
//     method: 'POST',
//     body: formData,
//   }).then(response => {
//     console.log(response)
//   })
// })













function getUserName() {
    var nameField = document.getElementById('download22').value;
    var result = document.getElementById('download');
    
    if (nameField.length < 3) {
        result.textContent = 'download';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Your username is: ' + nameField;
        //alert(nameField);
    }
    }