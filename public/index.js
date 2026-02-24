<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexConvert | Image & PDF Suite</title>
    <style>
        :root {
            --primary: #00f2fe;
            --accent: #4facfe;
            --bg: #0b0f1a;
            --card: rgba(255, 255, 255, 0.04);
            --border: rgba(255, 255, 255, 0.1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', system-ui, sans-serif; }

        body {
            background-color: var(--bg);
            color: white;
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 10%;
            background: rgba(11, 15, 26, 0.8);
            backdrop-filter: blur(15px);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid var(--border);
        }

        .logo { font-size: 1.5rem; font-weight: 800; text-decoration: none; color: white; }
        .logo span { color: var(--primary); }

        .nav-links { display: flex; gap: 2rem; list-style: none; }
        .nav-links a { text-decoration: none; color: #94a3b8; font-size: 0.9rem; transition: 0.3s; }
        .nav-links a:hover { color: var(--primary); }

        /* Hero Section */
        .hero {
            padding: 100px 5% 50px;
            text-align: center;
            background: radial-gradient(circle at top right, #1e293b, #0b0f1a);
        }

        .hero h1 { font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem; font-weight: 900; }
        .hero h1 span { background: linear-gradient(90deg, var(--primary), var(--accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { color: #94a3b8; font-size: 1.2rem; max-width: 600px; margin: 0 auto 3rem; }

        /* Interactive Tool Card */
        .tool-wrapper {
            max-width: 550px;
            margin: 0 auto;
            background: var(--card);
            backdrop-filter: blur(20px);
            border: 1px solid var(--border);
            padding: 2.5rem;
            border-radius: 30px;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
        }

        .tabs {
            display: flex;
            background: rgba(0,0,0,0.3);
            padding: 6px;
            border-radius: 16px;
            margin-bottom: 2rem;
        }

        .tab-btn {
            flex: 1;
            padding: 12px;
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

        .upload-box {
            border: 2px dashed var(--border);
            padding: 4rem 2rem;
            border-radius: 20px;
            cursor: pointer;
            transition: 0.3s;
            background: rgba(255,255,255,0.01);
        }

        .upload-box:hover { border-color: var(--primary); background: rgba(0, 242, 254, 0.02); }

        .icon-box { font-size: 3rem; margin-bottom: 1rem; display: block; }

        .btn-convert {
            width: 100%;
            margin-top: 2rem;
            padding: 1.2rem;
            border-radius: 15px;
            border: none;
            background: linear-gradient(90deg, var(--primary), var(--accent));
            color: #0b0f1a;
            font-weight: 800;
            font-size: 1rem;
            cursor: pointer;
            box-shadow: 0 10px 20px -5px rgba(0, 242, 254, 0.4);
            transition: 0.3s;
        }

        .btn-convert:hover { transform: translateY(-2px); filter: brightness(1.1); }

        /* Footer */
        footer {
            margin-top: 100px;
            padding: 3rem;
            text-align: center;
            border-top: 1px solid var(--border);
            color: #475569;
            font-size: 0.9rem;
        }

    </style>
</head>
<body>

    <nav>
        <a href="#" class="logo">Flex<span>Convert</span></a>
        <ul class="nav-links">
            <li><a href="#">Compress</a></li>
            <li><a href="#">PDF Tools</a></li>
            <li><a href="#">Pricing</a></li>
        </ul>
    </nav>

    <section class="hero">
        <h1>Pro Quality. <span>Tiny Size.</span></h1>
        <p>The fastest way to optimize images and convert PDFs without losing a single pixel of quality.</p>

        <div class="tool-wrapper">
            <div class="tabs">
                <button class="tab-btn active" onclick="switchUI('img')">Compress Image</button>
                <button class="tab-btn" onclick="switchUI('pdf')">PDF to Image</button>
            </div>

            <div class="upload-box" onclick="document.getElementById('hiddenFile').click()">
                <input type="file" id="hiddenFile" hidden onchange="fileUpdate(this)">
                <span class="icon-box" id="mainIcon">🖼️</span>
                <h3 id="mainTitle">Drop your images here</h3>
                <p id="mainDesc" style="color:#64748b; font-size: 0.9rem;">Supports JPG, PNG, WebP</p>
                <p id="fileLabel" style="margin-top:15px; color:var(--primary); font-weight:bold;"></p>
            </div>

            <button class="btn-convert">Start Optimization</button>
        </div>
    </section>

    <footer>
        &copy; 2026 FlexConvert AI. Ready for Vercel Deployment.
    </footer>

    <script>
        function switchUI(mode) {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            event.target.classList.add('active');
            
            const icon = document.getElementById('mainIcon');
            const title = document.getElementById('mainTitle');
            const desc = document.getElementById('mainDesc');

            if(mode === 'img') {
                icon.innerText = '🖼️';
                title.innerText = 'Drop your images here';
                desc.innerText = 'Supports JPG, PNG, WebP';
            } else {
                icon.innerText = '📄';
                title.innerText = 'Select PDF Document';
                desc.innerText = 'Extract pages as high-quality images';
            }
        }

        function fileUpdate(input) {
            const label = document.getElementById('fileLabel');
            if(input.files.length > 0) {
                label.innerText = "📁 " + input.files[0].name + " selected";
            }
        }
    </script>
</body>
</html>
