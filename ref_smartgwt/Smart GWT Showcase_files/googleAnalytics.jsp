                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
var useAnalytics = true;
var useRecaptcha = true;

<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NL2B46XS');
<!-- End Google Tag Manager -->

// Google Analytics
var analyticsId = "UA-768321-1";
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', analyticsId, 'auto');
ga('send', 'pageview');
ga('ecommerce:send');

// Google Conversion
var conversionId = "1063035128";
(function() {
var c = document.createElement('script'); c.type = 'text/javascript'; c.charset = "utf-8";
c.src = ('https:' == document.location.protocol ? 'https://www' : 'http://www') + '.googleadservices.com/pagead/conversion_async.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(c, s);

window._googleConversionInterval = setInterval(function () {
    if (window.google_trackConversion) {
        window.google_trackConversion({
            google_conversion_id: conversionId, 
            google_custom_params: window.google_tag_params,
            google_remarketing_only: true
        });
        clearInterval(window._googleConversionInterval);
        delete window._googleConversionInterval;
    }
}, 25);
})();

