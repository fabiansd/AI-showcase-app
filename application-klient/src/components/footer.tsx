import React from 'react';
import '../style/components.scss'

function Footer(/*props*/) {
    return (
        <footer className="footer">
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
        </footer>
    );
}

export default Footer;