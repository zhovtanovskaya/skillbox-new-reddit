export const indexTemplate = (content) => `
<!DOCTYPE html>
<html land="en">
<head>
  <meta charset="utf-8">
  <title>Reddit</title>
  <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>
`;