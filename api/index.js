export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const method = formData.get('method') || 'unescape';

        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }

        const content = await file.text();

        let encoded;
        switch (method) {
            case 'unescape':
                encoded = encodeUnescape(content);
                break;
            case 'base64':
                encoded = encodeBase64(content);
                break;
            case 'hex':
                encoded = encodeHex(content);
                break;
            case 'mixed':
                encoded = encodeMixed(content);
                break;
            default:
                encoded = encodeUnescape(content);
        }

        return res.status(200).json({ 
            encoded: encoded,
            method: method,
            size: encoded.length
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

function escapeJsStyle(html) {
    let result = [];
    for (let char of html) {
        let code = char.charCodeAt(0);
        if (code === 32) result.push('%20');
        else if (code === 33) result.push('%21');
        else if (code === 34) result.push('%22');
        else if (code === 35) result.push('%23');
        else if (code === 36) result.push('%24');
        else if (code === 37) result.push('%25');
        else if (code === 38) result.push('%26');
        else if (code === 39) result.push('%27');
        else if (code === 40) result.push('%28');
        else if (code === 41) result.push('%29');
        else if (code === 42) result.push('%2A');
        else if (code === 43) result.push('%2B');
        else if (code === 44) result.push('%2C');
        else if (code === 45) result.push('%2D');
        else if (code === 46) result.push('%2E');
        else if (code === 47) result.push('%2F');
        else if (code === 58) result.push('%3A');
        else if (code === 59) result.push('%3B');
        else if (code === 60) result.push('%3C');
        else if (code === 61) result.push('%3D');
        else if (code === 62) result.push('%3E');
        else if (code === 63) result.push('%3F');
        else if (code === 64) result.push('%40');
        else if (code === 91) result.push('%5B');
        else if (code === 92) result.push('%5C');
        else if (code === 93) result.push('%5D');
        else if (code === 94) result.push('%5E');
        else if (code === 95) result.push('_');
        else if (code === 96) result.push('%60');
        else if (code === 123) result.push('%7B');
        else if (code === 124) result.push('%7C');
        else if (code === 125) result.push('%7D');
        else if (code === 126) result.push('%7E');
        else if (code > 127 || code < 32) {
            result.push('%' + code.toString(16).toUpperCase().padStart(2, '0'));
        } else {
            result.push(char);
        }
    }
    return result.join('');
}

function encodeUnescape(html) {
    let encoded = escapeJsStyle(html);
    return `<!-- By Xemzz -->\n<!-- wa.me/6285754585160 -->\n\n<script>\ndocument.write(unescape("${encoded}"));\n<\/script>`;
}

function encodeBase64(html) {
    let encoded = Buffer.from(html, 'utf-8').toString('base64');
    return `<!-- By Xemzz -->\n<!-- wa.me/6285754585160 -->\n\n<script>\nconst _0x = "${encoded}";\ndocument.write(atob(_0x));\n<\/script>`;
}

function encodeHex(html) {
    let result = [];
    for (let char of html) {
        let code = char.charCodeAt(0);
        result.push('\\x' + code.toString(16).padStart(2, '0'));
    }
    return `<!-- By Xemzz -->\n<!-- wa.me/6285754585160 -->\n\n<script>\ndocument.write("${result.join('')}");\n<\/script>`;
}

function encodeMixed(html) {
    let b64 = Buffer.from(html, 'utf-8').toString('base64');
    let hexed = [];
    for (let char of b64) {
        let code = char.charCodeAt(0);
        hexed.push('\\x' + code.toString(16).padStart(2, '0'));
    }
    return `<!-- By Xemzz -->\n<!-- wa.me/6285754585160 -->\n\n<script>\nconst _0x = "${hexed.join('')}";\nfunction _d(s) {\n    let r = "";\n    for(let i=0; i<s.length; i++) {\n        if(s[i]==='\\\\' && i+3<s.length && s[i+1]==='x') {\n            r += String.fromCharCode(parseInt(s.substr(i+2,2),16));\n            i += 3;\n        } else {\n            r += s[i];\n        }\n    }\n    document.write(atob(r));\n}\n_d(_0x);\n<\/script>`;
}