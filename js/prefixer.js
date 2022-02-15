/**
 * Préfixe une chaine.
 */
 function prefix(prefix, contents) {
    return `[${prefix.toUpperCase()}] ${contents.trim()}`;
}

if (typeof module !== 'undefined') module.exports = prefix;