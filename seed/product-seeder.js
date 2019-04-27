var Products = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect ('mongodb://localhost:27017/shopping' ,{ useNewUrlParser: true });

var products = [
    new Products({
      imagepath:'https://ae01.alicdn.com/kf/HTB1lQwjKXGWBuNjy0Fbq6z4sXXai/Full-Cat-Kiss-Fish-5D-Diy-Diamond-Painting-Embroidery-Cartoon-Animation-Children-s-Bedroom-Square-round.jpg_640x640.jpg',
      title: 'Cat kiss fish',
      description: 'Wonderful',
      price: 11
}),
new Products({
    imagepath:'https://ae01.alicdn.com/kf/HTB1lQwjKXGWBuNjy0Fbq6z4sXXai/Full-Cat-Kiss-Fish-5D-Diy-Diamond-Painting-Embroidery-Cartoon-Animation-Children-s-Bedroom-Square-round.jpg_640x640.jpg',
    title: 'Cat kiss fish',
    description: 'Wonderful',
    price: 12
}),
new Products({
    imagepath:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b067161e-4c5c-4d5b-94f6-b7a33c0e1c79/d7tgqmq-b12c5094-09ac-4635-a4bd-2127e7a2928e.jpg/v1/fill/w_1024,h_1366,q_75,strp/cat_kiss_fish_by_caisemogu_d7tgqmq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcL2IwNjcxNjFlLTRjNWMtNGQ1Yi05NGY2LWI3YTMzYzBlMWM3OVwvZDd0Z3FtcS1iMTJjNTA5NC0wOWFjLTQ2MzUtYTRiZC0yMTI3ZTdhMjkyOGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN7f5mEkRe-k7z6RH1U4iEqPsuIGfktzGx_P5U8nNRk',
    title: 'Cat kiss fish',
    description: 'Wonderful',
    price: 13
}),
new Products({
    imagepath:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b067161e-4c5c-4d5b-94f6-b7a33c0e1c79/d7tgqmq-b12c5094-09ac-4635-a4bd-2127e7a2928e.jpg/v1/fill/w_1024,h_1366,q_75,strp/cat_kiss_fish_by_caisemogu_d7tgqmq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcL2IwNjcxNjFlLTRjNWMtNGQ1Yi05NGY2LWI3YTMzYzBlMWM3OVwvZDd0Z3FtcS1iMTJjNTA5NC0wOWFjLTQ2MzUtYTRiZC0yMTI3ZTdhMjkyOGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN7f5mEkRe-k7z6RH1U4iEqPsuIGfktzGx_P5U8nNRk',
    title: 'Cat kiss fish',
    description: 'Wonderful',
    price: 14
}),
new Products({
    imagepath:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b067161e-4c5c-4d5b-94f6-b7a33c0e1c79/d7tgqmq-b12c5094-09ac-4635-a4bd-2127e7a2928e.jpg/v1/fill/w_1024,h_1366,q_75,strp/cat_kiss_fish_by_caisemogu_d7tgqmq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcL2IwNjcxNjFlLTRjNWMtNGQ1Yi05NGY2LWI3YTMzYzBlMWM3OVwvZDd0Z3FtcS1iMTJjNTA5NC0wOWFjLTQ2MzUtYTRiZC0yMTI3ZTdhMjkyOGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN7f5mEkRe-k7z6RH1U4iEqPsuIGfktzGx_P5U8nNRk',
    title: 'Cat kiss fish',
    description: 'Wonderful',
    price: 15
}),
new Products({
    imagepath:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b067161e-4c5c-4d5b-94f6-b7a33c0e1c79/d7tgqmq-b12c5094-09ac-4635-a4bd-2127e7a2928e.jpg/v1/fill/w_1024,h_1366,q_75,strp/cat_kiss_fish_by_caisemogu_d7tgqmq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM2NiIsInBhdGgiOiJcL2ZcL2IwNjcxNjFlLTRjNWMtNGQ1Yi05NGY2LWI3YTMzYzBlMWM3OVwvZDd0Z3FtcS1iMTJjNTA5NC0wOWFjLTQ2MzUtYTRiZC0yMTI3ZTdhMjkyOGUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZN7f5mEkRe-k7z6RH1U4iEqPsuIGfktzGx_P5U8nNRk',
    title: 'Cat kiss fish',
    description: 'Wonderful',
    price: 16
})]

var done=0;

for (var i=0; i<products.length; i++){
    products[i].save(function(err, result){
       console.log(products[i])
       console.log(err)

        done++;
        if (done === products.length){
            exit();
        }
    });
};

function exit(){
    mongoose.disconnect();
}
