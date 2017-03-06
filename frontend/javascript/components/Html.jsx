import React, { PropTypes } from 'react';

const Html = ({ title, markup, state }) => (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <title>{title}</title>
                    <meta name="description" content="" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta property="og:title" content={title} />
                    <meta property="og:type" content="article" />
                    <meta property="og:description" content="Description Here" />
                </head>
                <body>
                    <div
                        id="app"
                        className="app"
                        dangerouslySetInnerHTML={{ __html: markup }}
                    />
                    <script dangerouslySetInnerHTML={{ __html: state }} />
                    <script src='/static/main.js' defer />
                </body>
            </html>
        );

Html.propTypes = {
    markup: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};

export default Html;