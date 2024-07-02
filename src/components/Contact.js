import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './Contact.css';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = 'ramoncastrovieira@gmail.com';
    const phone = '11972750845';

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contato</h2>
                <div className="contact-info">
                    <CopyToClipboard text={email} onCopy={handleCopy}>
                        <button className="btn btn-primary">Copiar E-mail</button>
                    </CopyToClipboard>
                    <CopyToClipboard text={phone} onCopy={handleCopy}>
                        <button className="btn btn-primary">Copiar Telefone</button>
                    </CopyToClipboard>
                </div>
                {copied && <div className="copy-alert">Copiado para a área de transferência!</div>}
            </div>
        </section>
    );
};

export default Contact;
