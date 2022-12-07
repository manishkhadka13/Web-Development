<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<table border="1">
<tr>
<td colspan="2">Name</td>
<td rowspan="2">Email</td>
<td rowspan="2">Phone</td>
<td rowspan="2">Address</td>
</tr>
<tr>
<td>Firstname</td>
<td>Lastname</td>
</tr>
<tr>
<td><xsl:value-of select="teacher/name/firstname"/></td>
<td><xsl:value-of select="teacher/name/lastname"/></td>
<td><xsl:value-of select="teacher/email"/></td>
<td><xsl:value-of select="teacher/phone"/></td>
<td><xsl:value-of select="teacher/address"/></td>
</tr>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>