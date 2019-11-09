var webstore = new Vue({
    el: "#app",
    data: {
        siteName: "I love you",
        order: {
            firstName: '',
            lastName: '',
            state: '',
            check: 'sendGift',
            radio: '盐城',
            sendGift: 'sendGift',
            dontSendGift: 'dontSendGift',
            home: '盐城',
            business: '南京',
            country:'Nevada',
            zip:''
        },
        states:{
            'AL': 'Alabama',
            'AR': 'Arizona',
            'CA': 'California',
            'NV': 'Nevada'
        }
    }
});
