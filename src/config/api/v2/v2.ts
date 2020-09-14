export const parseV2 = (reqObj: any) => {
    try {
        let firstName = '';
        let lastName = '';
        let clientId = '';
        let tempCharArray = [];
        let textString = reqObj && reqObj.data;
        for (let a = 0; a < textString.length; a++) {
            if (textString[a] !== '0') {
                tempCharArray.push(textString[a])
            } else {
                if (!firstName) {
                    firstName = tempCharArray.join('');
                } else if (!lastName) {
                    lastName = tempCharArray.join('');
                }
                tempCharArray = [];
            }
        }
        if (!clientId) {
            clientId = tempCharArray.join('');
            clientId = `${clientId.substring(0, 3)}-${clientId.substring(3, clientId.length)}`
        }
        return {
            firstName,
            lastName,
            clientId,
        };
    } catch (err) {
        throw new Error('something bad happened');
    }

}