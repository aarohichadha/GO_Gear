document.getElementById('sessionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const school = document.getElementById('school').value;
    const session = document.getElementById('session').value;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = <p>Selected School: ${school}</p><p>Selected Session: ${session}</p>;
  });