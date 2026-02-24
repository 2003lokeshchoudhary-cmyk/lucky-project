<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compressor Pro | Image & PDF</title>
    <style>
        :root {
            --primary: #00f2fe;
            --accent: #4facfe;
            --bg: #0f172a;
            --glass: rgba(255, 255, 255, 0.05);
            --border: rgba(255, 255, 255, 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; }

        body {
            background: radial-gradient(circle at top right, #1e293b, #0f172a);
            color: white;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .main-card {
            background: var(--glass);
            backdrop-filter: blur(12px);
            border: 1px solid var(--border);
            padding: 2.5rem;
            border-radius: 24px;
            width: 100%;
            max-width: 500px;
            text-align: center;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        header h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        header h1 span { color: var(--primary); }
        header p { opacity: 0.6; font-size: 0.9rem; margin-bottom: 2rem; }

        /* Tab System */
        .tabs {
            display: flex;
            background: rgba(0,0,0,0.3);
            padding: 5px;
            border-radius: 14px;
            margin-bottom: 2rem;
        }

        .tab-btn {
            flex: 1;
            padding: 12px;
            border: none;
            background: transparent;
            color: #94a3b8;
            cursor: pointer;
            border-radius: 10px;
            font-weight: 600;
            transition: 0.3s;
        }

        .tab-btn.active {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: var(--bg);
        }

        /* Drop Zone */
        .upload-area {
            border: 2px dashed var(--border);
            padding: 3rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s;
            position: relative;
        }

        .upload-area:hover {
            border-color: var(--primary);
            background: rgba(0, 242, 254, 0.03);
        }

        .upload-area i { font-size: 3rem; display: block; margin-bottom: 1rem; }

        .btn-action {
            width: 100%;
            margin-top: 2rem;
            padding: 1rem;
            border-radius: 12px;
            border: none;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            color: var(--bg);
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn-action:hover { opacity: 0.9; transform: translateY(-1px); }

        #file-info { margin-top: 1rem; font-size: 0.8rem; color: var(--primary); display: none; }
    </style>
</head>
<body>

    <div class="main-card">
        <header>
            <h1>Flex<span>Convert</span></h1>
            <p>Optimize Images & PDF in seconds</p>
        </header>

        <div class="tabs">
            <button class="tab-btn active" onclick="setMode('img')">Image</button>
            <button class="tab-btn" onclick="setMode('pdf')">PDF</button>
        </div>

        <div class="upload-area" onclick="document.getElementById('fileInput').click()">
            <input type="file" id="fileInput" hidden onchange="handleFile(this)">
            <div id="icon-box">🖼️</div>
            <p id="upload-text">Click to upload or drag & drop</p>
            <p id="file-info"></p>
        </div>

        <div class="options" style="margin-top: 1.5rem; text-align: left;">
            <label style="font-size: 0.8rem; opacity: 0.7;">Quality Setting</label>
            <input type="range" style="width: 100%; accent-color: var(--primary);">
        </div>

        <button class="btn-action">Download Optimized File</button>
    </div>

    <script>
        let currentMode = 'img';

        function setMode(mode) {
            currentMode = mode;
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            const icon = document.getElementById('icon-box');
            const text = document.getElementById('upload-text');
            
            if(mode === 'img') {
                icon.innerHTML = '🖼️';
                text.innerText = 'Upload JPG, PNG or WebP';
            } else {
                icon.innerHTML = '📄';
                text.innerText = 'Upload PDF to convert to Image';
            }
        }

        function handleFile(input) {
            const info = document.getElementById('file-info');
            if(input.files && input.files[0]) {
                info.style.display = 'block';
                info.innerText = `Selected: ${input.files[0].name} (${(input.files[0].size/1024).toFixed(1)} KB)`;
            }
        }
    </script>
</body>
</html>
