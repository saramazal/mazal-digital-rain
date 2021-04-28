
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    drops = [],
    text = [],
    font_size = 18;

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 1.2;
  columns = canvas.width / font_size;

  context.translate(canvas.width, 0);
  context.scale(-1, 1);
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    drops = [],
    text = [],
    font_size = 18;

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 1.2;
  columns = canvas.width / font_size;

  context.translate(canvas.width, 0);
  context.scale(-1, 1);

  //Hebrew @ hiragana characters, Numbers and Alphabets.
  var chars = "ארקשדגכעינהבסזטוןםפףךלחיענמצתץ1234567890「平」とは平凡な、やさしいという意で、当時普通に使用する文字体系であったことを意味するなどを書く場合に用いる公的な文字であるのに対して、 平仮名は漢字の知識に乏しい人々などが用いる私的な性格のものであったASDFGHJKLMNBVCXZQWERTYUIOP".split(
    ""
  );

  for (var i = 0; i < columns; i++) drops[i] = Math.random() * 50 - 50;

  function draw() {
    // Background with 0.2 opacity.
    context.font = font_size + "px 'Consolas', 'Josefin Sans'";
    context.fillStyle = "rgba(0, 0, 0, 0.02)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Set the previous line to neon.
    context.fillStyle = "#00ffff";
    for (var i = 0; i < drops.length; i++) {
      context.fillText(text[i], i * font_size, drops[i] * font_size);
    }

    // Generate new characters.
    context.fillStyle = "#c4ffff";
    for (var i = 0; i < drops.length; i++) {
      drops[i]++;
      
      // Random character to print.
      text[i] = chars[Math.floor(Math.random() * chars.length)];
      
      // Parameters - text, x-pos, y-pos.
      context.fillText(text[i], i * font_size, drops[i] * font_size);

      // Sending the drop to the top randomly, after it has crossed the screen.
      if (drops[i] * font_size > canvas.height)
        drops[i] = Math.random() * 100 - 100;
    }
  }

  setInterval(draw, 77);

