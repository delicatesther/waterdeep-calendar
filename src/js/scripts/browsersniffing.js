var browserOS = {
    iOS: !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform),
    iE: navigator.userAgent.indexOf('Trident') >= 0,
    edge: navigator.userAgent.indexOf('Edge') >= 0,
};

module.exports = browserOS;
