$('.smiley').on('click',function (){
    $('.message_content').emoji({
        // trigger button
        button:'.smiley',
        showTab: false,
        animation:'slide',
        position: 'topRight',
        excludeNums: [41,45,54],
        icons:[{
            name: 'Emoji',
            path: '/image/emoji/',
            maxNum: 84,
            file: '.png'
        }]
    })
})