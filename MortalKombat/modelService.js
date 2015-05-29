var app = angular.module('MortalKombat');

app.service('modelService', function() {
    this.cartoonArray = [
        {
            name: 'Scorpion',
            url: 'http://vignette1.wikia.nocookie.net/mkwikia/images/8/86/Scorpion_mkx_Render.png/revision/latest?cb=20150324192348',
            desc: 'Vengeance will be mine!'
        },
        {
            name: 'Kuai Liang',
            url: 'http://vignette2.wikia.nocookie.net/mkwikia/images/e/eb/Gamer%27s_render.png/revision/latest?cb=20150313212524',
            desc: 'This fight will be your last!'
        },
        {
            name: 'Tremor',
            url: 'http://vignette1.wikia.nocookie.net/mkwikia/images/5/56/Shitty_tremor.png/revision/latest?cb=20150510160534',
            desc: 'Black Dragon clan'
        },
         {
            name: 'Tanya',
            url: 'http://vignette1.wikia.nocookie.net/mkwikia/images/c/c6/Tanya-bio-cutout_render.png/revision/latest?cb=20150527205646',
            desc: 'I have been called an enforcer of the Deadly Alliance.'
        }
    ];
});
