    fetch('/navMenu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navMenu').innerHTML = data;
      });

      fetch('/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header').innerHTML = data;
      });