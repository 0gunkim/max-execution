const fs = require('fs');

const styleCode = `
html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p, pre, code, a,i, 
 ol, ul, li,
 form, label,
table, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, 
figure, footer, header, 
menu, nav, output, section, sum,
 audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figure, 
footer, header, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}`;

fs.writeFile('global.css', styleCode, (err) => {
      if (err) {
            console.error('Error creating style file:', err);
      } else {
            console.log('Style file created successfully!');
      }
});
