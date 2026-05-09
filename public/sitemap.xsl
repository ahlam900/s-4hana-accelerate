<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="robots" content="noindex"/>
        <title>XML Sitemap — CBS Finance Institute</title>
        <style>
          :root { color-scheme: light dark; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 2rem; background: #f8fafc; color: #0f172a; }
          h1 { font-size: 1.5rem; margin: 0 0 .25rem; }
          p { color: #475569; margin: 0 0 1.5rem; }
          .wrap { max-width: 1200px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
          table { width: 100%; border-collapse: collapse; font-size: .9rem; }
          th, td { text-align: left; padding: .75rem 1rem; border-bottom: 1px solid #f1f5f9; }
          th { background: #0f172a; color: #fff; font-weight: 600; position: sticky; top: 0; }
          tr:hover td { background: #f8fafc; }
          a { color: #2563eb; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .meta { padding: 1rem 1.25rem; border-bottom: 1px solid #e2e8f0; font-size: .85rem; color: #64748b; }
        </style>
      </head>
      <body>
        <h1>CBS Finance Institute — XML Sitemap</h1>
        <p>This sitemap is intended for search engines. URLs: <strong><xsl:value-of select="count(s:urlset/s:url)"/></strong></p>
        <div class="wrap">
          <div class="meta">Generated for https://www.cbs-institute.com</div>
          <table>
            <thead>
              <tr><th>URL</th><th>Last modified</th><th>Change freq.</th><th>Priority</th></tr>
            </thead>
            <tbody>
              <xsl:for-each select="s:urlset/s:url">
                <tr>
                  <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                  <td><xsl:value-of select="s:lastmod"/></td>
                  <td><xsl:value-of select="s:changefreq"/></td>
                  <td><xsl:value-of select="s:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
