export const parse = (reqObj: any) => {
    let firstName = '';
    let lastName = '';
    let clientId = '';
    let textString = reqObj && reqObj.data;
    let tempCharArray = [];
    let foundsplit = false;
    let splitend = false;
    for (let a = 0; a < textString.length; a++) {
        if ([undefined, '0'].includes(textString[a + 1])) {
            foundsplit = true;
        }
        tempCharArray.push(textString[a]);
        if (foundsplit && (textString[a + 1] !== '0' || typeof textString[a + 1] === 'undefined')) {
            foundsplit = false;
            splitend = true;
        }
        if (!foundsplit && splitend) {
            if (!firstName) {
                firstName = tempCharArray.join('');
            } else if (!lastName) {
                lastName = tempCharArray.join('');
            } else if (!clientId) {
                clientId = tempCharArray.join('');
            }

            // temp array clean up
            tempCharArray = [];
            foundsplit = false;
            splitend = false;
        }
    }
    return {
        firstName,
        lastName,
        clientId,
    };
}