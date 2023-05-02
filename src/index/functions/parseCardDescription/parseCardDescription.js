function parseCardDescription (description) {
    if (!description) return '';
    return description.replaceAll('<p>', '\n').replaceAll('</p>', '\n').replaceAll('<br/>', '\n').replaceAll('.:', '\n').replaceAll('NB!', '\n');
}

export default parseCardDescription;