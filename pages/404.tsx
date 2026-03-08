import Layout from '../components/Layout'
import React from 'react'

export default function Custom404() {
  // Include a client-side redirect script to preserve path in the hash so SPA can handle it on GitHub Pages
  // Persist the intended path so _app.tsx can restore it after redirecting to root.
  // Works for both root-deployed and sub-path (GitHub Pages /AmandaOchAxel) deployments.
  // Number of leading segments that form the app root (1 for /AmandaOchAxel, 0 for root).
  const redirectScript = `
    (function(){
      try {
        var l = window.location;
        var segments = l.pathname.split('/').filter(Boolean);
        // Detect basePath depth: if first segment matches a known repo prefix keep it.
        // We store only the *route* portion (stripping the basePath prefix).
        var basePath = (window.__NEXT_DATA__ && window.__NEXT_DATA__.basePath) || '';
        var routePath = basePath
          ? l.pathname.slice(basePath.length) || '/'
          : l.pathname;
        if (routePath && routePath !== '/' && routePath !== '') {
          try { sessionStorage.setItem('spa_redirect', routePath); } catch(_){}
        }
        // Redirect to the app root (with trailing slash for GitHub Pages)
        var root = basePath ? basePath + '/' : '/';
        l.replace(root);
      } catch (e) {
        console.error('404 redirect failed', e);
      }
    })();
  `

  return (
    <Layout title="404 — Redirecting">
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold">Omdirigerar…</h2>
        <p className="mt-2">Sidan finns inte direkt på GitHub Pages — omdirigerar till startsidan.</p>
      </div>
      {/* inject script directly so exported 404.html contains it */}
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
    </Layout>
  )
}