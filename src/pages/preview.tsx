import * as React from "react";

export default class Preview extends React.Component {
    render() {
        return <html>
            <head>
                <meta charSet="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=10" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <title></title>
                <link rel="stylesheet" type="text/css" href="./content/bootstrap.css" />
                <style type="text/css">
                    .preview .page-view .header {

                    }
                </style>
            </head>

            <body className="preview">
                <script data-main="preview/index" src="node_modules/requirejs/require.js"></script>

            </body>
        </html>
    }
}