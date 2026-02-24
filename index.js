<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexConvert | Professional Image & PDF Suite</title>
    <style>
        :root {
            --primary: #00f2fe;
            --accent: #4facfe;
            --bg: #0b0f1a;
            --card-bg: rgba(255, 255, 255, 0.03);
            --border: rgba(255, 255, 255, 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', system-ui, -apple-system, sans-serif; }

        body {
            background-color: var(--bg);
            color: white;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* --- NAVIGATION --- */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 10%;
            background: rgba(11, 15, 26, 0.8);
            backdrop-filter: blur(10px);
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid var(--border);
        }

        .logo { font-size: 1.5rem; font-weight: 800; letter-spacing: -1px; }
        .logo span { color: var(--primary); }

        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { text-decoration: none; color: #94a3b8; font-size: 0.9rem; transition: 0.3s; }
        .nav-links a:hover { color: var(--primary); }

        /* --- HERO SECTION --- */
        .hero {
            text-align: center;
            padding: 80px 5% 40px;
            background: radial-gradient(circle at center, #1e293b 0%, #0b0f1a 100%);
        }

        .hero h1 { font-size: 3.5rem; margin-bottom: 1.5rem; font-weight: 900; line-height: 1.1; }
        .hero p { color: #94a3b8; font-size: 1.2rem; max-width: 600px; margin: 0 auto 3rem; }

        /* --- CONVERTER CARD --- */
        .converter-container {
            max-width: 600px;
            margin: 0 auto;
            background: var(--card-bg);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            border-radius: 32px;
            padding: 2.5rem;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        .tabs {
            display: flex;
            background: rgba(0,0,0,0.4);
            padding: 6px;
            border-radius: 16px;
            margin-bottom: 2rem;
        }

        .tab-btn {
            flex: 1;
            padding: 14px;
            border: none;
            background: transparent;
            color: #64748b;
            cursor: pointer;
            border-radius: 12px;
            font-weight: 600;
            transition: 0.3s;
        }

        .tab-btn.active {
            background: linear-gradient(135deg, var(--primary), var(--accent));
            color: #0b0f1a;
        }

        .drop-zone {
            border: 2px dashed var(--border);
            padding: 4rem 2rem;
            border-radius: 24px;
            cursor: pointer;
            transition: 0.3s;
        }

        .drop-zone:hover { border-color: var(--primary); background: rgba(0, 242, 254, 0.02); }

        .icon-circle {
            width: 70px;
            height: 70px;
            background: rgba(0, 242, 254, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
            font-size: 2rem;
        }

        .btn-main {
            width: 100%;
            margin-top: 2rem;
            padding: 1.2rem;
            border-radius: 16px;
            border: none;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            color: #0b0f1a;
            font-weight: 800;
            cursor: pointer;
            font-size: 1rem;
            box-shadow: 0 10px 20px -5px rgba(0, 242, 254, 0.3);
        }

        /* --- FEATURES SECTION --- */
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            padding: 100px 10%;
        }

        .feat-card {
            padding: 2rem;
            background: rgba(255,255,255,0.02);
            border-radius: 20px;
            border: 1px solid var(--border);
        }

        .feat-card h3 { margin-bottom: 1rem; color: var(--primary); }
        .feat-card p { color: #94a3b8; font-size: 0.9rem; }

        footer { padding: 4rem; text-align: center; border-top: 1px solid var(--border); opacity: 0.5; font-size: 0.8rem; }

    </style>
</head>
<body>

    <nav>
        <div class="logo">Flex<span>Convert</span></div>
        <ul class="nav-links">
            <li><a href="#">Tools</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">API</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>Compress Smarter.<br>Convert <span>Faster.</span></h1>
        <p>The all-in-one tool for lightning-fast image compression and PDF conversion. No quality loss, just pure optimization.</p>

        <div class="converter-container">
            <div class="tabs">
                <button class="tab-btn active" onclick="switchMode('img')">Image Compressor</button>
                <button class="tab-btn" onclick="switchMode('pdf')">PDF to Image</button>
            </div>

            <div class="drop-zone" onclick="document.getElementById('fileInput').click()">
                <input type="file" id="fileInput" hidden onchange="showFileInfo(this)">
                <div class="icon-circle" id="modeIcon">🖼️</div>
                <h3 id="modeTitle">Select Images</h3>
                <p id="modeDesc">Support for PNG, JPG, and WebP</p>
                <p id="file-status" style="margin-top:15px; color:var(--primary); font-weight:bold;"></p>
            </div>

            <button class="btn-main">Process & Download</button>
        </div>
    </section>

    <section class="features">
        <div class="feat-card">
            <h3>Secure Processing</h3>
            <p>Your files are processed locally in your browser for maximum privacy and safety.</p>
        </div>
        <div class="feat-card">
            <h3>Batch Convert</h3>
            <p>Upload multiple files at once and convert them in a single click.</p>
        </div>
        <div class="feat-card">
            <h3>High Fidelity</h3>
            <p>Our algorithms ensure that image quality remains crisp while file size drops.</p>
        </div>
    </section>

    <footer>
        &copy; 2026 FlexConvert AI. Optimized for Vercel Deployment.
    </footer>

    <script>
        function switchMode(mode) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            
            const icon = document.getElementById('modeIcon');
            const title = document.getElementById('modeTitle');
            const desc = document.getElementById('modeDesc');

            if(mode === 'img') {
                icon.innerText = '🖼️';
                title.innerText = 'Select Images';
                desc.innerText = 'Support for PNG, JPG, and WebP';
            } else {
                icon.innerText = '📄';
                title.innerText = 'Select PDF';
                desc.innerText = 'Convert PDF pages to high-res Images';
            }
        }

        function showFileInfo(input) {
            const status = document.getElementById('file-status');
            if(input.files.length > 0) {
                status.innerText = "✓ " + input.files[0].name + " ready";
            }
        }
    </script>
</body>
</html>
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
