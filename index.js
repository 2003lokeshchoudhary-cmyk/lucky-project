<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="High-performance optimized frontend">
    <title>Optimized Front C</title>
    <style>
        :root{--p:#007bff;--bg:#0f172a;--txt:#f8fafc}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,system-ui,sans-serif;background:var(--bg);color:var(--txt);line-height:1.6;display:flex;justify-content:center;align-items:center;min-height:100vh}
        .container{max-width:800px;padding:2rem;text-align:center;animation:fadeIn 0.8s ease-in}
        h1{font-size:3rem;margin-bottom:1rem;background:linear-gradient(90deg,var(--p),#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
        p{font-size:1.2rem;opacity:0.8}
        .btn{display:inline-block;margin-top:2rem;padding:0.8rem 2rem;background:var(--p);color:#fff;text-decoration:none;border-radius:8px;transition:transform 0.2s}
        .btn:hover{transform:scale(1.05)}
        @keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    </style>
</head>
<body>
    <main class="container">
        <h1>Node.js Optimized</h1>
        <p>This page is served with Gzip compression and 1-year browser caching for maximum performance.</p>
        <a href="#" class="btn">Get Started</a>
    </main>
    <script defer>
        console.log("Frontend loaded at:", new Date().toLocaleTimeString());
    </script>
</body>
</html>
