import React from 'react';
import './components.scss'

function Footer(/*props*/) {
    return (
        <footer className="footer">
                <div>
                    <p>
                        <a
                            className="link"
                            href="https://www.linkedin.com/home/?originalSubdomain=no"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIN
                        </a>
                    </p>
                </div>
        </footer>
    );
}

export default Footer;