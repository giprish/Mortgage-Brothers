const MAIN_SITEMAP_XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:html="http://www.w3.org/TR/REC-html40"
	xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>XML Sitemap</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex,follow" />
	<style type="text/css">
		body {
			font-family: Helvetica, Arial, sans-serif;
			font-size: 13px;
			color: #545353;
			margin: 0;
		}
		#content {
			margin: 0 auto;
			width: 100%;
			max-width: 1000px;
		}
		.header {
			background-color: #4a76a8;
			color: #fff;
			padding: 30px 20px;
		}
		.header h1 {
			margin: 0;
			font-size: 32px;
			font-weight: normal;
		}
		.intro {
			background-color: #fff;
			padding: 20px;
			border-bottom: 1px solid #e0e0e0;
		}
		.intro p {
			margin: 0;
			line-height: 1.5;
		}
		.intro a {
			color: #4a76a8;
		}
		table {
			border: none;
			border-collapse: collapse;
			width: 100%;
			margin: 20px 0;
		}
		#sitemap tr:nth-child(odd) td {
			background-color: #f5f5f5 !important;
		}
		#sitemap tbody tr:hover td {
			background-color: #eee;
		}
		#sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
			color: #000;
		}
		#content table .loc {
			text-align: left;
		}
		#content table .lastmod {
			text-align: right;
			white-space: nowrap;
			width: 1%;
		}
		#content table th {
			padding: 8px 12px;
			text-align: left;
			font-weight: bold;
			background-color: #4a76a8;
			color: #fff;
		}
		#content table th.lastmod {
			text-align: right;
		}
		#content table td {
			padding: 8px 12px;
			vertical-align: top;
		}
		a {
			color: #000;
			text-decoration: none;
		}
		a:hover {
			text-decoration: underline;
		}
		.count {
			padding: 0 20px;
			margin-top: 20px;
		}
		.count p {
			margin: 0 0 10px;
			font-weight: bold;
		}
		.count strong {
			color: #000;
		}
	</style>
</head>
<body>
	<div class="header">
		<div id="content">
			<h1>XML Sitemap</h1>
		</div>
	</div>
	<div class="intro">
		<div id="content">
			<p>
				This XML Sitemap helps search engines like Google crawl and re-crawl
				posts, pages, categories, authors, and local listings on this website.
				<a href="https://www.sitemaps.org/" target="_blank" rel="noopener noreferrer">Learn more about XML Sitemaps</a>.
			</p>
		</div>
	</div>
	<div id="content">
		<xsl:choose>
			<xsl:when test="sitemap:sitemapindex">
				<div class="count">
					<p>This XML Sitemap Index file contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> sitemaps.</p>
				</div>
				<table id="sitemap">
					<thead>
						<tr>
							<th class="loc">Sitemap</th>
							<th class="lastmod">Last Modified</th>
						</tr>
					</thead>
					<tbody>
						<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
							<tr>
								<td class="loc">
									<a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
								</td>
								<td class="lastmod">
									<xsl:value-of select="sitemap:lastmod"/>
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>
			</xsl:when>
			<xsl:otherwise>
				<div class="count">
					<p>This XML Sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> URLs.</p>
				</div>
				<table id="sitemap">
					<thead>
						<tr>
							<th class="loc">URL</th>
							<th class="lastmod">Last Modified</th>
						</tr>
					</thead>
					<tbody>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
							<tr>
								<td class="loc">
									<a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
								</td>
								<td class="lastmod">
									<xsl:value-of select="sitemap:lastmod"/>
								</td>
							</tr>
						</xsl:for-each>
					</tbody>
				</table>
			</xsl:otherwise>
		</xsl:choose>
	</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
`;

export function GET() {
  return new Response(MAIN_SITEMAP_XSL, {
    headers: {
      "Content-Type": "text/xsl; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
