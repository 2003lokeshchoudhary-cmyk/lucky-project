<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexConvert | Professional Suite</title>
    <style>
        :root { --p: #00f2fe; --a: #4facfe; --bg: #0b0f1a; --c: rgba(255,255,255,0.05); }
        body { background: var(--bg); color: white; font-family: sans-serif; margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; }
        
        /* The Interface Card */
        .card { background: var(--c); border: 1px solid rgba(255,255,255,0.1); padding: 40px; border-radius: 24px; backdrop-filter: blur(10px); width: 90%; max-width: 500px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
        
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 20px; }
        .logo span { color: var(--p); }

        .tabs { display: flex; gap: 10px; margin-bottom: 25px; background: rgba(0,0,0,0.2); padding: 5px; border-radius: 12px; }
        .tab { flex: 1; padding: 10px; border: none; background: none; color: #888; cursor: pointer; border-radius: 8px; font-weight: bold; transition: 0.3s; }
        .tab.active { background: linear-gradient(to right, var(--p), var(--a)); color: #0b0f1a; }

        .dropzone { border: 2px dashed rgba(255,255,255,0.2); padding: 50px 20px; border-radius: 15px; cursor: pointer; transition: 0.3s; }
        .dropzone:hover { border-color: var(--p); background: rgba(0,242,254,0.05); }

        .btn { width: 100%; margin-top: 25px; padding: 15px; border-radius: 12px; border: none; background: linear-gradient(to right, var(--p), var(--a)); color: #0b0f1a; font-weight: bold; cursor: pointer; font-size: 16px; }
    </style>
</head>
<body>

    <div class="card">
        <div class="logo">Flex<span>Convert</span></div>
        
        <div class="tabs">
            <button class="tab active" onclick="switchMode('img', this)">Compress Image</button>
            <button class="tab" onclick="switchMode('pdf', this)">PDF to Image</button>
        </div>

        <div class="dropzone" onclick="document.getElementById('f').click()">
            <input type="file" id="f" hidden onchange="alert('File Selected: ' + this.files[0].name)">
            <div style="font-size: 40px; margin-bottom: 10px;" id="icon">🖼️</div>
            <p id="txt">Click to upload Images</p>
        </div>

        <button class="btn">Process & Download</button>
    </div>

    <script>
        function switchMode(mode, el) {
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('icon').innerText = mode === 'img' ? '🖼️' : '📄';
            document.getElementById('txt').innerText = mode === 'img' ? 'Click to upload Images' : 'Click to upload PDF';
        }
    </script>
</body>
</html>
