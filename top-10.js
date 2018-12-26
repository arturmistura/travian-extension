var farmConta = parseInt($('#top10_raiders .own .val').text());
var farmLinha = 0;

$("#top10_raiders .hover").each(function () {
    var farmLinha = parseInt($(this).find('.val').text());
    $(this).find('.ra').text(((farmConta / farmLinha) * 100).toFixed(2) + '%');
});