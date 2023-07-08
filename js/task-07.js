 const nowInput = document.getElementById('font-size-control');
    const nowElement = document.getElementById('text');

    nowInput.addEventListener('input',() => {
      const fontSize = nowInput.value + 'px';
        nowElement.style.fontSize = fontSize;
    });