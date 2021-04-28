
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
  var chars = "ארקשדגכעינהבסזטוןםפףךלחיענמצתץ1234567890「平」とは平凡な、やさしいという意で通に 使 用 する文 字 体 系 で あったことを意味するや重 要な文 章などを 書く場合に用いる公的な文字であるのに対して、 平 仮 名 は 漢 字の知 識 に乏しい人々などが用いる私的な性格のものであったASDFGHJKLMNBVCXZQWERTYUIOP".split(
    ""
  );

  for (var i = 0; i < columns; i++) drops[i] = Math.random() * 50 - 50;

  function draw() {
    // Background with 0.1 opacity.
    context.font = font_size + "px 'Sawarabi Mincho', 'Roboto Mono'";
    context.fillStyle = "rgba(0, 0, 0, 0.1)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Set the previous line to neon.
    context.fillStyle = "#36f57f";
    for (var i = 0; i < drops.length; i++) {
      context.fillText(text[i], i * font_size, drops[i] * font_size);
    }

    // Generate new characters.
    context.fillStyle = "#fff";
    for (var i = 0; i < drops.length; i++) {
      drops[i]++;
      
      // Random character to print.
      text[i] = chars[Math.floor(Math.random() * chars.length)];
      
      // Parameters - text, x-pos, y-pos.
      context.fillText(text[i], i * font_size, drops[i] * font_size);

      // Sending the drop to the top randomly, after it has crossed the screen.
      if (drops[i] * font_size > canvas.height)
        drops[i] = Math.random() * 77 - 77;
    }
  }

  setInterval(draw, 34);

