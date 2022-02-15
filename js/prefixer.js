/**
 * Préfixe une chaine.
 */
 function prefix(prefix, contents) {
    return `[${prefix.toUpperCase()}] ${contents}`;
}

if (typeof module !== 'undefined') module.exports = prefix;